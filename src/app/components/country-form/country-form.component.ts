import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { CountriesCriteria } from 'src/app/models/countriesCriteria';
import { CountryModel } from 'src/app/models/country.DTO';
import { CountriesService } from 'src/app/services/countries.service';
import { countriesTableColumns, noResultsMsg } from 'src/app/utils/constants';
import { Unsub } from 'src/app/utils/unsub.class';

@Component({
  selector: 'app-country-form',
  templateUrl: './country-form.component.html',
  styleUrls: ['./country-form.component.scss']
})
export class CountryFormComponent extends Unsub implements OnInit, OnDestroy {

  countries: CountryModel[] = [];

  form!: FormGroup;
  criteriaForm!: FormGroup;

  constructor(
    public _countriesService: CountriesService,
    private _fb: FormBuilder
  ) {
    super();
  }

  ngOnInit(): void {
    this.initForm();
    this.initCriteria();
    this._countriesService.allFilteredCountries$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(x => {
        this.countries = x;
      });

  }

  initForm() {
    this.form = this._fb.group({
      name: ['', Validators.required],
      fromDate: [undefined, Validators.required],
      toDate: [undefined, Validators.required],
      notes: ['']
    })
  }

  initCriteria() {
    this.criteriaForm = this._fb.group({
      name: ['']
    });

    this.criteriaForm.valueChanges
      .pipe(
        takeUntil(this.unsubscribe$),
        debounceTime(400)
      )
      .subscribe(() => this.setCriteria());
  }

  addCountry() {
    this._countriesService.add(this.form.value);
  }

  setCriteria() {
    const criteria = this.criteriaForm.value as CountriesCriteria;
    this._countriesService.getByCriteria(criteria);
  }

  setCountryName(event: MatAutocompleteSelectedEvent) {
    const name = event.option.value;
    const nameControl = this.form.controls["name"] as FormControl;
    nameControl.setValue(name);
  }

  public get criteriaNameControl() {
    return this.criteriaForm.controls["name"] as FormControl;
  }

  get tableColumnsGroup() {
    const columnGroup: { [name: string]: string } = countriesTableColumns.reduce((p, c) => ({
      [c.key]: c.value,
      ...p
    }), {});

    return columnGroup;
  }

  get noResultsMsg() {
    return noResultsMsg;
  }

}
