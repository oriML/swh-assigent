import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Observable, takeUntil } from 'rxjs';
import { ICountryShortModel } from 'src/app/models/country.model';
import { countriesTableColumns } from 'src/app/utils/constants';
import { Unsub } from 'src/app/utils/unsub.class';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent extends Unsub implements OnInit, OnDestroy {

  @Input() countries$!: Observable<ICountryShortModel[]>;
  countries!: ICountryShortModel[];
  @Output() removeCountryEvent = new EventEmitter<ICountryShortModel>();

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.countries$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(x => {
        this.countries = x;
      })
  }

  get tableColumns() {
    return countriesTableColumns;
  }

}
