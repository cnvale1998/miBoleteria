import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Paso1Component } from './entrada/paso1/paso1.component';
import { EntradaComponent } from './entrada/entrada/entrada.component';
import { Paso2Component } from './entrada/paso2/paso2.component';
import { RegistroComponent } from './registro/registro.component';
import {ControllerApiComponent} from './controller-api/controller-api.component';

const routes: Routes =[
{path:"inicio", component:Paso1Component},
{path:"entrada", component: EntradaComponent},
{path:"registro", component: RegistroComponent},
{path:"desarrollo", component: ControllerApiComponent},
{path:'', redirectTo:'inicio', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
