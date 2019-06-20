import { Injectable } from '@angular/core';
import { Persona } from './persona';
import { ApiControladorService } from './../controladores/apiControlador/api-controlador.service';

@Injectable({
  providedIn: 'root'
})
export class GestorPersonaService {
    
  constructor(private conector:ApiControladorService){ }
 
  public crearPersona(ciudad: number,nombre: string,apellido: string,email: string,tipoDoc: string,nroDoc: string,fechaNac: string,telefono: string,personaTipo:string) {
     this.conector.crearPersona({DOC:nroDoc,TIPO_DOC:tipoDoc,NOMBRE:nombre,APELLIDO:apellido,EMAIL:email,FECHA_NAC:fechaNac,TELEFONO:telefono,PERSONA_TIPO:personaTipo});
    
  }
  public existe(correo:string):boolean{
      return true;
  }
}
