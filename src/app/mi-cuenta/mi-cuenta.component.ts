import { Component, AfterViewInit } from '@angular/core';
import{NgForm}from'@angular/forms';
import {Location} from '@angular/common';
import { GestorUsuarioService } from './../modelo/gestor-usuario.service';

declare var $: any;
@Component({
  selector: 'app-mi-cuenta',
  templateUrl: './mi-cuenta.component.html',
  styleUrls: ['./mi-cuenta.component.css']
})
export class MiCuentaComponent implements AfterViewInit {
  private usuario:any;
  private isUserLoggedIn:boolean;
  private passMatch: boolean=true;
  private dataMatch: boolean=true;
  
  constructor( private _location: Location,private gestorUsuario:GestorUsuarioService){
       this.isUserLoggedIn=this.gestorUsuario.sesionIniciada();
      if(this.isUserLoggedIn){
          this.usuario=this.gestorUsuario.getUsuarioActual();
      }
  }

  ngAfterViewInit() {
      $('#cuenta_modal').modal('show');
  }
  public back(){
      this._location.back();
  }
  public cambiarMail(formMail:NgForm): void{
      let value=formMail.value;
      let usuario=this.gestorUsuario.getUsuarioActual();
      let cadena=value.email1.replace(/\s/g, "");
      let cadena2=value.email2.replace(/\s/g, "");
      
      if(usuario.getEmail()==cadena && usuario.getNroDoc() == value.dni){
          this.gestorUsuario.cambiarMail(cadena,value.dni,cadena2);
          this.dataMatch=true;
      }
      else{
          this.dataMatch=false;
      }
      
      
  }
  public cambiarContrasenia(formContrasenia:NgForm): void{
      let value=formContrasenia.value;
    
    if(value.pass1!=value.pass2){
        this.passMatch=false;
    }
    else{
         let usuario=this.gestorUsuario.getUsuarioActual();
        this.gestorUsuario.cambiarContrasenia(value.passAnt,value.pass1,usuario.getEmail());
    }
  }
}
