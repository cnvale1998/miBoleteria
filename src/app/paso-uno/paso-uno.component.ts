import { Component, OnInit } from '@angular/core';
import{NgForm}from'@angular/forms';
import {Router} from '@angular/router';
import { GestorCiudadService } from './../modelo/gestor-ciudad.service';
import { Ciudad } from './../modelo/ciudad';

@Component({
  selector: 'app-paso-uno',
  templateUrl: './paso-uno.component.html',
  styleUrls: ['./paso-uno.component.css']
})
export class PasoUnoComponent implements OnInit {
  private ciudades:any[]=[];
  constructor(private _route: Router,private gestorCiudad:GestorCiudadService) { }

   ngOnInit() {
       this.gestorCiudad.getCiudades().subscribe(res => {this.ciudades = res;});
  }
  
 public elegirCiudad(ciudadForm:NgForm): void{
         let idCiudad=Number(ciudadForm.value.ciudad);//es un string ---se puede guardar en la sesion
         
         this._route.navigate(["/entrada/2/"]);
  }
}
