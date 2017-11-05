import { Injectable } from '@angular/core';

export interface ChildrenItems {
  path: string;
  name: string;
}

export interface Nav {
  id: number;
  name: string;
  icon: string;
  open: boolean;
  path: string;
  children?: ChildrenItems[];
}

const NAV = [
  {
    id: 1,
    name: '收银首页',
    icon: 'computer',
    open: true,
    path: ''
  }, {
    id: 2,
    name: '全部账单',
    icon: 'assignment',
    open: false,
    path: '-'
  }, {
    id: 3,
    name: '员工时间表',
    icon: 'timer',
    open: false,
    path: '-',
    children: [{
      name: '员工一览',
      path: 'staff'
    }, {
      name: '员工时间表',
      path: 'staff/timer'
    }, {
      name: '员工时间记录',
      path: 'staff/timer-record'
    }]
  }, {
    id: 4,
    name: '经营报表',
    icon: 'assessment',
    open: false,
    path: '-'
  }, {
    id: 5,
    name: '菜品管理',
    icon: 'format_list_numbered',
    open: false,
    path: '-'
  }, {
    id: 6,
    name: '库存管理',
    icon: 'airport_shuttle',
    open: false,
    path: '-'
  }, {
    id: 7,
    name: '客户信息',
    icon: 'group',
    open: false,
    path: '-'
  }, {
      id: 8,
      name: '管理员权限',
      icon: 'person',
      open: false,
      path: '-'
    }, {
      id: 9,
      name: '登录',
      icon: 'person',
      open: false,
      path: '-',
      children: [{
        name: '登录',
        path: 'user/login'
      }, {
        name: '注册',
        path: 'user/register'
      }, {
        name: '修改密码',
        path: 'user/recover/pwd'
      }]
    }
];

@Injectable()
export class NavItems {
  getAll(): Nav[] {
    return NAV;
  }
}
