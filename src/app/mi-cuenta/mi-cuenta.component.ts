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
}
