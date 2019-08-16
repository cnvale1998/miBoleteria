import { Component, OnInit } from '@angular/core';
import { ApiControladorService } from '../controladores/apiControlador/api-controlador.service';
import { EntradaControladorService } from '../controladores/entradaControlador/entrada-controlador.service';
import { disableBindings } from '@angular/core/src/render3';
import { GestorUsuarioService } from './../modelo/gestor-usuario.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-paso-dos',
  templateUrl: './paso-dos.component.html',
  styleUrls: ['./../entrada/entrada.component.css']
})
export class PasoDosComponent implements OnInit {
  peliculas:any[];
  hoy:number=new Date().getDay();
  opcion:number=-1
  private isUserLoggedIn:boolean;
  private complejo:string;
  private horario:any[];
  
  constructor(private conector:ApiControladorService,private entradaControlador: EntradaControladorService ,private gestorUsuario:GestorUsuarioService,private _route: ActivatedRoute) { 
    this.complejo=this._route.snapshot.paramMap.get('ciudad');
    this.entradaControlador.$idPelicula=0;
  }

  ngOnInit() {
    var hoy=new Date();
    this.ObtenerCartelera(this.calcularPeriodo(hoy));
    
  }
  ObtenerCartelera(fecha:String){
    
    this.conector.ObetenerCartelera(fecha).subscribe(res => {
      this.peliculas = res;
    });
    

  }
  
  
guardarPelicula(nombre: String, id:number){ 
    this.entradaControlador.$nombrePelicula=nombre;
    this.entradaControlador.$idPelicula=id;
    this.conector.getTransmision(id).subscribe(res=> {this.horario=res;});
    
}



calcularPeriodo(hoy:Date):String{
  let diaSemana:number=hoy.getDay();
  let diasRestantes:number;
  let fechaFin:Date=new Date();
  let fecha:String;
  if (diaSemana<=3){
    diasRestantes=3-diaSemana;
    //console.log(diaSemana + "restante: "+diasRestantes);
  }
  else{
    diasRestantes=10-diaSemana;
    //console.log(diaSemana + "restante: "+diasRestantes);
  }
  fechaFin.setDate(hoy.getDate()+diasRestantes);
  fecha=fechaFin.getFullYear()+"-"+(fechaFin.getMonth()+1)+"-"+fechaFin.getDate();
  return fecha;
}


}