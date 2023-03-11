import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CountriesCriteria } from '../models/countriesCriteria';
import { CountryModel } from '../models/country.DTO';
import { lastValueFrom } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl: string;

  constructor(
    private _service: HttpClient,
  ) {
    this.baseUrl = `https://restcountries.com/v3.1/`;
  }

  public async getByCriteria(criteria: CountriesCriteria): Promise<CountryModel[] | []> {
    let res = [] as CountryModel[];
    let url = this.baseUrl;

    if (criteria.name != null) {
      url += `name/${criteria.name}`
    }

    try {
      res = await lastValueFrom(this._service.get<CountryModel[]>(url));
    } catch (error) {
      console.error(error)
      res = [];
    }
    return res;
  }

}
