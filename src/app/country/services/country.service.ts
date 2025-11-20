import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTCountry } from '../interfaces/rest-countries.interface';
import { CountryMapper } from '../mappers/country.mapper';
import { Country } from '../interfaces/country.interface';
import { map , catchError, throwError} from 'rxjs';

const api_url='https://restcountries.com/v3.1';

@Injectable({providedIn: 'root'})
export class CountryService {
  constructor() { }
  private http=inject(HttpClient);

  searchByCapital(query: string) {
    query=query.toLowerCase().trim();
    return this.http.get<RESTCountry[]>(`${api_url}/capital/${query}`)
    .pipe(
      map(result=>CountryMapper.MapToCountries(result)),
      catchError(error=>{
        console.log(error);
        return throwError(()=>new Error('No se obtuvieron resultados'))
      })
    )
  }

}
