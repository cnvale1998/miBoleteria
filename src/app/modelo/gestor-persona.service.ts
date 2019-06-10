import { Injectable } from '@angular/core';
import { Persona } from './persona';//pongo que voy a usar esas clases del modelo

@Injectable({
  providedIn: 'root'
})
export class GestorPersonaService {
 // private  persona: Persona;
  constructor(){ }
 
  public crearPersona(ciudad: number,nombre: string,apellido: string,email: string,tipoDoc: string,nroDoc: string,fechaNac: string,telefono: string,personaTipo:string) {
    
    let persona=new Persona(ciudad,nombre,apellido,email,tipoDoc,nroDoc,fechaNac,telefono,personaTipo);
    persona.save();
    
  }
  public existe(correo:string):boolean{
      return false;
  }
}
