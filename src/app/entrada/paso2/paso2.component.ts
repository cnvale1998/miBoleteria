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
  horario:number;
  constructor(private conector:APIControllersService,private entradaControllers:EntradaControllersService) { 


  }

  ngOnInit() {
    this.ObtenerCartelera('2019-06-8');
    
  }
  ObtenerCartelera(fecha:String){
    
    this.conector.ObetenerCartelera(fecha).subscribe(res => {this.peliculas = res; });

  }
  guardarHorario(valor:number){
    this.horario= valor;
    console.log(valor);

  }
  guardarId(id: number){
    this.entradaControllers.setIdPeliculaEntrada(id);
    console.log(this.entradaControllers.getIdPeliculaEntrada());

  }
}
