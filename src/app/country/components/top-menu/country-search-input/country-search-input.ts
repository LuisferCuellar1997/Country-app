import { Component,input,output } from '@angular/core';

@Component({
  selector: 'app-country-search-input',
  imports: [],
  templateUrl: './country-search-input.html',
})
export class CountrySearchInput {

  termino=output<string>();
  placeholder=input<string>();

  onSearch(value:string){
    this.emitTermino(value);
  }

  emitTermino(termino:string){
    this.termino.emit(termino);
  }

 }
