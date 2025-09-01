import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './Error/error-component/error-component';
import { AddToDo } from './home/add-to-do/add-to-do';
import { ViewToDO } from './home/view-to-do/view-to-do';
import { UpdateToDO } from './home/update-to-do/update-to-do';

const routes: Routes = [
{path:'add-to-do',component:AddToDo},
{path:'update-to-do',component:UpdateToDO},
{path:'view-to-do',component:ViewToDO},
{path:'**',component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
