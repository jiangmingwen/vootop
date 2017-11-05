import { Component, OnInit, Inject } from '@angular/core';
import { MatIconRegistry, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BillHttpService } from '../../service/bills.service';

@Component({
  selector: 'app-dialog-gps',
  templateUrl: './dialog-gps.component.html',
  styleUrls: ['./dialog-gps.component.scss']
})
export class DialogGpsComponent implements OnInit {

  key: string = 'AIzaSyBcz263d3pgSKOBwWZJWdZrJSB0_EmH360';
  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  ngOnInit() {

  }

  constructor(
    private billHttpService: BillHttpService,
    public dialogRef: MatDialogRef<DialogGpsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
