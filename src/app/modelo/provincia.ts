export class Provincia{
    private id: number;
    private nombre: string;
    constructor(id: number,nombre: string){
        this.id=id;
        this.nombre=nombre;
    }
    
    public setId(id:number){
      this.id=id;
    }
    public setNombre(nombre:string){
      this.nombre=nombre;
    }
    public getId():number{return this.id;}
    public getNombre():string{return this.nombre;}
}