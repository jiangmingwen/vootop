import { Component, OnInit, Inject } from '@angular/core';
import { MatIconRegistry, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-gps',
  templateUrl: './dialog-gps.component.html',
  styleUrls: ['./dialog-gps.component.scss']
})
export class DialogGpsComponent implements OnInit {
  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  lat1: number = 51.678418;
  lng1: number = 7.00000;
  ngOnInit() {

  }

  constructor(
    public dialogRef: MatDialogRef<DialogGpsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
