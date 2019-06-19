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
    this.ObtenerCartelera('2019-06-8');
    
  }
  ObtenerCartelera(fecha:String){
    
    this.conector.ObetenerCartelera(fecha).subscribe(res => {this.peliculas = res; });

  }
  guardarFecha(fecha:string){
    this.entradaControlador.$horarioPelicula=fecha;
    
  }
  
guardarNombrePelicula(nombre: String){ 
    this.entradaControlador.$nombrePelicula=nombre;
}

}
