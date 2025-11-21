import { Component, inject, input, signal } from '@angular/core';
import { Country } from '../../../interfaces/country.interface';
import { DecimalPipe } from '@angular/common';
import { Location } from '@angular/common';

@Component({
  selector: 'app-country-information',
  imports: [DecimalPipe],
  templateUrl: './country-information.html',
})
export class CountryInformation {
  country=input.required<Country>()
  location=inject(Location)

  goBack(){
    this.location.back();
  }
}

