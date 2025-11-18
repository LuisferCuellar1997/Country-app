import { Component } from '@angular/core';
import { TablePage } from "../../../shared/components/table-page/table-page";
import { CountrySearchInput } from "../../components/top-menu/country-search-input/country-search-input";

@Component({
  selector: 'app-by-capital',
  imports: [TablePage, CountrySearchInput],
  templateUrl: './by-capital.html',
})
export class ByCapitalComponent {

  placeholder:string="Region";

}
