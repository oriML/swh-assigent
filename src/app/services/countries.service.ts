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

  private countriesList: ICountryShortModel[] = [];
  private filteredCountriesList: CountryModel[] = [];

  private countriesSubject$: Subject<ICountryShortModel[]> = new Subject();
  private filteredCountriesSubject$: Subject<CountryModel[]> = new Subject();

  public get allCountries$(): Observable<ICountryShortModel[]> {
    return this.countriesSubject$.asObservable();
  }

  public get allFilteredCountries$(): Observable<CountryModel[]> {
    return this.filteredCountriesSubject$.asObservable();
  }

  constructor(private _api: ApiService) { }

  public async getByCriteria(criteria: CountriesCriteria) {

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
