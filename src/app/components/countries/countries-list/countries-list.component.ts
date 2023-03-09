import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CountryModel } from 'src/app/models/country.DTO';
import { ICountryShortModel } from 'src/app/models/country.model';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent implements OnInit {

  @Input() countries: ICountryShortModel[] | null = [];

  @Output() removeCountryEvent = new EventEmitter<ICountryShortModel>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.countries)
  }

}
