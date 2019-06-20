import { Component, AfterViewInit } from '@angular/core';
import{NgForm}from'@angular/forms';
import {Location} from '@angular/common';
import { GestorConsultaService } from './../modelo/gestor-consulta.service';
import { GestorPersonaService } from './../modelo/gestor-persona.service'

declare var $: any;
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements AfterViewInit {

  constructor(private _location: Location,private gestorConsulta: GestorConsultaService,private gestorPersona:GestorPersonaService) { }

  ngAfterViewInit() {
      $('#contacto_modal').modal('show');
  }
  public back(){
      this._location.back();
  }
   public registrarConsulta(consultaForm:NgForm): void {
     
        let value=consultaForm.value;
        this.gestorPersona.crearPersona(1,value.nombre,value.apellido,value.email,"","","","","consultaBoleteria");
        this.gestorConsulta.crearConsulta(value.email,"consultaBoleteria",value.consulta);
        $('#contacto_modal').modal('hide');
        this.back();
  }
  
}
