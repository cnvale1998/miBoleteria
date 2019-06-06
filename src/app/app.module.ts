import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasoUnoComponent } from './paso-uno/paso-uno.component';
import { PasoDosComponent } from './paso-dos/paso-dos.component';
import { PasoTresComponent } from './paso-tres/paso-tres.component';
import { PasoCuatroComponent } from './paso-cuatro/paso-cuatro.component';
import { PasoCincoComponent } from './paso-cinco/paso-cinco.component';
import { ControllerApiComponent } from './controller-api/controller-api.component';

@NgModule({
  declarations: [
    AppComponent,
    PasoUnoComponent,
    PasoDosComponent,
    PasoTresComponent,
    PasoCuatroComponent,
    PasoCincoComponent,
    ControllerApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
