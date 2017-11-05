import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.scss']
})
export class StaffListComponent implements OnInit {
  staffList;
  constructor() { }

  ngOnInit() {
    this.staffList = StaffList;
  }

}
export interface Staff {
  id: number;
  name: string;
  img: string;
  words: string;
}

const StaffList: Staff[] = [
  {id: 1, name: 'H', words: 'One person\'s craziness is another\'s reality.', img: 'assets/images/social/face1.jpg'},
  {id: 2, name: 'Ca', words: 'We all live every day in virtual environments, defined by our ideas.', img: 'assets/images/social/face2.jpg'}
];

