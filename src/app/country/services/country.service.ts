import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTCountry } from '../interfaces/rest-countries.interface';
import { CountryMapper } from '../mappers/country.mapper';
import { Country } from '../interfaces/country.interface';
import { map, catchError, throwError, delay, tap, Observable, forkJoin, of, switchMap } from 'rxjs';

const api_url = 'https://restcountries.com/v3.1';

@Injectable({ providedIn: 'root' })
export class CountryService {
  constructor() {}

  private http = inject(HttpClient);

  searchByCapital(query: string) {
    query = query.toLowerCase().trim();
    return this.http.get<RESTCountry[]>(`${api_url}/capital/${query}`).pipe(
      map((result) => CountryMapper.MapToCountries(result)),
      delay(1500),
      catchError((error) => {
        return throwError(() => new Error('No se obtuvieron resultados'));
      })
    );
  }

  searchByCountry(query: string) {
    query = query.toLowerCase().trim();
    return this.http.get<RESTCountry[]>(`${api_url}/name/${query}`).pipe(
      map((result) => CountryMapper.MapToCountries(result)),
      delay(1500),
      catchError((error) => {
        return throwError(() => new Error('No se obtuvieron resultados'));
      })
    );
  }

  searchByRegion(query: string) {
    query = query.toLowerCase().trim();
    return this.http.get<RESTCountry[]>(`${api_url}/region/${query}`).pipe(
      map((result) => CountryMapper.MapToCountries(result)),
      catchError((error) => {
        return throwError(() => new Error('No se obtuvieron resultados'));
      })
    );
  }

  searchCountryByCode(alfa: string): Observable<Country> {
    alfa = alfa.toLowerCase().trim();

    return this.http.get<RESTCountry[]>(`${api_url}/alpha/${alfa}`).pipe(
      map((result) => CountryMapper.MapToCountries(result)[0]),
      switchMap((country) => {
        if (!country || !country.bordersString?.length) {
          return of({ ...country, borders: [] });
        }

        return this.getBorders(country.bordersString).pipe(
          map((borders) => ({ ...country, borders }))
        );
      }),
      tap((result) => console.log(result)),
      catchError((error) => {
        return throwError(() => new Error('No se obtuvieron resultados'));
      })
    );
  }

  getBorders(alpha: string[]): Observable<Country[]> {
    const requests = alpha.map((code) =>
      this.http.get<RESTCountry[]>(`${api_url}/alpha/${code}`).pipe(
        map((result) => CountryMapper.MapToCountries(result)),
        map((result) => result[0])
      )
    );

    return forkJoin(requests);
  }
}
