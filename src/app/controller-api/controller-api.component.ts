import { Component, OnInit } from '@angular/core';
import { APIControllersService } from '../Controladores/APIControllers/apicontrollers.service';


@Component({
  selector: 'app-controller-api',
  templateUrl: './controller-api.component.html',
  styleUrls: ['./controller-api.component.css']
})
export class ControllerApiComponent implements OnInit {
   peliculas: any[];
   
  
  constructor(private conector:APIControllersService) {
    
      
   }

  ngOnInit() {
   
    this.ObtenerCartelera('2019-06-8');
    
    
    
      
  }
  ObtenerCartelera(fecha:String){

    this.conector.ObetenerCartelera(fecha).subscribe(res => {this.peliculas = res; });

  }
  
}
