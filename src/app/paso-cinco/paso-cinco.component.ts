import { Component, OnInit } from '@angular/core';
import{NgForm}from'@angular/forms';
import { ApiControladorService } from '../controladores/apiControlador/api-controlador.service';
import { EntradaControladorService } from '../controladores/entradaControlador/entrada-controlador.service';
import { GestorUsuarioService } from './../modelo/gestor-usuario.service';

@Component({
  selector: 'app-paso-cinco',
  templateUrl: './paso-cinco.component.html',
  styleUrls: ['./paso-cinco.component.css']
})
export class PasoCincoComponent implements OnInit {
  private usuario:any;
  private isUserLoggedIn:boolean;
  
  constructor(private conector:ApiControladorService,private entradaControlador: EntradaControladorService,private gestorUsuario:GestorUsuarioService) {
      this.isUserLoggedIn=this.gestorUsuario.sesionIniciada();
      if(this.isUserLoggedIn){
          this.usuario=this.gestorUsuario.getUsuarioActual();
      }
    }

  ngOnInit() {
  }
  
 public finalizar(paso5Form:NgForm): void {
        let value=paso5Form.value;
        console.log("llegueee paso5. Tarjeta:"+value.tarjeta+".Acepta terminos y condiciones: "+value.terminos);
  }
}
