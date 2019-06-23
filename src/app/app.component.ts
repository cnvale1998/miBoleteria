import { Component} from '@angular/core';
import { GestorUsuarioService } from './modelo/gestor-usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title = 'mi-boleteria';
  private isUserLoggedIn:boolean;
  private usuario:any;
  
  constructor( private gestorUsuario:GestorUsuarioService){
      
       this.isUserLoggedIn=this.gestorUsuario.sesionIniciada();
      if(this.isUserLoggedIn){
          this.usuario=this.gestorUsuario.getUsuarioActual();
      }
  }
  
}
