import { Component } from '@angular/core';
import { CountrySearchInput } from "../../components/top-menu/country-search-input/country-search-input";
import { TablePage } from "../../../shared/components/table-page/table-page";

@Component({
  selector: 'app-by-region',
  imports: [CountrySearchInput, TablePage],
  templateUrl: './by-region.html',
})
export class ByRegionComponent {
  placeholder:string=" por REGIÓN";
}
