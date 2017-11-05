import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { BillHttpService } from '../service/bills.service';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  public allBills: any;
  private dialogCategory: number;//1=支付 2=桌子合并 3=换桌 4=GPS 5=修改客户资料 6=打印发票
  private dialogName: string;
  private dialogAnimal: string;
  public allBillsClone: any[];
  public search: string;
  public displayedColumns = ['id', 'name', 'paid', 'tableNum', 'price', 'type'];
  public dataSource;
  constructor(
    private billHttpService: BillHttpService,
  ) {
  }

  ngOnInit() {
    this.allBills = [];
    this.getBillInfo();
  }

  onSearchKeyUp(word: string): void {
    console.log(word);
    this.allBills = [];
    for (let i = 0; i < this.allBillsClone.length; i++) {
      console.log(this.allBillsClone[i])
      if (this.allBillsClone[i].name.toUpperCase().indexOf(word.toUpperCase()) >= 0) {
        this.allBills.push(this.allBillsClone[i]);
      }
    }
  }

  onTabsClick(key: string, type: any): void {
    this.allBills = [];
    for (let i = 0; i < this.allBillsClone.length; i++) {
      if (this.allBillsClone[i][key] === type) {
        this.allBills.push(this.allBillsClone[i]);
      }
    }
  }

  private getBillInfo(): void {
    let url = 'assets/mock/bill.json';
    this.billHttpService.serviceConfig(url, "GET").subscribe(res => {
      console.log(res, 'com');
      this.allBillsClone = JSON.parse(JSON.stringify(res.data));
      this.allBills = res.data;
      this.onTabsClick('type', 'restaurant');
      this.dataSource = new ExampleDataSource(this);
    })
  }

  selectChange(e): void {
    switch (e.index) {
      case 0:
        this.onTabsClick('type', 'restaurant');
        break;
      case 1:
        this.onTabsClick('type', 'send');
        break;
      case 2:
        this.onTabsClick('type', 'pack');
        break;
      case 3:
        this.onTabsClick('paid', false);
        break;
      case 4:
        this.onTabsClick('paid', true);
        break;
      case 5:
        console.log(this.allBillsClone)
        this.allBills = this.allBillsClone;
        break;
    }
  }
}


export class ExampleDataSource extends DataSource<any> {
  constructor(private h: HomeComponent) {
    super();
  }
  connect(): Observable<any[]> {
    return Observable.of(this.h.allBillsClone);
  }

  disconnect() { }
}
