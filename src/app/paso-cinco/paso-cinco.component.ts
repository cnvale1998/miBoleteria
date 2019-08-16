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
//hola
  private usuario:any;
  private isUserLoggedIn:boolean;
  private sala:number;

  private tarjeta: string="";
  terminos: boolean=false;
  private tarjeta2={'status':""};
   
  constructor(private conector:ApiControladorService,private entradaControlador: EntradaControladorService,private gestorUsuario:GestorUsuarioService) { 
	   this.isUserLoggedIn=this.gestorUsuario.sesionIniciada();
		  if(this.isUserLoggedIn){
			  this.usuario=this.gestorUsuario.getUsuarioActual();
		  }
    this.conector.getTransmision(this.entradaControlador.$idPelicula).subscribe(res=> {this.sala=res[0]["ID_SALA"];});
    
	}


  ngOnInit() { 

    
  }

  guardarTarjeta(tt:string){
    this.tarjeta=tt;
    this.entradaControlador.$tarjeta=this.tarjeta;
     
    this.entradaControlador.$sala=this.sala;
  }

  guardarTerminos(){

    this.entradaControlador.$terminos=this.terminos;
  }
 /** public finalizar(paso5Form:NgForm): void {
>>>>>>> origin/manuel
        let value=paso5Form.value;
        console.log("llegueee paso5. Tarjeta:"+value.tarjeta+".Acepta terminos y condiciones: "+value.terminos);
  }*/
}
