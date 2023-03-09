import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { CountriesContainerComponent } from './components/countries/countries-container/countries-container.component';
import { CountriesListComponent } from './components/countries/countries-list/countries-list.component';
import { CountriesRowComponent } from './components/countries/countries-row/countries-row.component';
import { CountryFormComponent } from './components/country-form/country-form.component';
import { CountriesListGuard } from './guards/countries-list.guard';
import { CountriesListClearGuard } from './guards/countries-list-clear.guard';
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
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    CountriesContainerComponent,
    CountriesListComponent,
    CountriesRowComponent,
    CountryFormComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    CountriesListGuard,
    CountriesListClearGuard,
    MatDatepickerModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
