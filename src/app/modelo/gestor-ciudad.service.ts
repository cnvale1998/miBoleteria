import { Injectable } from '@angular/core';
import { Ciudad } from './ciudad';
import { ApiControladorService } from './../controladores/apiControlador/api-controlador.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GestorCiudadService {
  
  constructor(private conector:ApiControladorService) { }
  
 public getCiudades(){
      
  return this.conector.ObtenerCiudades().pipe(
     map(datos => {
          if (datos instanceof Array) {
            return datos.map(dato => {return new Ciudad(dato['ID_PROVINCIA'],dato['CIUDAD']);});
          }
        })
      );
 }
 

}
