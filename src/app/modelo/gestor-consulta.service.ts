import { Injectable } from '@angular/core';
import { Consulta } from './consulta';
import { ApiControladorService } from './../controladores/apiControlador/api-controlador.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GestorConsultaService {
  
  constructor(private conector:ApiControladorService){ }
  
  public crearConsulta(email:string,motivo:string,detalle:string,ciudad:string) {
      this.conector.crearConsulta({ID_CONSULTA:null,DETALLE:detalle,MOTIVO:motivo,EMAIL:email,CIUDAD:ciudad});
      
  }
 
}
