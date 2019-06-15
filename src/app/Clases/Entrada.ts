export class Entrada{
ID_ENTRADA :number;
PRECIO :number;
FECHA : string;
MODOPAGO: string ;
DESCUENTO :number;
ID_PELICULA : number;
ID_TICKET: number;
ID_BENEFICIO: number;
constructor(){

}
setIdPeliculaEntrada(id:number){
    this.ID_PELICULA=id;
  }
getIdPeliculaEntrada():number{
    //console.log(this.ID_PELICULA+ " get");
    return this.ID_PELICULA;
  }

}