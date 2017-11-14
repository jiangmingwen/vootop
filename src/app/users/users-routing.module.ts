import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent, SaveUsersDialog} from './list/list.component';
import { AuthGuard } from '../auth-guard.service';

const routes: Routes = [
  { 
    path: '',
    component: UserListComponent,
    data:{auth:1},
    canActivate:[AuthGuard]

  },
    {path: 'save', component: SaveUsersDialog}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
