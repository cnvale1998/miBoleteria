import { Component, OnInit } from '@angular/core';
import { ApiControladorService } from '../controladores/apiControlador/api-controlador.service';
import { EntradaControladorService } from '../controladores/entradaControlador/entrada-controlador.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-paso-cuatro',
  templateUrl: './paso-cuatro.component.html',
  styleUrls: ['./paso-cuatro.component.css']
})
export class PasoCuatroComponent implements OnInit {
  private combos: any[];
  private cant:number;
  private complejo:string;
  
  constructor(private conector:ApiControladorService,private entradaControlador: EntradaControladorService,private _route: ActivatedRoute) { }

  ngOnInit() {
    this.complejo= this._route.snapshot.paramMap.get('ciudad');
    this.conector.ObetenerCombosDisponibles(this.complejo).subscribe(
        (res : any) => {
                this.combos = res;
                this.cant=res.length;  
        }         
    );
  }
  capturarCombo(id_combo:number,precio:number){
    let i:number;
    this.entradaControlador.$idCombo=id_combo;
    this.entradaControlador.$precioCombo= precio * (Number((<HTMLInputElement>document.getElementById("c_"+id_combo)).value));
    for(i=1;i<this.cant;i++){
        if(id_combo !=i){
         (<HTMLInputElement>document.getElementById("c_"+i)).value="0";
         }
    }
  }

}
