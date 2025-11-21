import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RESTCountry } from '../../../country/interfaces/rest-countries.interface';
import { Country } from '../../../country/interfaces/country.interface';
import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-table-page',
  imports: [DecimalPipe, RouterLink],
  templateUrl: './table-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TablePage {


  countries=input.required<Country[]>();
  isError=input<string|undefined>();
  isLoading=input<boolean>(false);
  isEmpty=input<boolean>(false);

}
