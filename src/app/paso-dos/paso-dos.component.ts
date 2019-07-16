import { Component, OnInit } from '@angular/core';
import { ApiControladorService } from '../controladores/apiControlador/api-controlador.service';
import { EntradaControladorService } from '../controladores/entradaControlador/entrada-controlador.service';
import { disableBindings } from '@angular/core/src/render3';
import { GestorUsuarioService } from './../modelo/gestor-usuario.service';


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
  
  constructor(private conector:ApiControladorService,private entradaControlador: EntradaControladorService ,private gestorUsuario:GestorUsuarioService) { 
    this.isUserLoggedIn=this.gestorUsuario.sesionIniciada();
       if(this.isUserLoggedIn){
            this.complejo= this.gestorUsuario.getComplejo();
    }

  }

  ngOnInit() {
    var hoy=new Date();
    this.ObtenerCartelera(this.calcularPeriodo(hoy));
    let date: Date = new Date(2017, 4, 13, 17, 23, 42, 11);  
    
    console.log("Year = " + date.getFullYear());  
    console.log("Date = " + date.getDate());  
    console.log("Month = " + date.getMonth());  
    console.log("Day = " + date.getDay());  
    console.log("Hours = " + date.getHours());  
    console.log("Minutes = " + date.getMinutes());  
    console.log("Seconds = " + date.getSeconds());  
    
  }
  ObtenerCartelera(fecha:String){
    
    this.conector.ObetenerCartelera(fecha).subscribe(res => {this.peliculas = res; });

  }
  guardarFecha(dia:number, horas:number, minutos: number){
    var diaPelicula=new Date();
    this.opcion=dia;
    diaPelicula.setDate(diaPelicula.getDate()+(dia-this.hoy));
    diaPelicula.setHours(horas);
    diaPelicula.setMinutes(minutos);
    diaPelicula.setSeconds(0);
    this.entradaControlador.$fecha=diaPelicula;
   /// window.alert(this.entradaControlador.$fecha);
   
  }
  
guardarPelicula(nombre: String, id:number){ 
    this.entradaControlador.$nombrePelicula=nombre;
    this.entradaControlador.$idPelicula=id;
}
mayor(valor:number):boolean{
  return valor>=this.hoy;
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
