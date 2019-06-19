
export class Persona{
    private idCiudad: number;
    private nombre: string;
    private apellido: string;
    private email: string;
    private tipoDoc: string;
    private nroDoc: string;
    private fechaNac: string;
    private telefono: string;
    private personaTipo:string;
    constructor(idCiudad: number,nombre: string,apellido: string,email: string,tipoDoc: string,nroDoc: string,fechaNac: string,telefono: string,personaTipo:string){
       
        this.idCiudad=idCiudad;
        this.nombre=nombre;
        this.apellido=apellido;
        this.email=email;
        this.tipoDoc=tipoDoc;
        this.nroDoc=nroDoc;
        this.fechaNac=fechaNac;
        this.telefono=telefono;
        this.personaTipo=personaTipo;
    }
    
  
    public setIdCiudad(idCiudad:number){
      this.idCiudad=idCiudad;
    }
    public setNombre(nombre:string){
      this.nombre=nombre;
    }
    public setApellido(apellido:string){
      this.apellido=apellido;
    }
    public setEmail(email:string){
      this.email=email;
    }
    public setTipoDoc(tipoDoc:string){
      this.tipoDoc=tipoDoc;
    }
    public setNroDoc(nroDoc:string){
      this.nroDoc=nroDoc;
    }
    public setFechaNac(fechaNac:string){
      this.fechaNac=fechaNac;
    }
    public setTelefono(telefono:string){
      this.telefono=telefono;
    }
     public setPersonaTipo(personaTipo:string){
      this.personaTipo=personaTipo;
    }
    public getIdCiudad():number{return this.idCiudad;}
    public getNombre():string{return this.nombre;}
    public getApellido():string{return this.apellido;}
    public getEmail():string{return this.email;}
    public getTipoDoc():string{return this.tipoDoc;}
    public getNroDoc():string{return this.nroDoc;}
    public getFechaNac():string{return this.fechaNac;}
    public getTelefono():string{return this.telefono;}
    public getPersonaTipo():string{return this.personaTipo;}
    
    public save(){
         console.log("Se creo la persona!. Nombre="+this.nombre+" |Apellido= "+this.apellido+"| Email="+this.email+"| telefono="+this.telefono+"| idCiudad="+this.idCiudad);
     
    }//guardo el objeto en la base de datos
}