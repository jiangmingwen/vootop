import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SocialComponent} from './social/social.component';

const routes: Routes = [
  { path: '', children: [
    {path: 'social', component: SocialComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialRoutingModule { }
