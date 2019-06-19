import { Component, AfterViewInit } from '@angular/core';
import{NgForm}from'@angular/forms';
import {Location} from '@angular/common';

declare var $: any;
@Component({
  selector: 'app-como-comprar',
  templateUrl: './como-comprar.component.html',
  styleUrls: ['./como-comprar.component.css']
})
export class ComoComprarComponent implements AfterViewInit {

  constructor(private _location: Location) { }

  ngAfterViewInit() {
      $('#comoComprar_modal').modal('show');
  }
   public back(){
      this._location.back();
  }
}
