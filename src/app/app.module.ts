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
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }