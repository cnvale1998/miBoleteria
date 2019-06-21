import { Injectable } from '@angular/core';
import { Usuario } from './usuario';//pongo que voy a usar esas clases del modelo
import { ApiControladorService } from './../controladores/apiControlador/api-controlador.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GestorUsuarioService {
    
  constructor(private conector:ApiControladorService){ }
  
  public crearUsuario(email: string,pass: string,codPostal:number, direccion:string,provincia:number,ciudad:string) {
     this.conector.crearUsuario({EMAIL:email,CONTRASENIA:pass,CODPOSTAL:codPostal,DIRECCION:direccion,ID_PROVINCIA:provincia,CIUDAD:ciudad});
  }
  
  public existe(correo:string){
    
      return this.conector.usuarioExiste(correo).pipe(
     map(datos => {
         return datos[0]['contador'];
        })
      );
    /*  .subscribe(data => {
         if(data[0]!= null){
            if(data[0]['email'] != ''){
                console.log("si existe");
                console.log(data[0]['EMAIL']);
                return true;
            }
         }
         else{
             console.log("no existe");
             return false;
         }
     });
     */
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