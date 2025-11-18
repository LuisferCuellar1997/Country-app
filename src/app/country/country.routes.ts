import { Routes } from '@angular/router';
import { ByCapitalComponent } from './pages/by-capital/by-capital';
import { CountryLayout } from './layouts/CountryLayout/CountryLayout';

export const countryRoutes: Routes = [
  {
    path: '',
    component: CountryLayout,
    children:[
      {
        path:'by-capital',
        component:ByCapitalComponent
      },
      {
        path:'**',
        redirectTo:'by-capital'
      }
    ]
  }
];

export default countryRoutes;
