import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DBOperation } from '../../shared/DbOpration';
import { Menu } from '../domain/menu';
import { MatDialogRef } from '@angular/material';
import { Global } from '../../shared/Global';
import { Tax } from '../domain/Tax';
import { Category } from '../domain/category';

import { SubCategory } from '../domain/sub-category';
import { VootopHttpService } from '../../shared/vootop-http.service';


@Component({
  selector: 'app-manage-menu',
  templateUrl: './manage-menu.component.html',
  styleUrls: ['./manage-menu.component.scss']
})
export class ManageMenuComponent implements OnInit {
  private readonly domain = 'menus';
  form: FormGroup;
  dbops: DBOperation;
  modalTitle: string;
  modalBtnTitle: string;
  taxs: Tax[];
  categorys: Category[];
  categoryId: string;
  categoryName: string;
  subCategoryId: string;
  subCategoryName: string;
  subCategorys: SubCategory[];
  taxRatio: number;
  menu: Menu;
  constructor(private fb: FormBuilder, 
    private dialogRef: MatDialogRef<ManageMenuComponent>,
    private http: VootopHttpService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [''],
      name: ['', Validators.compose([Validators.required, Validators.maxLength(20)])],
      desc: [],
      unitPrice: [0, Validators.compose([Validators.required])],
      taxRatio: [0, Validators.compose([Validators.required])],
      noTaxPrice: [0],
      onSelfDate: [new Date(), Validators.compose([Validators.required])],
      categoryId: ['', Validators.compose([Validators.required])],
      categoryName: [],
      subCategoryId: ['', Validators.compose([Validators.required])],
      subCategoryName: []
    });

    this.http.setHttp('taxs', 'GET').subscribe(res => {
      this.taxs = res;
    });
    this.http.setHttp('categorys', 'GET').subscribe(res => {
      this.categorys = res;
    });
    this.http.setHttp('subCategorys', 'GET').subscribe(res => {
      this.subCategorys = res;
    });
    if (this.dbops === DBOperation.create) {
      this.form.reset();
    }
    else {
      this.taxRatio = this.menu.taxRatio;
      this.categoryName = this.menu.categoryName;
      this.subCategoryName = this.menu.subCategoryName;
      this.categoryId = this.menu.categoryId;
      this.subCategoryId = this.menu.subCategoryId;
      this.form.setValue(this.menu);
    }
  }
  setCategoryName() {
    this.categoryName = this.categorys.filter(x => x.id === this.categoryId)[0].categoryName;
    this.http.setHttp('subCategorys', 'GET').subscribe(res => {
      this.subCategorys = res.filter(x => x.pId === this.categoryId);
    })
  }

  setSubName() {
    this.subCategoryName = this.subCategorys.filter(x => x.id === this.subCategoryId)[0].categoryName;
  }

  onSubmit(formData: any) {
    let url = this.domain + '/' + formData.value.id;
    switch (this.dbops) {
      case DBOperation.create:
        formData.value.noTaxPrice = formData.value.unitPrice - formData.value.taxRatio * formData.value.unitPrice / 100;
        formData.value.categoryName = this.categoryName;
        formData.value.subCategoryName = this.subCategoryName;
        formData.value.categoryId = this.categoryId;
        formData.value.subCategoryId = this.subCategoryId;
        this.http.setHttp(this.domain, 'POST', formData.value).subscribe(res => {
          if (res === 1) {
            this.dialogRef.close('success');
          }
          else {
            this.dialogRef.close('error');
          }
        })
        break;
      case DBOperation.update:
        formData.value.noTaxPrice = formData.value.unitPrice - formData.value.taxRatio * formData.value.unitPrice / 100;
        formData.value.categoryName = this.categoryName;
        formData.value.subCategoryName = this.subCategoryName;
        formData.value.categoryId = this.categoryId;
        formData.value.subCategoryId = this.subCategoryId;
        this.http.setHttp(url, 'PUT', formData.value).subscribe(res => {
          if (res === 1) {
            this.dialogRef.close('success');
          }
          else {
            this.dialogRef.close('error');
          }
        })
        break;
      case DBOperation.delete:
        this.http.setHttp(url, 'DELETE').subscribe(res => {
          if (res === 1) {
            this.dialogRef.close('success');
          }
          else {
            this.dialogRef.close('error');
          }
        })
        break;
    }
  }
}