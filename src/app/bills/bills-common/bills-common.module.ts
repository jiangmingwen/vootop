import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BillsCommonComponent } from './bills-common.component';
import {
  MatTabsModule, MatButtonModule, MatCardModule, MatCheckboxModule, MatDialogModule, MatIconModule, MatInputModule, MatListModule, MatToolbarModule,
  MatTableModule, MatTooltipModule, MatSidenavModule, MatGridListModule, MatDatepickerModule, DateAdapter, MatDialog, MatSnackBarModule
} from '@angular/material';

import { FlexLayoutModule } from "@angular/flex-layout";
import 'hammerjs';

import { AgmCoreModule } from '@agm/core';
import { DialogPayComponent } from './dialog-pay/dialog-pay.component';
import { DialogCombineTableComponent } from './dialog-combine-table/dialog-combine-table.component';
import { DialogChangeTableComponent } from './dialog-change-table/dialog-change-table.component';
import { DialogGpsComponent } from './dialog-gps/dialog-gps.component';
import { DialogEditGuestInfoComponent } from './dialog-edit-guest-info/dialog-edit-guest-info.component';
import { DialogPrintBillComponent } from './dialog-print-bill/dialog-print-bill.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatTabsModule,
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatTooltipModule,
    MatGridListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatListModule,
    MatSnackBarModule,
    FlexLayoutModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAAWkO_UTOdzamFR93bOiLs0oBMIM22Rdw'
    }),
  ],
  declarations: [
    BillsCommonComponent,
    DialogPayComponent,
    DialogCombineTableComponent,
    DialogChangeTableComponent,
    DialogGpsComponent,
    DialogEditGuestInfoComponent,
    DialogPrintBillComponent,
  ],
  entryComponents: [
    DialogPayComponent,
    DialogCombineTableComponent,
    DialogChangeTableComponent,
    DialogGpsComponent,
    DialogEditGuestInfoComponent,
    DialogPrintBillComponent
  ],
  providers: [
    MatDialog
  ],
  exports: [
    BillsCommonComponent,
    DialogPayComponent,
    DialogCombineTableComponent,
    DialogChangeTableComponent,
    DialogGpsComponent,
    DialogEditGuestInfoComponent,
    DialogPrintBillComponent
  ]
})
export class BillsCommonModule {

}
