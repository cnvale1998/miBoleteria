import { Component, AfterViewInit } from '@angular/core';
import{NgForm}from'@angular/forms';
import {Location} from '@angular/common';

declare var $: any;
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements AfterViewInit {

  constructor(private _location: Location) { }

  ngAfterViewInit() {
      $('#contacto_modal').modal('show');
  }
  public back(){
      this._location.back();
  }
  
}
