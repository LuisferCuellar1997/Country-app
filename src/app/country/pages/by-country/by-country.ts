import { Component, inject, resource, signal } from '@angular/core';
import { CountrySearchInput } from "../../components/top-menu/country-search-input/country-search-input";
import { TablePage } from "../../../shared/components/table-page/table-page";
import { firstValueFrom, of } from 'rxjs';
import { CountryService } from '../../services/country.service';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-by-country',
  imports: [CountrySearchInput, TablePage],
  templateUrl: './by-country.html',
})
export class ByCountryComponent {
  placeholder:string=" por PAÍS";
  countryService=inject(CountryService);

  query=signal('');
  /* countryResources=resource({
    params:()=>({query:this.query()}),
    loader:async({params})=>{
      if(!params.query) return[];
      return await firstValueFrom(
        this.countryService.searchByCountry(params.query)
      )
    }
  }) */

    countryResources=rxResource({
    params:()=>({query:this.query()}),
    stream:({params})=>{
       if(!params.query) return of([]);
       return this.countryService.searchByCountry(params.query)
    }
  });
}
