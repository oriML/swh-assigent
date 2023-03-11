import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CountriesContainerComponent } from './components/countries/countries-container/countries-container.component';
import { CountriesListComponent } from './components/countries/countries-list/countries-list.component';
import { CountriesRowComponent } from './components/countries/countries-row/countries-row.component';
import { CountryFormComponent } from './components/country-form/country-form.component';
import { HttpClientModule } from '@angular/common/http';

import {
  MatFormFieldModule
} from '@angular/material/form-field';

import {
  MatSelectModule
} from '@angular/material/select';

import {
  MatInputModule
} from '@angular/material/input';

import {
  MatButtonModule
} from '@angular/material/button';

import {
  MatDatepickerModule
} from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    CountriesContainerComponent,
    CountriesListComponent,
    CountriesRowComponent,
    CountryFormComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
  ],
  providers: [
    MatDatepickerModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
