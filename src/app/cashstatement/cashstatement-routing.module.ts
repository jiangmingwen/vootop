import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagePostComponent } from './manage-post/manage-post.component';
import { CashStatementComponent } from './cashstatement.component';
const routes: Routes = [
  { path: '',
    component: CashStatementComponent,
    children: [
      {path: '', component: ManagePostComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CashstatementRoutingModule { }
