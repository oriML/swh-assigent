import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ICountryShortModel } from 'src/app/models/country.model';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent implements OnInit {

  @Input() countries$!: Observable<ICountryShortModel[]>;
  countries!: ICountryShortModel[];
  @Output() removeCountryEvent = new EventEmitter<ICountryShortModel>();

  constructor() { }

  ngOnInit(): void {
    this.countries$.subscribe(x => {
      this.countries = x;
    })
  }

}
