import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import {
  MatButtonModule, MatCardModule, MatIconModule, MatSidenavModule,MatTableModule,MatNativeDateModule,MatPaginatorModule,MatFormFieldModule,MatInputModule,MatDatepickerModule
} from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { CashstatementRoutingModule } from './cashstatement-routing.module';
import { CashStatementComponent } from './cashstatement.component';
import { CashStatementService } from './cashstatement.server';
import { ManagePostComponent } from './manage-post/manage-post.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    MatTableModule,
    MatCardModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatDatepickerModule,
    HttpModule,
    JsonpModule,
    CashstatementRoutingModule
  ],
  declarations: [
    CashStatementComponent,
    ManagePostComponent
  ],
  providers: [
    CashStatementService
  ],
})
export class CashStatementModule { }
