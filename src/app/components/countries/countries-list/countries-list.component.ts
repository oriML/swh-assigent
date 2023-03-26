import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Observable, takeWhile } from 'rxjs';
import { ICountryShortModel } from 'src/app/models/country.model';
import { countriesTableColumns } from 'src/app/utils/constants';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent implements OnInit, OnDestroy {

  @Input() countries$!: Observable<ICountryShortModel[]>;
  countries!: ICountryShortModel[];
  @Output() removeCountryEvent = new EventEmitter<ICountryShortModel>();

  private keepAlive: boolean = true;

  constructor() { }

  ngOnDestroy(): void {
    this.keepAlive = false;
  }

  ngOnInit(): void {
    const parent = this;

    this.countries$
      .pipe(takeWhile(() => parent.keepAlive))
      .subscribe(x => {
        this.countries = x;
      })
  }

  get tableColumns() {
    return countriesTableColumns;
  }

}
