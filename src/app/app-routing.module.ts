import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CountriesListClearGuard } from './guards/countries-list-clear.guard';
import { CountriesListGuard } from './guards/countries-list.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [CountriesListGuard],
    canDeactivate: [CountriesListClearGuard],
    component: AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }