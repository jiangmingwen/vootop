import { Component, OnInit } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.scss']
})
export class MyListComponent implements OnInit {
  displayedColumns = ['id', 'sum', 'time', 'name'];
  dataSource = new ExampleDataSource();
  constructor() { }

  ngOnInit() {
  }

}
export interface Element {
  id: number;
  sum: number;
  time: string;
  name: string;
}

const data: Element[] = [
  {id: 1, sum: 50.00, time: '2017-10-31', name: 'H'},
  {id: 2, sum: 40.78, time: '2017-10-31', name: 'Ca'}
];
export class ExampleDataSource extends DataSource<any> {
  connect(): Observable<Element[]> {
    return Observable.of(data);
  }

  disconnect() {}
}

