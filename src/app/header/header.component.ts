import { Component ,Input } from '@angular/core';
import { GestorUsuarioService } from './../modelo/gestor-usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  @Input() paso: number;
  private usuario:any;
  private isUserLoggedIn:boolean;
  
  constructor( private gestorUsuario:GestorUsuarioService){
       this.isUserLoggedIn=this.gestorUsuario.sesionIniciada();
      if(this.isUserLoggedIn){
          this.usuario=this.gestorUsuario.getUsuarioActual();
      }
  }
  public cerrarSesion(){
      
      this.gestorUsuario.cerrarSesion();
      alert("Se ha cerrado sesión");
  }
  

}
