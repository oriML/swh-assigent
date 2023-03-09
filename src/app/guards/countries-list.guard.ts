import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CountryModel } from '../models/country.DTO';
import { CountriesService } from '../services/countries.service';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CountriesListGuard implements CanActivate {

  private readonly _countriesService: CountriesService;
  private readonly _lsService: LocalStorageService;

  constructor(
    countriesService: CountriesService,
    lsService: LocalStorageService
  ) {
    this._countriesService = countriesService;
    this._lsService = lsService;
  }

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | UrlTree> {

    const countires: CountryModel[] = await this._countriesService.get();

    this._lsService.setItem("countries", countires);

    return true;
  }

}
