import { Component, OnInit } from '@angular/core';
import { ApiControladorService } from '../controladores/apiControlador/api-controlador.service';
import { EntradaControladorService } from '../controladores/entradaControlador/entrada-controlador.service';

@Component({
  selector: 'app-paso-dos',
  templateUrl: './paso-dos.component.html',
  styleUrls: ['./../entrada/entrada.component.css']
})
export class PasoDosComponent implements OnInit {
  peliculas:any[];
  
  
  constructor(private conector:ApiControladorService,private entradaControlador: EntradaControladorService ) { 


  }

  ngOnInit() {
    var hoy=new Date();
    this.ObtenerCartelera(this.calcularPeriodo(hoy));
    
  }
  ObtenerCartelera(fecha:String){
    
    this.conector.ObetenerCartelera(fecha).subscribe(res => {this.peliculas = res; });

  }
  guardarFecha(fecha:Date){
    this.entradaControlador.$fecha=fecha;
   /// window.alert(this.entradaControlador.$fecha);
    
  }
  
guardarPelicula(nombre: String, id:number){ 
    this.entradaControlador.$nombrePelicula=nombre;
    this.entradaControlador.$idPelicula=id;
    
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
