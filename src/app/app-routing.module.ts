import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PasoUnoComponent } from './paso-uno/paso-uno.component';
import { EntradaComponent } from './entrada/entrada.component';
import { RegistroComponent } from './registro/registro.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ClasificacionesComponent } from './clasificaciones/clasificaciones.component';
import { ComoComprarComponent } from './como-comprar/como-comprar.component';
import { MiCuentaComponent } from './mi-cuenta/mi-cuenta.component';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';

const routes: Routes =[
{path:"inicio", component:PasoUnoComponent},
{path:"entrada/:paso", component: EntradaComponent},
{path:"registro", component: RegistroComponent},
{path:"contacto", component: ContactoComponent},
{path:"clasificaciones", component: ClasificacionesComponent},
{path:"miCuenta", component: MiCuentaComponent},
{path:"comoComprar", component: ComoComprarComponent},
{path:'', redirectTo:'inicio', pathMatch:'full'},
{ path: '**', component:PaginaNoEncontradaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
