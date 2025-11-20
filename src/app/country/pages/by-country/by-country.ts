import { Component } from '@angular/core';
import { CountrySearchInput } from "../../components/top-menu/country-search-input/country-search-input";
import { TablePage } from "../../../shared/components/table-page/table-page";

@Component({
  selector: 'app-by-country',
  imports: [CountrySearchInput, TablePage],
  templateUrl: './by-country.html',
})
export class ByCountryComponent {
  placeholder:string=" por PAÍS";
}
