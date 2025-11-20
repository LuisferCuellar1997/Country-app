import { count } from "rxjs";
import { Country } from "../interfaces/country.interface";
import { RESTCountry } from "../interfaces/rest-countries.interface";

export class CountryMapper{

  static MapToCountry(CountryRepsonse:RESTCountry):Country{
    return {
      cca2: CountryRepsonse.cca2,
      icono: CountryRepsonse.flags.svg,
      bandera: CountryRepsonse.flags.png,
      name: CountryRepsonse.translations["spa"]?.common || CountryRepsonse.name.common ,
      capital: CountryRepsonse.capital.at(0) || 'No Capital',
      population: CountryRepsonse.population
    };
  }

  static MapToCountries(CountryResponse:RESTCountry[]):Country[]{
    return CountryResponse.map(this.MapToCountry);
  }
}
