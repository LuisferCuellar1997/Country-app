import { Component, inject, resource, signal } from '@angular/core';
import { CountrySearchInput } from "../../components/top-menu/country-search-input/country-search-input";
import { TablePage } from "../../../shared/components/table-page/table-page";
import { firstValueFrom } from 'rxjs';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  imports: [CountrySearchInput, TablePage],
  templateUrl: './by-region.html',
})
export class ByRegionComponent {
  placeholder:string=" por REGIÓN";
  countryService=inject(CountryService);

  query=signal('');
  countryResources=resource({
    params:()=>({query:this.query()}),
    loader:async({params})=>{
      if(!params.query) return[];
      return await firstValueFrom(
        this.countryService.searchByRegion(params.query)
      )
    }
  })
}
