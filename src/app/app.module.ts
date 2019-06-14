import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import{APIControllersService} from './APIControllers/apicontrollers.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './registro/registro.component';
import { EntradaComponent } from './entrada/entrada/entrada.component';
import { Paso1Component } from './entrada/paso1/paso1.component';
import { Paso2Component } from './entrada/paso2/paso2.component';
import { Paso3Component } from './entrada/paso3/paso3.component';
import { Paso4Component } from './entrada/paso4/paso4.component';
import { Paso5Component } from './entrada/paso5/paso5.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    EntradaComponent,
    Paso1Component,
    Paso2Component,
    Paso3Component,
    Paso4Component,
    Paso5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [APIControllersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
