import { Injectable } from '@angular/core';
import { Usuario } from './usuario';//pongo que voy a usar esas clases del modelo

@Injectable({
  providedIn: 'root'
})
export class GestorUsuarioService {
  constructor(){ }
 
  public crearUsuario(email: string,pass: string,codPostal:number, direccion:string,idCiudad: number,nombre: string,apellido: string,tipoDoc: string,nroDoc: string,fechaNac: string,telefono: string) {
   
    let user=new Usuario(email,pass,codPostal, direccion,idCiudad,nombre,apellido,tipoDoc,nroDoc,fechaNac,telefono);
    user.saveUser();
    
  }
  public existe(correo:string):boolean{
      return false;
  }
}
/*import { Injectable } from '@angular/core';
import { Usuario } from './usuario';//pongo que voy a usar esas clases del modelo

@Injectable({
  providedIn: 'root'
})
export class GestorUsuarioService {
  constructor(){ }
 
  public crearUsuario(id:number,idPersona:number,pass:string,codPostal:number,direccion:string) {
    
    let user=new Usuario(id,idPersona,pass,codPostal,direccion);
    user.save();
    
  }
  public existe(correo:string,pass:string):boolean{
      return true;
  }
}
*/