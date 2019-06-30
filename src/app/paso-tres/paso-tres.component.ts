import { Component, OnInit } from '@angular/core';
import { ApiControladorService } from '../controladores/apiControlador/api-controlador.service';
import { EntradaControladorService } from '../controladores/entradaControlador/entrada-controlador.service';

@Component({
  selector: 'app-paso-tres',
  templateUrl: './paso-tres.component.html',
  styleUrls: ['./paso-tres.component.css']
})
export class PasoTresComponent implements OnInit {

  beneficios: any[]; 
  opcionSeleccionado: number  = 0;
  constructor(private conector:ApiControladorService, private entradaControlador:EntradaControladorService ) { }

  ngOnInit() {
    this.conector.BuscarBeneficiosDisponibles().subscribe(res => {this.beneficios = res; })
}

capturarBeneficio(id_beneficio:number){
    console.log(this.opcionSeleccionado);
    this.entradaControlador.$idBeneficio=id_beneficio;
    this.entradaControlador.$precioEntrada=240*(this.opcionSeleccionado/2);
}
 
}
