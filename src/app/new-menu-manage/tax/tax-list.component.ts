import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/collections';
import { DBOperation } from '../../shared/DbOpration';
import { Tax } from '../domain/Tax';
import { MatDialog } from '@angular/material';
import { ManageTaxComponent } from './manage-tax.component';
import { Global } from '../../shared/Global';
import { VootopHttpService } from '../../shared/vootop-http.service';

@Component({
  selector: 'app-tax-list',
  templateUrl: './tax-list.component.html',
  styleUrls: ['./tax-list.component.scss']
})
export class TaxListComponent implements OnInit {
  displayedColumns = ['name', 'taxRatio', 'actionsColumn'];
  private readonly domain = 'taxs';
  dataSource: TaxDataSource | null;
  tax: Tax;
  taxs: any;
  dbops: DBOperation;
  modalTitle: string;
  modalBtnTitle: string;
  constructor(
    private http: VootopHttpService,
    private dialog: MatDialog, private changeDetectorRefs: ChangeDetectorRef) { }
  openDialog() {
    const dialogRef = this.dialog.open(ManageTaxComponent);
    dialogRef.componentInstance.dbops = this.dbops;
    dialogRef.componentInstance.modalTitle = this.modalTitle;
    dialogRef.componentInstance.modalBtnTitle = this.modalBtnTitle;
    dialogRef.componentInstance.tax = this.tax;
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
      this.taxs = res;
      this.dataSource = new TaxDataSource(this.taxs);
      this.changeDetectorRefs.detectChanges();
    })
  }
  addTax() {
    this.dbops = DBOperation.create;
    this.modalTitle = '添加税率';
    this.modalBtnTitle = '添加';
    this.openDialog();
  }
  editTax(id: string) {
    this.dbops = DBOperation.update;
    this.modalTitle = '编辑税率';
    this.modalBtnTitle = '更新';
    this.tax = this.taxs.filter(x => x.id === id)[0];
    this.openDialog();
  }
  deleteTax(id: string) {
    this.dbops = DBOperation.delete;
    this.modalTitle = 'Confirm to Delete?';
    this.modalBtnTitle = '删除';
    this.tax = this.taxs.filter(x => x.id === id)[0];
    this.openDialog();
  }
}

export class TaxDataSource extends DataSource<any> {
  constructor(private data) {
    super();
  }
  connect(): Observable<any> {
    return Observable.of(this.data);
  }
  disconnect() { }
}
