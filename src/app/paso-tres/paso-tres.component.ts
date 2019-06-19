import { Component, OnInit } from '@angular/core';
import { ApiControladorService } from '../controladores/apiControlador/api-controlador.service';

@Component({
  selector: 'app-paso-tres',
  templateUrl: './paso-tres.component.html',
  styleUrls: ['./paso-tres.component.css']
})
export class PasoTresComponent implements OnInit {

  beneficios: any[];
  constructor(private conector:ApiControladorService ) { }

  ngOnInit() {
    this.conector.BuscarBeneficiosDisponibles().subscribe(res => {this.beneficios = res; })
}

}
