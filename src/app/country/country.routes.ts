import { Routes } from '@angular/router';
import { ByCapitalComponent } from './pages/by-capital/by-capital';
import { CountryLayout } from './layouts/CountryLayout/CountryLayout';
import { ByRegionComponent } from './pages/by-region/by-region';
import { ByCountryComponent } from './pages/by-country/by-country';
import { CountryPageComponent } from './pages/country-page/country-page';

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
        path:'by-region',
        component:ByRegionComponent
      },
      {
        path:'by-country',
        component:ByCountryComponent
      },
      {
        path:'by/:code',
        component:CountryPageComponent
      },
      {
        path:'**',
        redirectTo:'by-capital'
      }
    ]
  }
];

export default countryRoutes;
