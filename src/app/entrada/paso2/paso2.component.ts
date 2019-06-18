import { Component, OnInit } from '@angular/core';
import {APIControllersService} from '../../Controladores/APIControllers/apicontrollers.service';
import { EntradaControllersService } from 'src/app/Controladores/entrada-controllers.service';
@Component({
  selector: 'app-paso2',
  templateUrl: './paso2.component.html',
   styleUrls: ['./../entrada/entrada.component.css']
})
export class Paso2Component implements OnInit {
  peliculas:any[];
  
  constructor(private conector:APIControllersService,private entradaControllers:EntradaControllersService) { 


  }

  ngOnInit() {
    this.ObtenerCartelera('2019-06-8');
    
  }
  ObtenerCartelera(fecha:String){
    
    this.conector.ObetenerCartelera(fecha).subscribe(res => {this.peliculas = res; });

  }
  guardarFecha(fecha:String){
    this.entradaControllers.setFecha(fecha);
    
  }
  guardarId(id: number){
    this.entradaControllers.setIdPeliculaEntrada(id);
    console.log(this.entradaControllers.getIdPeliculaEntrada());

  }
guardarNombrePelicula(nombre: String){ 
    this.entradaControllers.setNombrePelicula(nombre);
}

}
