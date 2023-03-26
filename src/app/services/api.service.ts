import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { CountriesCriteria } from '../models/countriesCriteria';
import { CountryModel } from '../models/country.DTO';
import { lastValueFrom } from 'rxjs'
import { EnvironmentConfig, ENV_CONFIG } from 'src/environments/environment-config.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly baseUrl: string;

  constructor(
    @Inject(ENV_CONFIG) private config: EnvironmentConfig,
    private _service: HttpClient,
  ) {
    this.baseUrl = `${config.environment.baseUrl}`;
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
