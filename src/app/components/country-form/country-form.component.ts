import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CountryModel } from 'src/app/models/country.DTO';
import { ICountryShortModel } from 'src/app/models/country.model';
import { CountriesService } from 'src/app/services/countries.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-country-form',
  templateUrl: './country-form.component.html',
  styleUrls: ['./country-form.component.scss']
})
export class CountryFormComponent implements OnInit {

  countries!: CountryModel[];
  form!: FormGroup;

  constructor(
    private readonly _countriesService: CountriesService,
    private readonly _lsService: LocalStorageService,
    private _fb: FormBuilder
  ) {

  }

  ngOnInit(): void {
    this.countries = this._lsService.getItem("countries");
    this.initForm();
  }

  initForm() {
    this.form = this._fb.group({
      name: ['', Validators.required],
      fromDate: [undefined, Validators.required],
      toDate: [undefined, Validators.required],
      notes: ['']
    })
    this.form.valueChanges.subscribe(x => console.log(x));
  }

  addCountry() {
    this._countriesService.add(this.form.value);
  }
}
