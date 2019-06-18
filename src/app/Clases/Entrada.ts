export class Entrada{
ID_ENTRADA :number;
NOMBRE_PELICULA: String;
PRECIO :number;
FECHA : String;
MODOPAGO: string ;
DESCUENTO :number;
ID_PELICULA : number;
ID_TICKET: number;
ID_BENEFICIO: number;
constructor(){
  this.NOMBRE_PELICULA="";
  this.FECHA="";

}
setIdPeliculaEntrada(id:number){
    this.ID_PELICULA=id;
  }
getIdPeliculaEntrada():number{
    //console.log(this.ID_PELICULA+ " get");
    return this.ID_PELICULA;
  }
  setNombrePelicula(nombre:String){
    this.NOMBRE_PELICULA=nombre;
  }
getNombrePelicula():String{
    //console.log(this.ID_PELICULA+ " get");
    return this.NOMBRE_PELICULA;
  }
setFecha(fecha:String){
    this.FECHA=fecha;
  }
getFecha():String{
    //console.log(this.ID_PELICULA+ " get");
    return this.FECHA;
  }

}