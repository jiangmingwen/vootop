import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BillsRoutingModule } from './bills-routing.module';
import { HomeComponent } from './home/home.component';
import {
  MatTabsModule, MatButtonModule, MatCardModule, MatCheckboxModule, MatDialogModule, MatIconModule, MatInputModule,
  MatTableModule, MatTooltipModule, MatSidenavModule, MatGridListModule, MatDatepickerModule, DateAdapter
} from '@angular/material';
import { BillsCommonModule } from './bills-common/bills-common.module';

@NgModule({
  imports: [
    CommonModule,
    BillsRoutingModule,
    MatInputModule,
    MatTabsModule,
    FormsModule,
    MatIconModule,
    MatTableModule,
    MatCardModule,
    BillsCommonModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class BillsModule { }
