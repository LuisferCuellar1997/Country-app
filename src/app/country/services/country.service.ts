import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTCountry } from '../interfaces/rest-countries.interface';
import { CountryMapper } from '../mappers/country.mapper';
import { Country } from '../interfaces/country.interface';
import { map , catchError, throwError, delay} from 'rxjs';

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
      delay(1500),
      catchError(error=>{
        return throwError(()=>new Error('No se obtuvieron resultados'))
      })
    )
  }

  searchByCountry(query: string) {
    query=query.toLowerCase().trim();
    return this.http.get<RESTCountry[]>(`${api_url}/name/${query}`)
    .pipe(
      map(result=>CountryMapper.MapToCountries(result)),
      delay(1500),
      catchError(error=>{
        return throwError(()=>new Error('No se obtuvieron resultados'))
      })
    )
  }

  searchByRegion(query: string) {
    query=query.toLowerCase().trim();
    return this.http.get<RESTCountry[]>(`${api_url}/region/${query}`)
    .pipe(
      map(result=>CountryMapper.MapToCountries(result)),
      catchError(error=>{
        return throwError(()=>new Error('No se obtuvieron resultados'))
      })
    )
  }

  searchCountryByCode(alfa: string) {
    alfa=alfa.toLowerCase().trim();
    return this.http.get<RESTCountry[]>(`${api_url}/alpha/${alfa}`)
    .pipe(
      map(result=>CountryMapper.MapToCountries(result)),
      map(result=>result.at(0)),
      catchError(error=>{
        return throwError(()=>new Error('No se obtuvieron resultados'))
      })
    )
  }

}
