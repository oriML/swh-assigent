import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CountriesContainerComponent } from './components/countries/countries-container/countries-container.component';
import { CountryFormComponent } from './components/country-form/country-form.component';
import { HomeComponent } from './components/home/home.component';
import { CountriesListClearGuard } from './guards/countries-list-clear.guard';
import { CountriesListGuard } from './guards/countries-list.guard';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        canActivate: [CountriesListGuard],
        canDeactivate: [CountriesListClearGuard],
        component: HomeComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }