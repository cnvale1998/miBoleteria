import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {
  private paso:number;
  constructor() { 
      this.paso=2;
  }

  ngOnInit() {
  }
   public pasarPaso(){
       this.paso= this.paso+1;
  }

}