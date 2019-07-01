import { Component ,OnInit } from '@angular/core';
import { GestorUsuarioService } from './../modelo/gestor-usuario.service';
import { GestorPersonaService } from './../modelo/gestor-persona.service';
import { GestorProvinciaService } from './../modelo/gestor-provincia.service';
import { Provincia } from './../modelo/provincia';
import{NgForm}from'@angular/forms';
import {Location} from '@angular/common';
declare var $: any;

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
    private provincias:any[]=[];
    private contador:number=2;
    private passMatch: boolean=true;
    private existe:boolean;
    private tipoDoc={'status':""};
    private provincia={'status':""};
   constructor( private gestorPersona:GestorPersonaService,
                private gestorUsuario:GestorUsuarioService,
                private gestorProvincia:GestorProvinciaService,
                private _location: Location) {
    }
ngOnInit() {
    this.gestorProvincia.getProvincias().subscribe(res => {this.provincias = res;});
}

public registrarUsuario(registroForm:NgForm): void {
    let value=registroForm.value;
    if(this.contador==0){
        if(value.pass!=value.pass2){
            this.passMatch=false;
        }
        else{ 
            let cad1=value.email.replace(/\s/g, "");
            this.gestorPersona.crearPersona(1,value.nombre,value.apellido,cad1,value.tipoDoc,value.nroDoc,"",value.telefono,"usuario");
            this.gestorUsuario.crearUsuario(value.email,value.pass,value.codPostal,value.direc,value.provincia,value.ciudad);
            $('#registrarse_modal').modal('hide');
            registroForm.reset();
        }
    }
}

public usuarioExiste(email:string){
    if(email){
        let cad1=email.replace(/\s/g, "");
        this.gestorUsuario.existe(cad1).subscribe(res => {this.contador = res;});
    }
}

public back(){
   this._location.back();
}

public iniciarSesion(loginForm:NgForm) {
    let value=loginForm.value;
    
    let cad1=value.correo.replace(/\s/g, "");
    this.gestorUsuario.iniciarSesion(cad1, value.contrasenia);
}


/*
public passwordMatchValidator(group: FormGroup): any {
if (group) {
 if (group.get("password").value !==group.get("confirm").value) {
   return { notMatching : true };
 }
}

return null;
}*/


/*public iniciarSesion(sesionForm:NgForm):void{
   let value=sesionForm.value;
   if(this.gestorUsuario.existe(value.r1,value.r2)){

   }
    sesionForm.reset();
}*/
}
