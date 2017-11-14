import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Menu } from '../domain/menu';
import { DBOperation } from '../../shared/DbOpration';
import { MatDialog } from '@angular/material';
import { ManageMenuComponent } from './manage-menu.component';
import { Global } from '../../shared/Global';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { VootopHttpService } from '../../shared/vootop-http.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  displayedColumns = ['name', 'desc', 'unitPrice', 'taxRatio', 'noTaxPrice', 'onSelfDate', 'categoryName', 'subCategoryName', 'actionsColumn'];


  private readonly domain = 'menus';
  dataSource: MenuDataSource | null;
  menu: Menu;
  menus: any;
  dbops: DBOperation;
  modalTitle: string;
  modalBtnTitle: string;
  listFilter: string;

  constructor(
    private http: VootopHttpService,
    private dialog: MatDialog,
    private changeDetectorRefs: ChangeDetectorRef) { }

  openDialog() {
    const dialogRef = this.dialog.open(ManageMenuComponent);
    dialogRef.componentInstance.dbops = this.dbops;
    dialogRef.componentInstance.modalTitle = this.modalTitle;
    dialogRef.componentInstance.modalBtnTitle = this.modalBtnTitle;
    dialogRef.componentInstance.menu = this.menu;
    dialogRef.afterClosed().subscribe(result => {
      this.refresh();
    });
  }
  ngOnInit(): void {
    this.refresh();

  }
  refresh(): void {
    this.http.setHttp(this.domain, 'GET').subscribe(res => {
      this.menus = res;
      this.dataSource = new MenuDataSource(this.menus);
      this.changeDetectorRefs.detectChanges();
    })
  }
  addMenu() {
    this.dbops = DBOperation.create;
    this.modalTitle = '添加菜单';
    this.modalBtnTitle = 'Add';
    this.openDialog();
  }
  editMenu(id: string) {
    this.dbops = DBOperation.update;
    this.modalTitle = '编辑菜单';
    this.modalBtnTitle = 'Update';
    this.menu = this.menus.filter(x => x.id === id)[0];
    this.openDialog();
  }
  deleteMenu(id: string) {
    this.dbops = DBOperation.delete;
    this.modalTitle = 'Confirm to Delete?';
    this.modalBtnTitle = 'Delete';
    this.menu = this.menus.filter(x => x.id === id)[0];
    this.openDialog();
  }
}


export class MenuDataSource extends DataSource<any> {
  constructor(private data) {
    super();
  }
  connect(): Observable<any> {
    return Observable.of(this.data);
  }
  disconnect() { }
}
