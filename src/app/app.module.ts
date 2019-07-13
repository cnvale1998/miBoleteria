import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasoUnoComponent } from './paso-uno/paso-uno.component';
import { PasoDosComponent } from './paso-dos/paso-dos.component';
import { PasoTresComponent } from './paso-tres/paso-tres.component';
import { PasoCuatroComponent } from './paso-cuatro/paso-cuatro.component';
import { PasoCincoComponent } from './paso-cinco/paso-cinco.component';
import { ControllerApiComponent } from './controller-api/controller-api.component';
import { EntradaComponent } from './entrada/entrada.component';
import { ClasificacionesComponent } from './clasificaciones/clasificaciones.component';
import { ComoComprarComponent } from './como-comprar/como-comprar.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RegistroComponent } from './registro/registro.component';
import {ApiControladorService} from './controladores/apiControlador/api-controlador.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { MiCuentaComponent } from './mi-cuenta/mi-cuenta.component';
import { VerHorariosComponent } from './paso-dos/ver-horarios/ver-horarios.component';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';
@NgModule({
  declarations: [
    AppComponent,
    PasoUnoComponent,
    PasoDosComponent,
    PasoTresComponent,
    PasoCuatroComponent,
    PasoCincoComponent,
    ControllerApiComponent,
    EntradaComponent,
    ClasificacionesComponent,
    ComoComprarComponent,
    ContactoComponent,
    RegistroComponent,
    HeaderComponent,
    MiCuentaComponent,
    VerHorariosComponent,
    PaginaNoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ApiControladorService],
  bootstrap: [AppComponent]
})
export class AppModule { }