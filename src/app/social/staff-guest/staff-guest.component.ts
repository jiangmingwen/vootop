import { Component, OnInit } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-staff-guest',
  templateUrl: './staff-guest.component.html',
  styleUrls: ['./staff-guest.component.scss']
})
export class StaffGuestComponent implements OnInit {

  displayedColumns = ['id', 'name', 'time', 'content'];
  dataSource = new GuestDataSource();

  constructor() { }

  ngOnInit() {
  }

}
export interface Guest {
  id: number;
  name: string;
  time: string;
  content: string;
}

const data: Guest[] = [
  {id: 1, name: 'H', time: '2017-10-31', content: 'H'},
  {id: 2, name: 'Ca', time: '2017-10-31', content: 'Ca'}
];
export class GuestDataSource extends DataSource<any> {
  connect(): Observable<Guest[]> {
    return Observable.of(data);
  }

  disconnect() {}
}
