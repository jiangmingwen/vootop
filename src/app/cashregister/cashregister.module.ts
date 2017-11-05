import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import {
  MatButtonModule, MatCardModule, MatIconModule, MatCheckboxModule, MatTabsModule, MatTableModule, MatNativeDateModule, MatSortModule, MatFormFieldModule, MatInputModule, MatDatepickerModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CashRegisterRoutingModule } from './cashregister-routing.module';
import { CashRegisterComponent } from './cashregister.component';
import { CashRegisterService } from './cashregister.server';
import { ManagePostComponent } from './manage-post/manage-post.component';
import { AnnualReporteDialog } from './manage-post/manage-post.component';
import { MonthlyReporteDialog } from './manage-post/manage-post.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatTabsModule,
    MatDatepickerModule,
    HttpModule,
    JsonpModule,
    CashRegisterRoutingModule,
    MatCardModule
  ],
  declarations: [
    CashRegisterComponent,
    ManagePostComponent,
    AnnualReporteDialog,
    MonthlyReporteDialog
  ],
   entryComponents: [
    AnnualReporteDialog,
    MonthlyReporteDialog
  ],
  providers: [
    CashRegisterService
  ],
})
export class CashRegisterModule { }
