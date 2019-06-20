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
    private provincias:Array<Provincia>;
    private contador:number=2;
   constructor( private gestorPersona:GestorPersonaService,
                private gestorUsuario:GestorUsuarioService,
                private gestorProvincia:GestorProvinciaService,
                private _location: Location) {
  }
   ngOnInit() {
       this.provincias=this.gestorProvincia.getProvincias();
  }
  
   public registrarUsuario(registroForm:NgForm): void {
        let value=registroForm.value;
       if(value.pass!=value.pass2){
           alert("Las contraseñas no son iguales");
       }
       else{
          
            let value=registroForm.value;  
            this.gestorPersona.crearPersona(1,value.nombre,value.apellido,value.email,value.tipoDoc,value.nroDoc,"",value.telefono,"usuario");
            this.gestorUsuario.crearUsuario(value.email,value.pass,value.codPostal,value.direc);
            $('#registrarse_modal').modal('hide');
            registroForm.reset();
        }
  }
  public usuarioExiste(email:string){
      if(email){
        this.gestorUsuario.existe(email).subscribe(res => {this.contador = res;});
      }
  }
   public back(){
      this._location.back();
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
