import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import {NotFoundError} from '../../../shared/components/not-found-error/not-found-error';
import { CountryInformation } from './country-information/country-information';

@Component({
  selector: 'app-country-page',
  imports: [NotFoundError, CountryInformation],
  templateUrl: './country-page.html',
})
export class CountryPageComponent {

  countryCode=inject(ActivatedRoute).snapshot.params['code'];
  countryService=inject(CountryService)

  countryResource=rxResource({
    params:()=>(this.countryCode),
    stream:({params:code})=>{
      return this.countryService.searchCountryByCode(code);
    }
  });

 }
