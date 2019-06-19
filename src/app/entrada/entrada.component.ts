import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import * as jsPDF from 'jspdf';
import { EntradaControladorService } from '../controladores/entradaControlador/entrada-controlador.service';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {
  private paso:number;
  private idCiudad:number;
  constructor(private _route: ActivatedRoute,private location: Location,private entradaControlador: EntradaControladorService) { 
      this.paso=Number(this._route.snapshot.paramMap.get('paso'));
      if(this._route.snapshot.paramMap.get('idCiudad')){
        this.idCiudad=Number(this._route.snapshot.paramMap.get('idCiudad'));
        //guardar en la sesion
      }
  }

  ngOnInit() {
  }
   public pasarPaso(){
      this.paso= this.paso+1;
      this.location.go("entrada/"+this.paso);
  }

  generarPDF() {
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
    documento.text(this.entradaControlador.$horarioPelicula, 42, 33);
    documento.text("$120.00", 42, 41);
    
    documento.output("dataurlnewwindow");
}

}