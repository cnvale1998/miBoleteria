import { Component ,OnInit } from '@angular/core';
import { GestorUsuarioService } from './../modelo/gestor-usuario.service';
import { GestorPersonaService } from './../modelo/gestor-persona.service';
import { GestorProvinciaService } from './../modelo/gestor-provincia.service';
import { Provincia } from './../modelo/provincia';//pongo que voy a usar esas clases del modelo
import{NgForm}from'@angular/forms';
declare var $: any;
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
    private provincias:Array<Provincia>;
   constructor( private gestorPersona:GestorPersonaService,
                private gestorUsuario:GestorUsuarioService,
                private gestorProvincia:GestorProvinciaService) {
  }
   ngOnInit() {
       this.provincias=this.gestorProvincia.getProvincias();
  }
  
   public registrarUsuario(registroForm:NgForm): void {//USO EL GESTOR
       
        let value=registroForm.value;
        
        if(! this.gestorUsuario.existe(value.email)){
           this.gestorUsuario.crearUsuario(value.email,value.pass,value.codPostal,value.direc,value.provincia,value.nombre,value.apellido,value.tipoDoc,value.nroDoc,"",value.telefono);
        }
        $('#registrarse_modal').modal('hide');
        registroForm.reset();
  }
  
  /*public iniciarSesion(sesionForm:NgForm):void{
      let value=sesionForm.value;
      if(this.gestorUsuario.existe(value.r1,value.r2)){
          
      }
       sesionForm.reset();
  }*/
}
