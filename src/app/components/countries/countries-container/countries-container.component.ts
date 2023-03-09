import { Component, OnInit } from '@angular/core';
import { CountryModel } from 'src/app/models/country.DTO';
import { ICountryShortModel } from 'src/app/models/country.model';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-countries-container',
  templateUrl: './countries-container.component.html',
  styleUrls: ['./countries-container.component.scss']
})
export class CountriesContainerComponent implements OnInit {

  constructor(
    public _countriesService: CountriesService,
  ) { }

  ngOnInit(): void {
  }

  removeCountry(country: ICountryShortModel) {
    this._countriesService.remove(country);
  }

}
