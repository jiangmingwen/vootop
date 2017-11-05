import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {CashStatementService} from '../cashstatement.server';
import {MatPaginator} from '@angular/material';
import { DateAdapter, NativeDateAdapter } from '@angular/material';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { IPost } from '../models/post';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { MatSort } from '@angular/material';
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
  styleUrls: ['./manage-post.component.css']
})
export class ManagePostComponent implements OnInit {

  public dataSize: number;
  public dataSource: PostDataSource;
  public displayedColumns = ['Invoice','PurchaseMen', 'PurchasePrice', 'PurchaseTime',  'Wholesaler', 'delete','edit' ,'Mtime'];
  InvoiceFormControl = new FormControl('', [
  Validators.required]);
  PurchaseTimeFormControl = new FormControl('', [
    Validators.required]);
  PurchaseMenFormControl = new FormControl('', [
    Validators.required]);
  PurchasePriceFormControl = new FormControl('', [
    Validators.required]);
  WholesalerFormControl = new FormControl('', [
    Validators.required]);
  MtimeFormControl = new FormControl('', [
    Validators.required]);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('filter') filter: ElementRef;
  constructor(private postService: CashStatementService,private dateAdapter:DateAdapter<Date>) {
    dateAdapter.setLocale('de-DE');
   }
  cashStatements:any[];
  selectedId:number=0;
  index:number=9;
  ngOnInit() {
    this.getCashStatement();
  }
/************************* 获取库存表 ********************************/
  getCashStatement() {
       this.postService.getCashStatement()
              .then(
                res => {
                  this.cashStatements=res;
                  this.setPosts(res)
                },
                error => {
                  console.log('获取库存表失败');
                  alert('Error ' + error)
                }
              )
          }
  // getPosts() {
  //   this.postService.getCashStatement().subscribe(
  //     result => this.setPosts(result),
  //     error => alert('Error ' + error)
  //   );
  // }
 deletePost(id){
 for(var i=0 ;i<this.cashStatements.length;i++){
   if(this.cashStatements[i].id==id){
     this.cashStatements.splice(i,1)
   }
 }
 this.selectedId=0;
  this.setPosts(this.cashStatements);
  }
  editPost(id){
  this.selectedId=id
  }
  savePost(id){
    if(this.InvoiceFormControl.valid &&this.PurchaseTimeFormControl.valid&&this.PurchaseMenFormControl.valid&&this.PurchasePriceFormControl.valid&&this.WholesalerFormControl.valid
      &&this.MtimeFormControl.valid){
      this.selectedId=0;
    }else{
      alert('请先填写完必要信息')
    }
  }
  addCashStatement(){
    if( this.selectedId!=0){
      alert('请先保存');
      return false
    }
    this.cashStatements.unshift({
      id: this.index,
      Invoice: "",
      PurchaseTime: "",
      Wholesaler: "",
      PurchasePrice: "",
      PurchaseMen: "",
      Mtime: ""
  })
  this.selectedId=this.index;
  this.index++
    this.setPosts(this.cashStatements);
  }
  delAllcashStatement(){
    this.cashStatements=[];
    this.setPosts(this.cashStatements);
  }
  setPosts(result): void {
    if (result.error) {
        alert('Web API error ' + result.message);
    }

    this.dataSource = new PostDataSource(result, this.paginator);
    this.dataSize = result.length;
    Observable.fromEvent(this.filter.nativeElement, 'keyup')
    .debounceTime(150)
    .distinctUntilChanged()
    .subscribe(() => {
      if (!this.dataSource) { return; }
      this.dataSource.filter = this.filter.nativeElement.value;
    });
    console.dir(result);
  }

  // deletePost(id: number) {
  //   this.postService.deletePost(id).subscribe(
  //     result => this.getPosts(),
  //     error => alert('Error ' + error)
  //   );
  // }

}

export class PostDataSource extends DataSource<IPost> {

  // constructor(private posts: IPost[], private sort: MatSort) {
  //   super();
  // }
  _filterChange = new BehaviorSubject('');
  get filter(): string { return this._filterChange.value; }
  set filter(filter: string) { this._filterChange.next(filter); }
  dataChange: BehaviorSubject<Element[]> = new BehaviorSubject<Element[]>([]);
  constructor(private posts: IPost[], private _paginator: MatPaginator) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  // connect(): Observable<Element[]> {
  //   const displayDataChanges = [
  //     this._exampleDatabase.dataChange,
  //     this._filterChange,
  //     this._paginator.page,
  //   ];

  connect(): Observable<IPost[]> {
    const displayDataChanges = [
      // this._exampleDatabase.dataChange,
      this.dataChange,
      this._filterChange,
      this._paginator.page,
    ];
    // return Observable.of(this.posts);
    // return this.posts.slice().filter((item:IPost) => {
    //   let searchStr = (item.id + item.Invoice).toLowerCase();
    //   return searchStr.indexOf(this.filter.toLowerCase()) != -1;
    // })
    return Observable.merge(...displayDataChanges).map(() => {


            // Grab the page's slice of data.
            const startIndex = this._paginator.pageIndex * this._paginator.pageSize;

            return this.posts.slice().filter((item:IPost) => {

              let searchStr = (item.Invoice).toLowerCase();
              let searchStr2 = (item.PurchaseTime).toLowerCase();
              console.log(searchStr)
              return (searchStr+searchStr2).indexOf(this.filter.toLowerCase()) != -1;
            }).splice(startIndex, this._paginator.pageSize);

          });

  }

  disconnect(): void {
  }
}
