import { Component, OnInit } from '@angular/core';
import { APIControllersService } from 'src/app/Controladores/APIControllers/apicontrollers.service';
import { EntradaControllersService } from 'src/app/Controladores/entrada-controllers.service';

@Component({
  selector: 'app-paso3',
  templateUrl: './paso3.component.html',
    styleUrls: ['./../entrada/entrada.component.css']
})
export class Paso3Component implements OnInit {

  constructor(private conector:APIControllersService, private entradaControllers:EntradaControllersService) { }

  ngOnInit() {
    console.log(this.entradaControllers.getIdPeliculaEntrada());
  }

}
