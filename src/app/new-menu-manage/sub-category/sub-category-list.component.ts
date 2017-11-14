import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/collections';
import { DBOperation } from '../../shared/DbOpration';
import { Global } from '../../shared/Global';

import { MatDialog } from '@angular/material';
import { SubCategory } from '../domain/sub-category';
import { ManageSubCategoryComponent } from './manage-sub-category.component';
import { VootopHttpService } from '../../shared/vootop-http.service';

@Component({
  selector: 'app-sub-category-list',
  templateUrl: './sub-category-list.component.html',
  styleUrls: ['./sub-category-list.component.scss']
})
export class SubCategoryListComponent implements OnInit {
  displayedColumns = ['categoryName', 'addTime', 'pName', 'actionsColumn'];
  private readonly domain = 'subCategorys';
  dataSource: SubCategoryDataSource | null;
  subCategory: SubCategory;
  subCategorys: any;
  dbops: DBOperation;
  modalTitle: string;
  modalBtnTitle: string;
  constructor(
    private http: VootopHttpService,
    private dialog: MatDialog,
    private changeDetectorRefs: ChangeDetectorRef) { }
  openDialog() {
    const dialogRef = this.dialog.open(ManageSubCategoryComponent);
    dialogRef.componentInstance.dbops = this.dbops;
    dialogRef.componentInstance.modalTitle = this.modalTitle;
    dialogRef.componentInstance.modalBtnTitle = this.modalBtnTitle;
    dialogRef.componentInstance.subSubCategory = this.subCategory;
    dialogRef.afterClosed().subscribe(result => {
      this.refresh();
    });
  }
  ngOnInit(): void {
    this.refresh();
  }
  refresh(): void {
    const url = `${Global.APIServeAddress}/${this.domain}`;
    this.http.setHttp(this.domain, 'GET').subscribe(res => {
      this.subCategorys = res;
      this.dataSource = new SubCategoryDataSource(this.subCategorys);
      this.changeDetectorRefs.detectChanges();
    })
  }
  addSubCategory() {
    this.dbops = DBOperation.create;
    this.modalTitle = '添加分类';
    this.modalBtnTitle = '添加';
    this.openDialog();
  }
  editSubCategory(id: string) {
    this.dbops = DBOperation.update;
    this.modalTitle = '编辑分类';
    this.modalBtnTitle = '更新';
    this.subCategory = this.subCategorys.filter(x => x.id === id)[0];
    this.openDialog();
  }
  deleteSubCategory(id: string) {
    this.dbops = DBOperation.delete;
    this.modalTitle = 'Confirm to Delete?';
    this.modalBtnTitle = '删除';
    this.subCategory = this.subCategorys.filter(x => x.id === id)[0];
    this.openDialog();
  }
}
export class SubCategoryDataSource extends DataSource<any> {
  constructor(private data) {
    super();
  }
  connect(): Observable<any> {
    return Observable.of(this.data);
  }
  disconnect() { }
}


