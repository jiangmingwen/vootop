import { Component, OnInit, OnDestroy, ViewChild, HostListener, AfterViewInit, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import PerfectScrollBar from 'perfect-scrollbar';
import { menuItems } from './menu.config';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class AppMenuComponent implements OnInit, OnDestroy, AfterViewInit {
  showSettings = false;
  dark: boolean;
  boxed: boolean;
  collapseSidebar: boolean;
  compactSidebar: boolean;
  currentLang = 'en';
  currentIndex: number = -1;
  menuItems: any[] = menuItems;
  psS: any;
  psC: any;
  languages: string[] = [
    'ch', 'en', '中文', 'es', 'de'
  ];
  roles: any[] = [{
    id: 1,
    name: '普通管理员'
  }, {
    id: 2,
    name: '超级管理员'
  }];
  selectedLanguage: string = 'ch';
  today: any;

  @ViewChild('sidemenu') sidemenu;
  @ViewChild('root') root;
  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.root.dir = 'ltr';
    this.runOnRouteChange();

  }

  ngOnDestroy(): void {
  }

  runOnRouteChange(): void {
    if (this.isOver()) {
      this.sidemenu.close();
    }
    new PerfectScrollBar('#sidebar-panel', {
      wheelSpeed: 2,
      wheelPropagation: true,
      minScrollbarLength: 20
    })
  }

  listItemClick(item: any, index: number): void {
    if (item.children && item.children.length > 0) {
      if (this.currentIndex === index) {
        this.currentIndex = -1;
      } else {
        this.currentIndex = index;
      }
    } else {
      this.currentIndex = -1;
    }
  }

  isOver(): boolean {
    return window.matchMedia(`(max-width: 960px)`).matches;
  }

  isMac(): boolean {
    let bool = false;
    if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
      bool = true;
    }
    return bool;
  }

  menuMouseOver(): void {
    if (window.matchMedia(`(min-width: 960px)`).matches && this.collapseSidebar) {
      this.sidemenu.mode = 'over';
    }
  }

  menuMouseOut(): void {
    if (window.matchMedia(`(min-width: 960px)`).matches && this.collapseSidebar) {
      this.sidemenu.mode = 'side';
    }
  }
}
