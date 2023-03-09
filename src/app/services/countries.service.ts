import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountryModel } from '../models/country.DTO';
import { lastValueFrom, Subject } from 'rxjs';
import { CountriesCriteria } from '../models/countriesCriteria';
import { LocalStorageService } from './local-storage.service';
import { ICountryShortModel } from '../models/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private baseUrl: string;
  private countriesList: ICountryShortModel[] = [];
  public countriesSubject$: Subject<ICountryShortModel[]> = new Subject();

  constructor(
    private _service: HttpClient,
    private _lsService: LocalStorageService,
  ) {
    this.baseUrl = `https://restcountries.com/v3.1/`;
  }

  public async getByCriteriaCached(): Promise<CountryModel[]> {
    // if local storage has value - get from local storage
    const countries = this._lsService.getItem("countries");
    if (countries) {
      return countries;
    }
    // else, refetch data
    return await this.get();
  }

  public async get() {
    let url = this.baseUrl + 'all';

    return lastValueFrom(this._service.get<CountryModel[]>(url));
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
