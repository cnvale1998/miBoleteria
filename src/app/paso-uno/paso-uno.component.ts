import { Component, OnInit } from '@angular/core';
import{NgForm}from'@angular/forms';
import {Router} from '@angular/router';
import { GestorCiudadService } from './../modelo/gestor-ciudad.service';
import { Ciudad } from './../modelo/ciudad';
import { GestorUsuarioService } from './../modelo/gestor-usuario.service';

@Component({
  selector: 'app-paso-uno',
  templateUrl: './paso-uno.component.html',
  styleUrls: ['./paso-uno.component.css']
})
export class PasoUnoComponent implements OnInit {
  private ciudades:any[]=[];
   private ciudad={'status':""};
  constructor(private _route: Router,private gestorCiudad:GestorCiudadService,private gestorUsuario:GestorUsuarioService) { }

   ngOnInit() {
       this.gestorCiudad.getCiudades().subscribe(res => {this.ciudades = res;});
  }

  
 public elegirCiudad(ciudadForm:NgForm): void{
         let idCiudad=(ciudadForm.value.ciudad);//es un string ---se puede guardar en la sesion
         this.gestorUsuario.setComplejo(idCiudad);
         //this._route.navigate(["/entrada/2/"]);
         let paso=2;
         this._route.navigate(['/entrada',paso]);
  }
}