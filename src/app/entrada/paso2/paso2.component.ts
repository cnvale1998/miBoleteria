import { Component, OnInit } from '@angular/core';
import {APIControllersService} from '../../APIControllers/apicontrollers.service';
@Component({
  selector: 'app-paso2',
  templateUrl: './paso2.component.html',
   styleUrls: ['./../entrada/entrada.component.css']
})
export class Paso2Component implements OnInit {
  peliculas:any[];
  constructor(private conector:APIControllersService) { }

  ngOnInit() {
    this.ObtenerCartelera('2019-06-8');
    
  }
  ObtenerCartelera(fecha:String){
    
    this.conector.ObetenerCartelera(fecha).subscribe(res => {this.peliculas = res; });

  }
  mostrarValor(valor:String){
    console.log(valor);

  }
}
