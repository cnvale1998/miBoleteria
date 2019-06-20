import { Injectable } from '@angular/core';
import { Provincia } from './provincia';//pongo que voy a usar esas clases del modelo
import { ApiControladorService } from './../controladores/apiControlador/api-controlador.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GestorProvinciaService {
  
  constructor(private conector:ApiControladorService) { }
  
 public getProvincias(){
      
  return this.conector.ObtenerProvincias().pipe(
     map(datos => {
          if (datos instanceof Array) {
            return datos.map(dato => {return new Provincia(dato['ID_PROVINCIA'],dato['NOMBRE_P']);});
          }
        })
      );
 }
 

}