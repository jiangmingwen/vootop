import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GtoolbarComponent } from './golbatoolbar/gtoolbar/gtoolbar.component';

const routes: Routes = [
  {
    path:'bills',loadChildren:'app/bills/bills.module#BillsModule'
  },
  { path: 'connection', loadChildren: 'app/connection/connection.module#ConnectionModule' },
  { path: 'cashstatement', loadChildren: 'app/cashstatement/cashstatement.module#CashStatementModule' },
  { path: 'cashregister', loadChildren: 'app/cashregister/cashregister.module#CashRegisterModule' },
  {
    path: '', component: GtoolbarComponent, children: [
      { path: '', loadChildren: 'app/connection/connection.module#ConnectionModule' },
      { path: 'social', loadChildren: 'app/social/social.module#SocialModule' },
    ]
  },
  { path: '**', redirectTo: 'connection/connection' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
