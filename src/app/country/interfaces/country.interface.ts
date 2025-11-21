export interface Country{
  cca2: string; //ID
  icono: string; //ICONO
  bandera:string; //BANDERA
  name:string; //NOMBRE DEL PAIS
  capital:string; //CAPITAL
  population:number; //POBLACION
  lenguages?:string[];
  borders?:Country[];
  currency?:string;
  region?:string;
  location?:string;
  escudo?:string;
}
