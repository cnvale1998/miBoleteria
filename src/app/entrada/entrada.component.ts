import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import * as jsPDF from 'jspdf';
import { EntradaControladorService } from '../controladores/entradaControlador/entrada-controlador.service';
import { ApiControladorService } from '../controladores/apiControlador/api-controlador.service';
import { GestorUsuarioService } from './../modelo/gestor-usuario.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {
  private paso:number;
  private idCiudad:number;
  private mensaje_alerta:String="";
  private alerta:boolean=false;
  private usuario:any;
  private isUserLoggedIn:boolean;
  private complejo:string;
  private butacaList=[];
  
  
  constructor(private _route: ActivatedRoute,private location: Location,private entradaControlador: EntradaControladorService,private conector:ApiControladorService,private gestorUsuario:GestorUsuarioService) { 
      this.paso=Number(this._route.snapshot.paramMap.get('paso'));
      if(this._route.snapshot.paramMap.get('idCiudad')){
        this.idCiudad=Number(this._route.snapshot.paramMap.get('idCiudad'));
        
      }
    this.isUserLoggedIn=this.gestorUsuario.sesionIniciada();
    if(this.isUserLoggedIn){
            this.usuario=this.gestorUsuario.getUsuarioActual();
            this.complejo= this.gestorUsuario.getComplejo();
    }
  }

  ngOnInit() {
  }
   public pasarPaso(){
     //console.log(this.entradaControlador.$fecha)
     switch(this.paso){
      case 2:{  
              if(this.entradaControlador.$nombrePelicula==""){
                this.mensaje_alerta="No ha seleccionado una pelicula";
                this.alerta=true;
            }else{
              if(this.entradaControlador.$fecha==null){
                this.mensaje_alerta="No ha seleccionado un horario";
                this.alerta=true;
              }else{this.alerta=false;
                this.paso= this.paso+1;
                this.location.go("entrada/"+this.paso);} 

            } 
          
        
      }break;
      case 3:{if(this.entradaControlador.$idBeneficio==0){
                this.mensaje_alerta="No ha seleccionado un metodo de pago";
                this.alerta=true;
              }
              else{
              this.alerta=false;
              this.paso= this.paso+1;
              this.location.go("entrada/"+this.paso);
              }
      } break;
      case 4:{
              this.alerta=false;
              this.paso= this.paso+1;
              this.location.go("entrada/"+this.paso);


      }break;
      
     }
      
      
  }

  generarPDF() {

    if(this.entradaControlador.$tarjeta=="" || this.entradaControlador.$terminos==false){
      this.mensaje_alerta="Le falta completar informacion";
      this.alerta=true;
    }else{
      this.mensaje_alerta="";
      this.alerta=false;
      let documento = new jsPDF();
      documento.setFont("Courier");
      documento.setFontStyle("bold");
      documento.setFontSize(20);
      documento.text("Entrada", 65, 15);
    
      documento.setFillColor(50,50,50);
      documento.rect(10, 20, 30, 8, "FD");
      documento.rect(10, 28, 30, 8, "FD");
      documento.rect(10, 36, 30, 8, "FD");
      documento.rect(40, 20, 160, 8, "S");
      documento.rect(40, 28, 160, 8, "S");
      documento.rect(40, 36, 160, 8, "S");
    
      documento.setFontSize(12);
      documento.setTextColor(255, 255, 255);
      documento.text("Pelicula", 12, 25);
      documento.text("Fecha", 12, 33);
      documento.text("Precio", 12, 41);
      
    
      documento.setFontStyle("normal");
      documento.setTextColor(0, 0, 0);
      documento.text(this.entradaControlador.$nombrePelicula, 42, 25);
      documento.text(this.entradaControlador.$fecha.getFullYear()+"-"+this.entradaControlador.$fecha.getMonth()+"-"+this.entradaControlador.$fecha.getDate()+" "+
      this.entradaControlador.$fecha.getHours()+":"+this.entradaControlador.$fecha.getMinutes(), 42, 33);
      documento.text("$"+this.entradaControlador.$precioEntrada.toString(), 42, 41);

      let correo="";
       if(this.isUserLoggedIn){
           correo=this.usuario.getEmail();
       }
      documento.output("dataurlnewwindow");
  
      this.conector.GuardarEntrada({ID_PELICULA:this.entradaControlador.$idPelicula, 
        PRECIO:this.entradaControlador.$precioEntrada,
        ID_BENEFICIO: this.entradaControlador.$idBeneficio,
        FECHA: this.entradaControlador.$fecha.getFullYear()+"-"+this.entradaControlador.$fecha.getMonth()+"-"+this.entradaControlador.$fecha.getDate()+" "+
        this.entradaControlador.$fecha.getHours()+":"+this.entradaControlador.$fecha.getMinutes()+"0:00",
        TOTAL: this.entradaControlador.$precioCombo+this.entradaControlador.$precioEntrada,
        ID_COMBO: this.entradaControlador.$idCombo,
        EMAIL: correo
      }).subscribe((res) =>{ console.log(res);});


    }

    }

    agregarButaca(r:string,c:number){
       this.butacaList.push({fila:r, butaca: c});
       document.getElementById(r+'_'+c).classList.add('seleccionado');
    }
    borrarButaca(r:string,c:number):boolean{
        let exito=false;
        for(var i=0;i<this.butacaList.length;i++){
            if(this.butacaList[i]["fila"]==r && this.butacaList[i]["butaca"]==c){
                this.butacaList.splice(i,1);
                document.getElementById(r+'_'+c).classList.remove('seleccionado');
                exito=true;
            }
        }
        return exito;
    }
    elegirButaca(r:string,c:number){
        let exito=this.borrarButaca(r,c);
        if(!exito){
            this.agregarButaca(r,c);
        }
        console.log(this.butacaList);
    }
}