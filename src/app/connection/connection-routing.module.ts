import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConnectionComponent} from './connection/connection.component';
import {InscriptionComponent} from './inscription/inscription.component';
import {RepasswordComponent} from './repassword/repassword.component';
import {NofoundComponent} from "./nofound/nofound.component";
import {ErroComponent} from "./erro/erro.component";
import {VerifokComponent} from "./verifok/verifok.component";
import {VerifnoComponent} from "./verifno/verifno.component";

const routes: Routes = [
  { path: '', children: [
    {path: 'connection', component: ConnectionComponent},
    {path: 'inscription', component: InscriptionComponent},
    {path: 'repassword', component: RepasswordComponent},
    {path: 'nofound', component: NofoundComponent},
    {path: 'erro', component: ErroComponent},
    {path: 'verifok', component: VerifokComponent},
    {path: 'verifno', component: VerifnoComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConnectionRoutingModule { }
