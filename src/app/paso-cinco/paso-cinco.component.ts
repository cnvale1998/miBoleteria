import { Component, OnInit } from '@angular/core';
import{NgForm}from'@angular/forms';
import { ApiControladorService } from '../controladores/apiControlador/api-controlador.service';
import { EntradaControladorService } from '../controladores/entradaControlador/entrada-controlador.service';

@Component({
  selector: 'app-paso-cinco',
  templateUrl: './paso-cinco.component.html',
  styleUrls: ['./paso-cinco.component.css']
})
export class PasoCincoComponent implements OnInit {
  tarjeta: string="";
  terminos: boolean=false;
  constructor(private conector:ApiControladorService,private entradaControlador: EntradaControladorService) { }

  ngOnInit() { 

    
  }

  guardarTarjeta(){
    this.entradaControlador.$tarjeta=this.tarjeta;
  }
  guardarTerminos(){

    this.entradaControlador.$terminos=this.terminos;
  }
 /** public finalizar(paso5Form:NgForm): void {
        let value=paso5Form.value;
        console.log("llegueee paso5. Tarjeta:"+value.tarjeta+".Acepta terminos y condiciones: "+value.terminos);
  }*/
}
