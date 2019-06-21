import { Component, OnInit } from '@angular/core';
import { ApiControladorService } from '../controladores/apiControlador/api-controlador.service';
import { EntradaControladorService } from '../controladores/entradaControlador/entrada-controlador.service';

@Component({
  selector: 'app-paso-cuatro',
  templateUrl: './paso-cuatro.component.html',
  styleUrls: ['./paso-cuatro.component.css']
})
export class PasoCuatroComponent implements OnInit {
  combos: any[];
  constructor(private conector:ApiControladorService,private entradaControlador: EntradaControladorService) { }

  ngOnInit() {
    this.conector.ObetenerCombosDisponibles("San Luis").subscribe(res => {this.combos=res});
  }

}
