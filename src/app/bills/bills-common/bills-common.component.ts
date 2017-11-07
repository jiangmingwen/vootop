import { Component, OnInit, Input } from '@angular/core';
import { MatIconRegistry, MatDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

import { DialogPayComponent } from './dialog-pay/dialog-pay.component';
import { DialogCombineTableComponent } from './dialog-combine-table/dialog-combine-table.component';
import { DialogChangeTableComponent } from './dialog-change-table/dialog-change-table.component';
import { DialogGpsComponent } from './dialog-gps/dialog-gps.component';
import { DialogEditGuestInfoComponent } from './dialog-edit-guest-info/dialog-edit-guest-info.component';
import { DialogPrintBillComponent } from './dialog-print-bill/dialog-print-bill.component';
@Component({
  selector: 'app-bills-common',
  templateUrl: './bills-common.component.html',
  styleUrls: ['./bills-common.component.scss']
})
export class BillsCommonComponent implements OnInit {
  @Input() allBills: any[];

  // public allBills: any[];
  private dialogCategory: number;//1=支付 2=桌子合并 3=换桌 4=GPS 5=修改客户资料 6=打印发票
  private dialogName: string;
  private dialogAnimal: string;

  constructor(
    public sanitizer: DomSanitizer,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit() {
  }

  onIconClick(item: any, index: number): void {
    this.dialogCategory = index;
    this.openDialog(index, item);
  }

  isXsMode(): boolean {
    return window.innerWidth < 599;
  }

  openDialog(index: number, item: any): void {
    let dialogRef;
    switch (index) {
      case 0:
        if (this.isXsMode()) {
          dialogRef = this.dialog.open(DialogPayComponent, {
            width: '650px',
            height: '80%',
            data: item
          });
        } else {
          dialogRef = this.dialog.open(DialogPayComponent, {
            width: '650px',
            data: item
          });
        }
        break;
      case 1:
        dialogRef = this.dialog.open(DialogCombineTableComponent, {
          width: '650px',
          data: item
        });
        break;
      case 2:
        dialogRef = this.dialog.open(DialogChangeTableComponent, {
          width: '650px',
          data: item
        });
        break;
      case 3:
        dialogRef = this.dialog.open(DialogGpsComponent, {
          width: '650px',
          data: item
        });
        break;
      case 4:
        dialogRef = this.dialog.open(DialogEditGuestInfoComponent, {
          width: '650px',
          data: item
        });
        break;
      case 5:
        dialogRef = this.dialog.open(DialogPrintBillComponent, {
          width: '650px',
          data: item
        });
        break;
    }
  }

}
