import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountryModel } from '../models/country.DTO';
import { lastValueFrom, map, Observable, Subject, tap } from 'rxjs';
import { CountriesCriteria } from '../models/countriesCriteria';
import { LocalStorageService } from './local-storage.service';
import { ICountryShortModel } from '../models/country.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private baseUrl: string;
  private countriesList: ICountryShortModel[] = [];
  private filteredCountriesList: CountryModel[] = [];

  public countriesSubject$: Subject<ICountryShortModel[]> = new Subject();
  public filteredCountriesSubject$: Subject<CountryModel[]> = new Subject();

  constructor(
    private _api: ApiService,
  ) {
    this.baseUrl = `https://restcountries.com/v3.1/`;
  }

  public async getByCriteria(criteria: CountriesCriteria) {

    let url = this.baseUrl;

    if (criteria.name != null) {
      url += `name/${criteria.name}`
    }

    this.filteredCountriesList = await this._api.getByCriteria(criteria);

    this.filteredCountriesSubject$.next(this.filteredCountriesList);
  }

  public add(country: ICountryShortModel) {
    this.countriesList = [...this.countriesList, country];
    this.countriesSubject$.next(this.countriesList);
  }

  public remove(country: ICountryShortModel) {
    const index = this.countriesList.indexOf(country);
    this.countriesList = this.countriesList.filter((x, i) => i != index);
    this.countriesSubject$.next(this.countriesList);
  }
}
