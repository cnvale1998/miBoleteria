export class Ciudad{
    private id_provincia: number;
    private nombre: string;
    constructor(id_provincia: number,nombre: string){
        this.id_provincia=id_provincia;
        this.nombre=nombre;
    }
    
    public setIdProvincia(id_provincia:number){
      this.id_provincia=id_provincia;
    }
    public setNombre(nombre:string){
      this.nombre=nombre;
    }
    public getIdProvincia():number{return this.id_provincia;}
    public getNombre():string{return this.nombre;}
}