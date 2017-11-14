import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DBOperation } from '../../shared/DbOpration';
import { MatDialog } from '@angular/material';
import { Global } from '../../shared/Global';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { Category } from '../domain/category';
import { ManageCategoryComponent } from './manage-category.component';
import { VootopHttpService } from '../../shared/vootop-http.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  displayedColumns = ['categoryName', 'addTime', 'actionsColumn'];
  private readonly domain = 'categorys';
  dataSource: CategoryDataSource | null;
  category: Category;
  categorys: any;
  dbops: DBOperation;
  modalTitle: string;
  modalBtnTitle: string;

  constructor(
    private dialog: MatDialog,
    private changeDetectorRefs: ChangeDetectorRef,
    private http: VootopHttpService
  ) { }

  openDialog() {
    const dialogRef = this.dialog.open(ManageCategoryComponent);
    dialogRef.componentInstance.dbops = this.dbops;
    dialogRef.componentInstance.modalTitle = this.modalTitle;
    dialogRef.componentInstance.modalBtnTitle = this.modalBtnTitle;
    dialogRef.componentInstance.category = this.category;
    dialogRef.afterClosed().subscribe(result => {
      this.refresh();
    });
  }
  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    this.http.setHttp(this.domain, 'GET').subscribe(res => {
      this.categorys = res;
      this.dataSource = new CategoryDataSource(this.categorys);
      this.changeDetectorRefs.detectChanges();
    })
  }
  addCategory() {
    this.dbops = DBOperation.create;
    this.modalTitle = '添加分类';
    this.modalBtnTitle = '添加';
    this.openDialog();
  }
  editCategory(id: string) {
    this.dbops = DBOperation.update;
    this.modalTitle = '编辑分类';
    this.modalBtnTitle = '更新';
    this.category = this.categorys.filter(x => x.id === id)[0];
    this.openDialog();
  }
  deleteCategory(id: string) {
    this.dbops = DBOperation.delete;
    this.modalTitle = 'Confirm to Delete?';
    this.modalBtnTitle = '删除';
    this.category = this.categorys.filter(x => x.id === id)[0];
    this.openDialog();
  }
}

export class CategoryDataSource extends DataSource<any> {
  constructor(private data) {
    super();
  }
  connect(): Observable<any> {
    return Observable.of(this.data);
  }
  disconnect() { }
}

