import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DBOperation } from '../../shared/DbOpration';
import { Tax } from '../domain/Tax';
import { MatDialogRef } from '@angular/material';
import { Global } from "../../shared/Global";
import { VootopHttpService } from '../../shared/vootop-http.service';

@Component({
  selector: 'app-manage-tax',
  templateUrl: './manage-tax.component.html',
  styleUrls: ['./manage-tax.component.scss']
})
export class ManageTaxComponent implements OnInit {
  private readonly domain = 'taxs';
  form: FormGroup;
  dbops: DBOperation;
  modalTitle: string;
  modalBtnTitle: string;
  tax: Tax;
  constructor(private fb: FormBuilder,
    private http: VootopHttpService,
    private dialogRef: MatDialogRef<ManageTaxComponent>) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [''],
      name: ['', Validators.compose([Validators.required, Validators.maxLength(20)])],
      taxRatio: [0]
    });
    if (this.dbops === DBOperation.create) {
      this.form.reset();
    }
    else {
      this.form.setValue(this.tax);
    }
  }

  onSubmit(formData: any) {
    const url = `${Global.APIServeAddress}/${this.domain}`;
    switch (this.dbops) {
      case DBOperation.create:
        this.http.setHttp(this.domain, 'POST', formData.value);
        this.dialogRef.close();
        break;
      case DBOperation.update:
        this.http.setHttp(this.domain + '/' + formData.value.id, 'PUT', formData.value);
        this.dialogRef.close();
        break;
      case DBOperation.delete:
        this.http.setHttp(this.domain + '/' + formData.value.id, 'DELETE');
        this.dialogRef.close();
        break;
    }
  }
}
