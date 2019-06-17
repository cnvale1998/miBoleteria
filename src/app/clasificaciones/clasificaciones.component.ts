import { Component, AfterViewInit } from '@angular/core';
import{NgForm}from'@angular/forms';
import {Location} from '@angular/common';

declare var $: any;
@Component({
  selector: 'app-clasificaciones',
  templateUrl: './clasificaciones.component.html',
  styleUrls: ['./clasificaciones.component.css']
})
export class ClasificacionesComponent implements AfterViewInit {

  constructor(private _location: Location) { }

  ngAfterViewInit() {
      $('#clasificaciones_modal').modal('show');
  }
  public back(){
      this._location.back();
  }
}
