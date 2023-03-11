import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICountryShortModel } from 'src/app/models/country.model';

@Component({
  selector: 'app-countries-row',
  templateUrl: './countries-row.component.html',
  styleUrls: ['./countries-row.component.scss']
})
export class CountriesRowComponent implements OnInit {

  @Input() country!: ICountryShortModel;

  @Output() removeCountryEvent = new EventEmitter<ICountryShortModel>();

  constructor() { }

  ngOnInit(): void {
  }

  removeCountry() {
    this.removeCountryEvent.emit(this.country);
  }

  getFormattedDate(date: Date) {
    return date.toLocaleDateString();
  }

}
