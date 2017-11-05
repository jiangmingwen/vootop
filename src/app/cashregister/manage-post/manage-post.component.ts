import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {CashRegisterService} from '../cashregister.server';
import {MatPaginator} from '@angular/material';
import { DateAdapter, NativeDateAdapter } from '@angular/material';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { IPost } from '../models/post';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { MatSort } from '@angular/material';
import {MatDialog} from '@angular/material';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';
@Component({
  selector: 'app-manage-post',
  templateUrl: './manage-post.component.html',
  styleUrls: ['./manage-post.component.scss']
})
export class ManagePostComponent implements OnInit {

  public dataSize: number;
  public dataSource: PostDataSource;
  public displayedColumns = ['check','date','orderQuantity', 'income', 'cash', 'card','mealTicket','other1' ,'other2','other3'];
  public deleteDataSource = new DeleteDataSource();
  public deleteDisplayedColumns = ['type','orderQuantity','grossIncome', 'taxRate','taxIncome'];
  @ViewChild(MatSort) sort: MatSort;
  constructor(private postService: CashRegisterService,public dialog: MatDialog,private dateAdapter:DateAdapter<Date>) {
    dateAdapter.setLocale('LL');
   }
  cashStatements:any[];
  selectedId:number=0;
  index:number=9;
  ngOnInit() {
    this.getCashRegister();
  }
  /************************* 获取日报表 ********************************/
  getCashRegister() {
        this.postService.getCashRegister()
          .then(
            res => {
              this.cashStatements=res;
              this.setPosts(res)
            },
            error => {
              console.log('获取报表失败');
              alert('Error ' + error)
            }
          )
      }
    getCashAnnualRegister() {
      this.postService.getCashAnnulReport()
        .then(
          res => {
            this.cashStatements=res;
            this.setPosts(res)
          },
          error => {
            console.log('获取报表失败');
            alert('Error ' + error)
          }
        )
    }
  delAllcashStatement(){
    this.cashStatements=[];
    this.setPosts(this.cashStatements);
  }
  setPosts(result): void {
    if (result.error) {
        alert('Web API error ' + result.message);
    }

    this.dataSource = new PostDataSource(result, this.sort);
    this.dataSize = result.length;
    console.dir(result);
  }
  onDateChange(e){
    this.getCashAnnualRegister();
  }
  openAnnualDialog() {
    const dialogRef = this.dialog.open(AnnualReporteDialog, {
      height: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openMonthlyDialog() {
    const dialogRef = this.dialog.open(MonthlyReporteDialog, {
      height: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
// export class PostDataSource extends DataSource<IPost> {

//     constructor(private posts: IPost[], private sort: MatSort) {
//       super();
//     }

//     connect(): Observable<IPost[]> {
//       return Observable.of(this.posts);
//     }

//     disconnect(): void {
//     }
//   }
export interface Element {
  type: string;
  orderQuantity: string;
  grossIncome: string;
  taxRate: string;
  taxIncome:string;
}

const data: Element[] = [
  {type: '12', orderQuantity: '12', grossIncome: '12' ,taxRate: '12',taxIncome:'42'},
  {type: '其他税率1', orderQuantity: '其他税率2', grossIncome: '其他税率3' ,taxRate: '其他税率4',taxIncome:'总的税率'},
  {type: '12', orderQuantity: '12', grossIncome: '12' ,taxRate: '12',taxIncome:'42'},
];

/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. In our case here,
 * we return a stream that contains only one set of data that doesn't change.
 */
export class DeleteDataSource extends DataSource<Element> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Element[]> {
    return Observable.of(data);
  }

  disconnect() {}
}
export class PostDataSource extends DataSource<IPost> {

  get data(): IPost[] { return this.dataChange.value; }
  dataChange: BehaviorSubject<IPost[]> = new BehaviorSubject<IPost[]>([]);
  constructor(private posts: IPost[], private _sort: MatSort) {
    super();
  }

  connect(): Observable<IPost[]> {
    const displayDataChanges = [
      this.dataChange,
      this._sort.sortChange,
    ];
    return Observable.merge(...displayDataChanges).map(() => {
      return this.getSortedData();
    });
  }
  disconnect(): void {
  }
  /** Returns a sorted copy of the database data. */
 getSortedData(): IPost[] {
  const data = this.posts.slice();
  console.log(this._sort.active)
  if (!this._sort.active || this._sort.direction == '') { return data; }
  return data.sort((a, b) => {
    let propertyA: number|string = '';
    let propertyB: number|string = '';

    // switch (this._sort.active) {
    //   case 'date': [propertyA, propertyB] = [a.date, b.date]; break;
    //   case 'orderQuantity': [propertyA, propertyB] = [a.orderQuantity, b.orderQuantity]; break;
    //   case 'income': [propertyA, propertyB] = [a.income, b.income]; break;
    //   case 'cash': [propertyA, propertyB] = [a.cash, b.cash]; break;
    // }

    let valueA = isNaN(+propertyA) ? propertyA : +propertyA;
    let valueB = isNaN(+propertyB) ? propertyB : +propertyB;

    return (valueA < valueB ? -1 : 1) * (this._sort.direction == 'asc' ? 1 : -1);
  });
}
}
@Component({
  selector: 'annual-report-dialog',
  templateUrl: '../dialog-content/annual-report-dialog.html',
  styleUrls: ['./manage-post.component.scss']
})
export class AnnualReporteDialog {
  public dataSize: number;
  public dataSource: PostDataSource;
  public displayedColumns = ['check','date','orderQuantity', 'income', 'cash', 'card','mealTicket','other1' ,'other2','other3'];
  public deleteDataSource = new DeleteDataSource();
  public deleteDisplayedColumns = ['type','orderQuantity','grossIncome', 'taxRate','taxIncome'];
  @ViewChild(MatSort) sort: MatSort;
  constructor(private postService: CashRegisterService,public dialog: MatDialog,private dateAdapter:DateAdapter<Date>) {
    dateAdapter.setLocale('LL');
   }
  cashStatements:any[];
  selectedId:number=0;
  index:number=9;
  ngOnInit() {
    this.getCashRegister();
  }

  /************************* 获取年报表 ********************************/
  getCashRegister() {

        this.postService.getCashAnnulReport()
          .then(
            res => {
              this.cashStatements=res;
              this.setPosts(res)
            },
            error => {
              console.log('获取报表失败');
              alert('Error ' + error)
            }
          )
      }
  setPosts(result): void {
    if (result.error) {
        alert('Web API error ' + result.message);
    }

    this.dataSource = new PostDataSource(result, this.sort);
    this.dataSize = result.length;
    console.dir(result);
  }
}

@Component({
  selector: 'monthly-report-dialog',
  templateUrl: '../dialog-content/monthly-report-dialog.html',
  styleUrls: ['./manage-post.component.scss']
})
export class MonthlyReporteDialog {
  public dataSize: number;
  public dataSource: PostDataSource;
  public displayedColumns = ['check','date','orderQuantity', 'income', 'cash', 'card','mealTicket','other1' ,'other2','other3'];
  public deleteDataSource = new DeleteDataSource();
  public deleteDisplayedColumns = ['type','orderQuantity','grossIncome', 'taxRate','taxIncome'];

  @ViewChild(MatSort) sort: MatSort;
  constructor(private postService: CashRegisterService,public dialog: MatDialog,private dateAdapter:DateAdapter<Date>) {
    dateAdapter.setLocale('LL');
   }
  cashStatements:any[];
  selectedId:number=0;
  index:number=9;
  ngOnInit() {
    this.getCashRegister();
  }

  /************************* 获取月报表 ********************************/
  getCashRegister() {

        this.postService.getCashMonthlyReport()
          .then(
            res => {
              this.cashStatements=res;
              this.setPosts(res)
            },
            error => {
              console.log('获取报表失败');
              alert('Error ' + error)
            }
          )
      }
  setPosts(result): void {
    if (result.error) {
        alert('Web API error ' + result.message);
    }

    this.dataSource = new PostDataSource(result, this.sort);
    this.dataSize = result.length;
    console.dir(result);
  }
}
