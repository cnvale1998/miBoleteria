
import { Persona } from './persona';//pongo que voy a usar esas clases del modelo

export class Usuario extends Persona{
    private codPostal: number;
    private direccion: string;
    private pass: string;
    constructor(email: string,pass: string,codPostal:number, direccion:string,idCiudad: number,nombre: string,apellido: string,tipoDoc: string,nroDoc: string,fechaNac: string,telefono: string){
        super(idCiudad,nombre,apellido,email,tipoDoc,nroDoc,fechaNac,telefono,"usuario");

        this.pass=pass;
        this.codPostal=codPostal;
        this.direccion=direccion;
       
        
    }
    
    public setPass(pass:string){
      this.pass=pass;
    }
    public setDireccion(direccion:string){
      this.direccion=direccion;
    }
    public setCodPostal(codPostal:number){
      this.codPostal=codPostal;
    }
    public getPass():string{return this.pass;}
    public getDireccion():string{return this.direccion;}
    public getCodPostal():number{return this.codPostal;}
    
    public saveUser(){
         console.log("Se creo usuario! codPostal :"+this.codPostal+"| direccion: "+this.direccion);
         //super.save();
       
    }//guardo el objeto en la base de datos
}