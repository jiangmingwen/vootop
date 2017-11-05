import { Component, OnInit, Inject } from '@angular/core';
import { MatIconRegistry, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-dialog-print-bill',
  templateUrl: './dialog-print-bill.component.html',
  styleUrls: ['./dialog-print-bill.component.scss']
})
export class DialogPrintBillComponent implements OnInit {
  date: string;
  private timer: any;
  ngOnInit() {
    this.timer = setInterval(() => {
      let time = new Date();
      this.date = this.generTimeString(time);
    }, 1000)
  }

  private generTimeString(date: Date): string {
    let y = date.getFullYear();
    let m = date.getMonth() + 1;
    let d = date.getDate();
    let h = date.getHours();
    let min = date.getMinutes();
    let s = date.getSeconds();
    return y + '-' + (m > 9 ? m : '0' + m) + '-' + (d > 9 ? d : '0' + d) + ' ' + (h > 9 ? h : ('0' + h)) + ':' + (min > 9 ? min : ('0' + min)) + ':' + (s > 9 ? s : ('0' + s));
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
  constructor(
    public dialogRef: MatDialogRef<DialogPrintBillComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
