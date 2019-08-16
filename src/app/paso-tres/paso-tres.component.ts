import { Component, OnInit } from '@angular/core';
import { ApiControladorService } from '../controladores/apiControlador/api-controlador.service';
import { EntradaControladorService } from '../controladores/entradaControlador/entrada-controlador.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-paso-tres',
  templateUrl: './paso-tres.component.html',
  styleUrls: ['./paso-tres.component.css']
})
export class PasoTresComponent implements OnInit {

  beneficios: any[]; 
  opcionSeleccionado: number  = 0;
  cant:number;
  idPelicula:string;
  constructor(private conector:ApiControladorService, private entradaControlador:EntradaControladorService ,private _route: ActivatedRoute) { }

  ngOnInit() {
     this.idPelicula= this._route.snapshot.paramMap.get('pelicula');
     let tipo:number=2;
    if(this.entradaControlador.$nombrePelicula.indexOf("3D") > -1) {tipo=3;}
    this.entradaControlador.$idBeneficio=-1;
    let ciu=this._route.snapshot.paramMap.get('ciudad');
    this.conector.getBenefEntrada({TIPO:tipo,CIUDAD:ciu}).subscribe(
        (res : any) => {
                this.beneficios = res;
                this.cant=res.length;
        }         
    );
    
}

capturarBeneficio(id_beneficio:number,costo:number){
    let i:number;
    this.entradaControlador.$idBeneficio=id_beneficio; 
    this.entradaControlador.$precioEntrada=costo*(Number((<HTMLInputElement>document.getElementById("s_"+id_beneficio)).value));
    (<HTMLInputElement>document.getElementById("cantidadEntradas")).value=(<HTMLInputElement>document.getElementById("s_"+id_beneficio)).value;
    for(i=0;i<this.cant;i++){
        if(id_beneficio !=i){
         (<HTMLInputElement>document.getElementById("s_"+i)).value="0";
         }
    }
}
}
