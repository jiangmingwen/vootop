import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss']
})
export class TabGroupComponent implements OnInit {

  menuTypes = [
    {
      id: 1,
      name: '菜品'
    },
    {
      id: 2,
      name: '甜品'
    },
    {
      id: 3,
      name: '酒水'
    }
  ];
  menu = {
    // type: 1,category
    1 : [
      {
        id: 1,
        name: '西红柿炒鸡蛋',
        price: 3.00,
        img: '../../assets/images/food/food1.jpg'
      }, {
        id: 2,
        name: '鱼香肉丝',
        price: 3.00,
        img: '../../assets/images/food/food2.jpg'
      }, {
        id: 3,
        name: '麻婆豆腐',
        price: 3.00,
        img: '../../assets/images/food/food3.jpg'
      }, {
        id: 4,
        name: '回锅肉',
        price: 3.00,
        img: '../../assets/images/food/food4.jpg'
      }, {
        id: 5,
        name: '夫妻肺片',
        price: 3.00,
        img: '../../assets/images/food/food5.jpg'
      }
    ]
  };
  currentMenu;
  constructor() { 
    this.currentMenu = this.menu[this.menuTypes[0].id];
  }

  ngOnInit() {
  }

  getCurrentMenu(e) {
    let index = e.index;
    if (index === undefined) {
      index = 0;
    }
    this.currentMenu = this.menu[this.menuTypes[index].id];
    console.log(this.menuTypes[index].id);
    console.log(this.currentMenu);
  }

}
