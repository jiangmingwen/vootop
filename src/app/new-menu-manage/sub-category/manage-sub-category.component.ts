import { Component, OnInit } from '@angular/core';
import { DBOperation } from '../../shared/DbOpration';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatDialogRef } from '@angular/material';

import { Global } from '../../shared/Global';
import { Category } from '../domain/category';
import { SubCategory } from '../domain/sub-category';
import { VootopHttpService } from '../../shared/vootop-http.service';

@Component({
  selector: 'app-manage-sub-category',
  templateUrl: './manage-sub-category.component.html',
  styleUrls: ['./manage-sub-category.component.scss']
})
export class ManageSubCategoryComponent implements OnInit {

  private readonly domain = 'subCategorys';

  categorys: Category[];
  pName: string;
  pId: string;
  form: FormGroup;
  dbops: DBOperation;
  modalTitle: string;
  modalBtnTitle: string;

  subSubCategory: SubCategory;


  constructor(
    private fb: FormBuilder,
    private http: VootopHttpService,
    private dialogRef: MatDialogRef<ManageSubCategoryComponent>) { }
  ngOnInit(): void {
    this.form = this.fb.group({
      id: [''],
      categoryName: ['', Validators.compose([Validators.required, Validators.maxLength(20)])],
      pId: [''],
      pName: [],
      addTime: []
    });
    const url = `${Global.APIServeAddress}/categorys`;
    this.http.setHttp('categorys', 'GET').subscribe(res => {
      this.categorys = res;
    })

    if (this.dbops === DBOperation.create) {
      this.form.reset();
    }
    else {
      this.pId = this.subSubCategory.pId;
      this.form.setValue(this.subSubCategory);
    }
  }
  getSelectPName() {
    this.pName = this.categorys.filter(x => x.id === this.pId)[0].categoryName;
  }

  onSubmit(formData: any) {
    const url = `${Global.APIServeAddress}/${this.domain}`;
    switch (this.dbops) {
      case DBOperation.create:
        formData.value.addTime = new Date();
        // formData.value.subSubCategory = this.subSubCategory;
        formData.value.pName = this.pName;
        this.http.setHttp(this.domain, 'POST', formData.value)
        this.dialogRef.close();
        break;
      case DBOperation.update:
        formData.value.pName = this.pName;
        // formData.value.subSubCategory = this.subSubCategory;
        this.http.setHttp(this.domain + '/' + formData.value.id, 'PUT', formData.value).subscribe(res => { })
        this.dialogRef.close();
        break;
      case DBOperation.delete:
        formData.value.subSubCategory = this.subSubCategory;
        this.http.setHttp(this.domain + '/' + formData.value.id, 'DELETE', formData.value).subscribe(res => {
        });
        this.dialogRef.close();
        break;
    }
  }


}
