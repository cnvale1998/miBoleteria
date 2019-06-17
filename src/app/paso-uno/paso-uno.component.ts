import { Component, OnInit } from '@angular/core';
import{NgForm}from'@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-paso-uno',
  templateUrl: './paso-uno.component.html',
  styleUrls: ['./paso-uno.component.css']
})
export class PasoUnoComponent implements OnInit {

  constructor(private _route: Router) { }

  ngOnInit() {
  }
 public elegirCiudad(ciudadForm:NgForm): void{
         let idCiudad=Number(ciudadForm.value.ciudad);
         this._route.navigate(["/entrada/2/"+idCiudad]);
  }
}
