import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RESTCountry } from '../../../country/interfaces/rest-countries.interface';
import { Country } from '../../../country/interfaces/country.interface';
import { CurrencyPipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-table-page',
  imports: [DecimalPipe],
  templateUrl: './table-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TablePage {


  countries=input.required<Country[]>();
  isError=input<Error|undefined>();

}
