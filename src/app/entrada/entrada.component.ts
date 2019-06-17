import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {
  private paso:number;
  private idCiudad:number;
  constructor(private _route: ActivatedRoute,private location: Location) { 
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

}