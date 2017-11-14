import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatDialogModule, MatIconModule, MatInputModule,
  MatTableModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UsersRoutingModule} from "./users-routing.module";
import {SaveUsersDialog, UserListComponent} from "./list/list.component";
import {CdkTableModule} from "@angular/cdk/table";

@NgModule({
  imports: [
    UsersRoutingModule,
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    CdkTableModule,
    MatDialogModule
  ],
  declarations: [UserListComponent, SaveUsersDialog],
})
export class UsersModule { }
