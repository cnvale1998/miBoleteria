import { Injectable } from '@angular/core';
import { Usuario } from './usuario';//pongo que voy a usar esas clases del modelo
import { ApiControladorService } from './../controladores/apiControlador/api-controlador.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class GestorUsuarioService {
    
    private userLoggedIn:boolean;
    private usserLogged:Usuario;
    
    constructor(private conector:ApiControladorService, private router: Router,private _location: Location){ 
        this.userLoggedIn = false;
    }
    
    public crearUsuario(email: string,pass: string,codPostal:number, direccion:string,provincia:number,ciudad:string) {
       this.conector.crearUsuario({EMAIL:email,CONTRASENIA:pass,CODPOSTAL:codPostal,DIRECCION:direccion,ID_PROVINCIA:provincia,CIUDAD:ciudad});
    }
  
    public existe(correo:string){
      return this.conector.usuarioExiste(correo)
      .pipe(
            map(datos => {return datos[0]['contador'];})
        );
    }

    public iniciarSesion(email:string, pass:string) {
        this.conector.obtenerUsuario({EMAIL: email,CONTRASENIA: pass}).subscribe(
            res => {
             // let usuario = new Usuario(res[0]['EMAIL'],"",0,"",0,res[0]['NOMBRE'],res[0]['APELLIDO'],res[0]['TIPO_DOC'],res[0]['DOC'],"","");    
              this.setUsuarioActual(res);
              console.log(res);
            },
            error => {
              console.error(error);
            },
            () => this.back()
        );   
    }
    
     public cerrarSesion() {
        localStorage.removeItem("infoUsuario");
        localStorage.removeItem("sesionIniciada");
        this.userLoggedIn = false;
        this.navegar();//TENGO QUE HACER UN RELOAD
    }
    
    public navegar() {    
        this.router.navigateByUrl('/inicio');
    }
    public back(){
        this._location.back();
}
     
    
    public setUsuarioActual(dato:Object){
        localStorage.setItem('sesionIniciada', JSON.stringify('si'));
        localStorage.setItem('infoUsuario', JSON.stringify(dato));
    }

    public getUsuarioActual(){
        let res:Object;
        res= JSON.parse(localStorage.getItem('infoUsuario'));
        this.usserLogged=new Usuario(res[0]['EMAIL'],"",0,"",0,res[0]['NOMBRE'],res[0]['APELLIDO'],res[0]['TIPO_DOC'],res[0]['DOC'],"",res[0]['TELEFONO']);  
        return this.usserLogged;
    }
    
    public sesionIniciada():boolean{
       if(JSON.parse(localStorage.getItem("sesionIniciada"))=='si'){
            this.userLoggedIn =true;
       }
        return this.userLoggedIn;
    }
    
    
   
}
