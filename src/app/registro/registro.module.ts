
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GestorPersonaService } from './../modelo/gestor-persona.service';
import { GestorProvinciaService } from './../modelo/gestor-provincia.service';
import { GestorUsuarioService } from './../modelo/gestor-usuario.service';

@NgModule({
  declarations: [],
  imports: [CommonModule,FormsModule],
  providers: [GestorPersonaService,GestorProvinciaService,GestorUsuarioService],//voy a usar el servicio
})
export class RegistroModule { }

