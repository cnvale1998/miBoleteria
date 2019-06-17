import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PasoUnoComponent } from './paso-uno/paso-uno.component';
import { PasoDosComponent } from './paso-dos/paso-dos.component';
import { EntradaComponent } from './entrada/entrada.component';
import { RegistroComponent } from './registro/registro.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ClasificacionesComponent } from './clasificaciones/clasificaciones.component';
import { ComoComprarComponent } from './como-comprar/como-comprar.component';


const routes: Routes =[
{path:"inicio", component:PasoUnoComponent},
{path:"entrada/:paso", component: EntradaComponent},
{path:"entrada/:paso/:idCiudad", component: EntradaComponent},
{path:"registro", component: RegistroComponent},
{path:"contacto", component: ContactoComponent},
{path:"clasificaciones", component: ClasificacionesComponent},
{path:"comoComprar", component: ComoComprarComponent},
{path:'', redirectTo:'inicio', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
