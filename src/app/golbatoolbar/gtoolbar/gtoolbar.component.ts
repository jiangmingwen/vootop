import { Component, OnInit, Input } from '@angular/core';
import {NavItems} from '../../shared/config/nav';

@Component({
  selector: 'app-gtoolbar',
  templateUrl: './gtoolbar.component.html',
  styleUrls: ['./gtoolbar.component.scss'],
  providers: [NavItems]
})
export class GtoolbarComponent implements OnInit {
  // 右下角设置是否显示属性
  menuShow;
  languages = [
    'ch', 'en', '中文', 'es', 'de'
  ];
  roles = [{
      id : 1,
      name : '普通管理员'
    }, {
      id : 2,
      name : '超级管理员'
  }];
  selectedLanguage: string;
  selectedRole: any;

  constructor(public navItems: NavItems) {
  }

  @Input('aria-label')
  ariaLabel;

  navSelect(id) {
    this.navItems.getAll().forEach(item => {
      item.open = item.id === id;
    });
  }

  ngOnInit() {
    this.menuShow = false;
    this.selectedLanguage = 'ch';
    this.selectedRole = 1;
  }
  // 右下角设置打开
  open() {
    this.menuShow = true;
  }
  // 右下角设置关闭
  close() {
    this.menuShow = false;
  }



}
