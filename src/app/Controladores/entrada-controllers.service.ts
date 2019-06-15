import { Injectable } from '@angular/core';
import { Entrada } from '../Clases/Entrada';

@Injectable({
  providedIn: 'root'
})
export class EntradaControllersService {
  entrada:Entrada=new Entrada();
  constructor() { }
  
  setIdPeliculaEntrada(id:number){
    this.entrada.setIdPeliculaEntrada(id);
    //console.log(id + " Service");
  }
  getIdPeliculaEntrada():number{
    return this.entrada.getIdPeliculaEntrada();
  }
  
}
