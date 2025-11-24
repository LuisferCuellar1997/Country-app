export interface Country{
  cca2: string; //ID
  icono: string; //ICONO
  bandera:string; //BANDERA
  name:string; //NOMBRE DEL PAIS
  capital:string; //CAPITAL
  population:number; //POBLACION
  lenguages?:string[];
  borders?:Country[];
  bordersString?:string[];
  currency?:string[];
  region?:string;
  location?:string;
  latLong?:number[];
  escudo?:string;
}
