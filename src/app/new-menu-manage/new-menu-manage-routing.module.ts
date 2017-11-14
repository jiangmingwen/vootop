import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuHomeComponent } from './menu-home.component';

const routes: Routes = [

  { path: '', component: MenuHomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewMenuManageRoutingModule { }
