import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppMenuComponent } from './menu/menu.component';
import { ConnectionComponent } from './connection/connection/connection.component';
import { InscriptionComponent } from './connection/inscription/inscription.component';
import { RepasswordComponent } from './connection/repassword/repassword.component';
import { NofoundComponent } from './connection/nofound/nofound.component';
import { ErroComponent } from './connection/erro/erro.component';
import { VerifokComponent } from './connection/verifok/verifok.component';
import { VerifnoComponent } from './connection/verifno/verifno.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: './connection/connection.module#ConnectionModule'
  },
  {
    path: 'main', component: AppMenuComponent, children: [
      { path: 'social', loadChildren: './social/social.module#SocialModule' },
      { path: 'cashstatement', loadChildren: './cashstatement/cashstatement.module#CashStatementModule' },
      { path: 'cashregister', loadChildren: './cashregister/cashregister.module#CashRegisterModule' },
      { path: 'menu', loadChildren: './new-menu-manage/new-menu-manage.module#NewMenuManageModule' },
      { path: 'bills', loadChildren: './bills/bills.module#BillsModule' },
      { path: 'users', loadChildren: './users//users.module#UsersModule' },
    ]
  },
  { path: '**', redirectTo: 'nofound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
