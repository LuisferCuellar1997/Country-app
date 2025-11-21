import { Component, inject, resource, signal } from '@angular/core';
import { TablePage } from "../../../shared/components/table-page/table-page";
import { CountrySearchInput } from "../../components/top-menu/country-search-input/country-search-input";
import { CountryService } from '../../services/country.service';
import { firstValueFrom, of } from 'rxjs';
import {rxResource} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-by-capital',
  imports: [TablePage, CountrySearchInput],
  templateUrl: './by-capital.html',
})
export class ByCapitalComponent {

  countryService=inject(CountryService);

  placeholder:string=" por CAPITAL";

  query=signal('');

  countryResources=rxResource({
    params:()=>({query:this.query()}),
    stream:({params})=>{
       if(!params.query) return of([]);
       return this.countryService.searchByCapital(params.query)
    }
  });

  /* countryResources=resource({
    params:()=>({query:this.query()}),
    loader:async({params})=>{
      if(!params.query) return[];
      return await firstValueFrom(
        this.countryService.searchByCapital(params.query)
      )
    }
  }); */
/*
  isLoading=signal(false);
  isError=signal<string|null>(null);
  countries=signal<Country[]>([]);



  onSearch(query: string) {

    console.log("Hola mundo")
    if(this.isLoading()) return;
    this.isLoading.set(true);
    this.isError.set(null);
    this.countryService.searchByCapital(query).subscribe(
      {
        next:(countries)=> {
          this.isLoading.set(false);
          this.countries.set(countries);
        },
        error:(err)=> {

          this.isLoading.set(false);
          this.countries.set([]);
          this.isError.set(err);
        },
      }
    );
  }
 */


}
