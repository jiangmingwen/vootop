import { Component, OnInit, Inject } from '@angular/core';
import { MatIconRegistry, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-dialog-change-table',
  templateUrl: './dialog-change-table.component.html',
  styleUrls: ['./dialog-change-table.component.scss']
})
export class DialogChangeTableComponent implements OnInit {
  ngOnInit() {
  }

  constructor(
    public dialogRef: MatDialogRef<DialogChangeTableComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}