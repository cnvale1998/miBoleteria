import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PasoUnoComponent } from './paso-uno/paso-uno.component';
import { PasoDosComponent } from './paso-dos/paso-dos.component';

const routes: Routes = [
{path:"inicio", component:PasoUnoComponent},
{path:"paso2", component: PasoDosComponent},
{path:'', redirectTo:'inicio', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
