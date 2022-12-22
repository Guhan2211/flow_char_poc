import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddappComponent } from './addapp/addapp.component';
import { FlowComponent } from './flow/flow.component';

const routes: Routes = [

  {path:"",component:FlowComponent},
  {path:"create",component:AddappComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
