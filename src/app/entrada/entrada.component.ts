import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import * as jsPDF from 'jspdf';
import { EntradaControladorService } from '../controladores/entradaControlador/entrada-controlador.service';
import { ApiControladorService } from '../controladores/apiControlador/api-controlador.service';
import { GestorUsuarioService } from './../modelo/gestor-usuario.service';
import { map, switchMap } from 'rxjs/operators';
declare var $: any;

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
  private maxButacaSelec:number=0;
  private errorButacas:boolean=false;
  private butacasOcupadas:any;
  
  constructor(private r:Router,private _route: ActivatedRoute,private location: Location,private entradaControlador: EntradaControladorService,private conector:ApiControladorService,private gestorUsuario:GestorUsuarioService) { 
    this.paso=Number(this._route.snapshot.paramMap.get('paso'));
    this.complejo= this.gestorUsuario.getComplejo();
    
    this.isUserLoggedIn=this.gestorUsuario.sesionIniciada();
    if(this.isUserLoggedIn){
            this.usuario=this.gestorUsuario.getUsuarioActual();
            
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
                //this.location.go("entrada/"+this.paso);}
                let idPelicula= this.entradaControlador.$idPelicula;
                //this.location.go("entrada/"+this.complejo+"/"+idPelicula);
               
                let paso=this.paso;
                this.r.navigate(['/entrada',paso,{pelicula:idPelicula}]);
                //console.log("ciudad elegida"+this._route.snapshot.paramMap.get('nombreCiudad'));
                //console.log("pelicula elegida"+this._route.snapshot.paramMap.get('idPelicula'));
                //console.log("ciudad elegida"+this._route.snapshot.paramMap.get('nombreCiudad'));
            } 
          }
          
        
      }break;
      case 3:{if(this.entradaControlador.$precioEntrada==0){
                this.mensaje_alerta="No ha seleccionado un tipo de tickets";
                this.alerta=true;
              }
              else{
                if(document.getElementById('butacaSelec').innerHTML=="0"){
                    this.mensaje_alerta="No ha seleccionado las butacas";
                    this.alerta=true;
                } 
                else{
                    this.alerta=false;
                    this.paso= this.paso+1;
                    //this.location.go("entrada/"+this.paso);
                    let nombreCiudad=this._route.snapshot.paramMap.get('ciudad');

                    let idPelicula= this._route.snapshot.paramMap.get('pelicula');
                    let idBeneficio=this.entradaControlador.$idBeneficio;
                    let paso=this.paso;
                    //this.location.go("entrada/"+this.complejo+"/"+idPelicula+"/"+idBeneficio);
                   //this.r.navigate(['/entrada',paso,{ciudad:nombreCiudad,pelicula:idPelicula,beneficio:idBeneficio}]); 
                    this.r.navigate(['/entrada',paso,{ciudad:nombreCiudad,pelicula:idPelicula,beneficio:idBeneficio}]);  
                   // console.log("paso 3");
                    //console.log("ciudad elegida"+this._route.snapshot.paramMap.get('nombreCiudad'));
                    //console.log("pelicula elegida"+this._route.snapshot.paramMap.get('idPelicula'));
                    //console.log("beneficio elegido"+this._route.snapshot.paramMap.get('idBeneficio'));
                }
            }
      } break;
      case 4:{
              this.alerta=false;
              this.paso= this.paso+1;
              //this.location.go("entrada/"+this.paso);
              let nombreCiudad=this._route.snapshot.paramMap.get('ciudad');
              let idPelicula= this._route.snapshot.paramMap.get('pelicula');
              let idBeneficio= this._route.snapshot.paramMap.get('beneficio');
              let idCombo=this.entradaControlador.$idCombo;
              let paso=this.paso;
              //this.location.go("entrada/"+this.complejo+"/"+idPelicula+"/"+idBeneficio+"/"+idCombo);
              this.r.navigate(['/entrada',paso,{ciudad:nombreCiudad,pelicula:idPelicula,beneficio:idBeneficio,combo:idCombo}]);  
              
              
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
//this.entradaControlador.$fecha.getHours()+":"+this.entradaControlador.$fecha.getMinutes(), 42, 33);
      let correo="";
       if(this.isUserLoggedIn){
           correo=this.usuario.getEmail();
       }
      documento.output("dataurlnewwindow");

      this.conector.GuardarEntrada({ID_PELICULA:this.entradaControlador.$idPelicula, 
        PRECIO:this.entradaControlador.$precioEntrada,
        ID_BENEFICIO: this.entradaControlador.$idBeneficio,
        FECHA: this.entradaControlador.$fecha.getFullYear()+"-"+this.entradaControlador.$fecha.getMonth()+"-"+this.entradaControlador.$fecha.getDate()+" "+
        this.entradaControlador.$fecha.getHours()+":"+this.entradaControlador.$fecha.getMinutes()+":00",
        TOTAL: this.entradaControlador.$precioCombo+this.entradaControlador.$precioEntrada,
        ID_COMBO: this.entradaControlador.$idCombo,
        EMAIL: correo,
        MODOPAGO:this.entradaControlador.$tarjeta,
        ID_CIUDAD: this.complejo,
        BUTACAS: this.entradaControlador.$butacaList
      }).subscribe((res) =>{ console.log(res);});


    }

    }

    agregarButaca(r:string,c:number){
        this.maxButacaSelec=Number((<HTMLInputElement>document.getElementById("cantidadEntradas")).value);
        if(this.butacaList.length < this.maxButacaSelec){
            this.butacaList.push({fila:r, butaca: c});
            document.getElementById(r+'_'+c).classList.add('seleccionado');
        }
        else{
            this.errorButacas=true;
        }
    }
    borrarButaca(r:string,c:number):boolean{
        let exito=false;
        for(var i=0;i<this.butacaList.length;i++){
            if(this.butacaList[i]["fila"]==r && this.butacaList[i]["butaca"]==c){
                this.butacaList.splice(i,1);
                document.getElementById(r+'_'+c).classList.remove('seleccionado');
                exito=true;
                 this.errorButacas=false;
            }
        }
        
        return exito;
    }
    borrarTodo(r:string,c:number){
        let exito=false;
        for(var i=0;i<this.butacaList.length;i++){
              document.getElementById(this.butacaList[i]["fila"]+'_'+this.butacaList[i]["butaca"]).classList.remove('seleccionado');  
        }
        for(var i=0;i<this.butacasOcupadas.length;i++){
            document.getElementById(this.butacasOcupadas[i]["HILERA"]+'_'+this.butacasOcupadas[i]["NUMERO"]).classList.remove('ocupado');  
        }
        this.butacaList=[];
        this.errorButacas=false;
        document.getElementById('butacaSelec').innerHTML ="0";
        
    }
    elegirButaca(r:string,c:number){
        let exito=this.borrarButaca(r,c);
        if(!exito){
            this.agregarButaca(r,c);
        }
        document.getElementById('butacaSelec').innerHTML = ''+this.butacaList.length;
       
    }

    volver(numero:number){

      console.log(numero);
      switch(numero){
        case 2:{
          let paso=this.paso=2;
          let nombreCiudad=this._route.snapshot.paramMap.get('ciudad');
          this.r.navigate(['/entrada',paso,{ciudad:nombreCiudad}]);

        }
        break;
        case 3:{
          //this.r.navigate(['/entrada',paso,nombreCiudad,{pelicula:idPelicula}]);
          this.paso=3;
        }
        break;
        case 4:{
          this.paso=4;

        }
        break;

      }
    }
    
    abrirVentanaButaca(){
        if((<HTMLInputElement>document.getElementById("cantidadEntradas")).value == "0"){
            this.mensaje_alerta="No ha seleccionado un tipo de tickets";
            this.alerta=true;
        }
        else{
             this.alerta=false;
            $('#butacas_modal').modal('show');
            let fecha =this.entradaControlador.$fecha.getFullYear()+"-"+this.entradaControlador.$fecha.getMonth()+"-"+this.entradaControlador.$fecha.getDate()+" "+this.entradaControlador.$fecha.getHours()+":"+this.entradaControlador.$fecha.getMinutes()+":00";
          
             this.conector.getButacasOcupadas({ID_CIUDAD: this.complejo, FECHA:fecha,ID_PELICULA:this.entradaControlador.$idPelicula}).subscribe(
        (res : any) => {
                this.butacasOcupadas = res;
            let i:number;
            if(res && res.length > 0){
                for(i=0;i<res.length;i++){
                    document.getElementById(res[i]['HILERA']+'_'+res[i]['NUMERO']).classList.add('ocupado');
                }
              }
        }         
    );
            
        }
    }
    guardarButacas(){
         if(Number((<HTMLInputElement>document.getElementById("cantidadEntradas")).value) == this.butacaList.length){
             this.entradaControlador.$butacaList=this.butacaList;
             this.pasarPaso();
             $('#butacas_modal').modal('hide');
         }
         else{
             let cant=Number((<HTMLInputElement>document.getElementById("cantidadEntradas")).value)- this.butacaList.length;
             alert("Debe seleccionar "+cant+" butacas más");
         }
    }
}