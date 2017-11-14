import {Component, OnInit, ElementRef, ViewChild, Inject} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

const styles = {
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
};


@Component({
  selector: 'app-users-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class UserListComponent implements OnInit {

  animal: string;
  name: string;

  ngOnInit(): void {

  }

  constructor(private fb: FormBuilder, private router: Router, public dialog: MatDialog) { }

  displayedColumns = ['telOne', 'telTwo', 'sex', 'name', 'addr', 'zipCode', 'city', 'email', 'registerDate', 'modifyDate', 'purchaseHistory'];
  dataSource = new ExampleDataSource();

  saveUser() {
    let dialogRef = this.dialog.open(SaveUsersDialog, {
      width: '500px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}

export interface Element {
  id: number;
  telOne: string;
  telTwo: string;
  sex: string;
  name: string;
  addr: string;
  zipCode: string;
  city: string;
  email: string;
  registerDate: string;
  modifyDate: string;
  purchaseHistory: string;
}

const data: Element[] = [
  {id: 1, telOne: "qweqwe", telTwo: 'Hydrogen', sex: "男", name: 'H', addr: 'H', zipCode: 'H', city: 'H', email: 'H', registerDate: 'H', modifyDate: 'H', purchaseHistory: 'H'},
  {id: 2, telOne: "qweqwe", telTwo: 'Hydrogen', sex: "男", name: 'H', addr: 'H', zipCode: 'H', city: 'H', email: 'H', registerDate: 'H', modifyDate: 'H', purchaseHistory: 'H'},
  {id: 3, telOne: "qweqwe", telTwo: 'Hydrogen', sex: "男", name: 'H', addr: 'H', zipCode: 'H', city: 'H', email: 'H', registerDate: 'H', modifyDate: 'H', purchaseHistory: 'H'},
  {id: 4, telOne: "qweqwe", telTwo: 'Hydrogen', sex: "男", name: 'H', addr: 'H', zipCode: 'H', city: 'H', email: 'H', registerDate: 'H', modifyDate: 'H', purchaseHistory: 'H'},
  {id: 5, telOne: "qweqwe", telTwo: 'Hydrogen', sex: "男", name: 'H', addr: 'H', zipCode: 'H', city: 'H', email: 'H', registerDate: 'H', modifyDate: 'H', purchaseHistory: 'H'},
  {id: 6, telOne: "qweqwe", telTwo: 'Hydrogen', sex: "男", name: 'H', addr: 'H', zipCode: 'H', city: 'H', email: 'H', registerDate: 'H', modifyDate: 'H', purchaseHistory: 'H'},
  {id: 7, telOne: "qweqwe", telTwo: 'Hydrogen', sex: "男", name: 'H', addr: 'H', zipCode: 'H', city: 'H', email: 'H', registerDate: 'H', modifyDate: 'H', purchaseHistory: 'H'},
  {id: 8, telOne: "qweqwe", telTwo: 'Hydrogen', sex: "男", name: 'H', addr: 'H', zipCode: 'H', city: 'H', email: 'H', registerDate: 'H', modifyDate: 'H', purchaseHistory: 'H'},
  {id: 9, telOne: "qweqwe", telTwo: 'Hydrogen', sex: "男", name: 'H', addr: 'H', zipCode: 'H', city: 'H', email: 'H', registerDate: 'H', modifyDate: 'H', purchaseHistory: 'H'},
  {id: 10, telOne: "qweqwe", telTwo: 'Hydrogen', sex: "男", name: 'H', addr: 'H', zipCode: 'H', city: 'H', email: 'H', registerDate: 'H', modifyDate: 'H', purchaseHistory: 'H'},
  {id: 11, telOne: "qweqwe", telTwo: 'Hydrogen', sex: "男", name: 'H', addr: 'H', zipCode: 'H', city: 'H', email: 'H', registerDate: 'H', modifyDate: 'H', purchaseHistory: 'H'}
];

/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. In our case here,
 * we return a stream that contains only one set of data that doesn't change.
 */
export class ExampleDataSource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Element[]> {
    return Observable.of(data);
  }

  disconnect() {}
}



@Component({
  selector: 'app-users-save',
  templateUrl: './save.dialog.html',
})

export class SaveUsersDialog implements OnInit{

  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<SaveUsersDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit() {
      this.form = this.fb.group ( {
        telOne: [null , Validators.compose ( [ Validators.required ] )],
        telTwo: [null , Validators.compose ( [ Validators.required ] )],
        sex: [null],
        name: [null , Validators.compose ( [ Validators.required ] )],
        addr: [null],
        zipCode: [null , Validators.compose ( [ Validators.required ] )],
        city: [null , Validators.compose ( [ Validators.required ] )],
        email: [null],
        password1: [null],
        password2: [null],
        donghao: [null],
        louhao: [null]
      } );
    }

  matDialogClose() {
    console.log("matDialogClose");
    this.dialogRef.close(true);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
