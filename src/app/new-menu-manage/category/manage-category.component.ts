import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { MatDialogRef } from '@angular/material';
import { DBOperation } from '../../shared/DbOpration';

import { Global } from '../../shared/Global';
import { Category } from '../domain/category';
import { VootopHttpService } from '../../shared/vootop-http.service';



@Component({
  selector: 'app-manage-category',
  templateUrl: './manage-category.component.html',
  styleUrls: ['./manage-category.component.scss']
})
export class ManageCategoryComponent implements OnInit {
  private readonly domain = 'categorys';
  form: FormGroup;
  dbops: DBOperation;
  modalTitle: string;
  modalBtnTitle: string;
  category: Category;
  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<ManageCategoryComponent>,
    private http: VootopHttpService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [''],
      categoryName: ['', Validators.compose([Validators.required, Validators.maxLength(20)])],
      addTime: []
    });

    if (this.dbops === DBOperation.create) {
      this.form.reset();
    } else {
      this.form.setValue(this.category);
    }
  }

  onSubmit(formData: any) {
    const url = `${Global.APIServeAddress}/${this.domain}`;
    switch (this.dbops) {
      case DBOperation.create:
        this.http.setHttp(this.domain, 'POST', formData.value).subscribe(res => {
          if (res === 1) {
            this.dialogRef.close('success');
          } else {
            this.dialogRef.close('error');
          }
        })
        break;
      case DBOperation.update:
        this.http.setHttp(this.domain + '/' + formData.value.id, 'PUT', formData.value).subscribe(
          data => {
            if (data === 1) {
              this.dialogRef.close('success');
            } else {
              this.dialogRef.close('error');
            }
          },
          error => {
            this.dialogRef.close('error');
          }
        );
        break;
      case DBOperation.delete:
        this.http.setHttp(this.domain + '/' + formData.value.id, 'DELETE').subscribe(
          data => {
            if (data === 1) {
              this.dialogRef.close('success');
            } else {
              this.dialogRef.close('error');
            }
          },
          error => {
            this.dialogRef.close('error');
          }
        );
        break;
    }
  }
}
