export const menuItems =
    [
        {
            "state": 'social', "name": "Social", "type": "routerLink", "icon": "computer"
        },
        {
            "state": "cashstatement", "name": "Cashstatement", "type": "routerLink", "icon": "assignment"
        },
        {
            "state": "cashregister", "name": "Cashregister", "type": "routerLink", "icon": "format_list_numbered"
        },
        {
            "state": "menu", "name": "Menu", "type": "routerLink", "icon": "airport_shuttle"
        },
        {
            "state": "bills", "name": "Bills", "type": "routerLink", "icon": "group"
        },
        {
            "state": "users", "name": "Users", "type": "routerLink", "icon": "person"
        },
        {
            "state": "", "name": "收银首页", "type": "routerLink", "icon": "computer"
        },
        {
            "state": "", "name": "全部账单", "type": "routerLink", "icon": "assignment"
        },
        {
            "state": "", "name": "员工时间表", "type": "sub", "icon": "timer", children: [
                {
                    "state": "", "name": "员工一览", "type": "routerLink", "icon": "timer"
                },
                {
                    "state": "", "name": "员工时间表", "type": "routerLink", "icon": "timer"
                },
                {
                    "state": "", "name": "员工时间记录", "type": "routerLink", "icon": "timer"
                }
            ]
        },
        {
            "state": "", "name": "经营报表", "type": "routerLink", "icon": "assessment"
        },
        {
            "state": "", "name": "菜品管理", "type": "routerLink", "icon": "format_list_numbered"
        },
        {
            "state": "", "name": "库存管理", "type": "routerLink", "icon": "airport_shuttle"
        },
        {
            "state": "", "name": "客户信息", "type": "routerLink", "icon": "group"
        },
        {
            "state": "", "name": "管理员权限", "type": "routerLink", "icon": "person"
        },
        {
            "state": "", "name": "登录", "type": "sub", "icon": "person", children: [
                {
                    "state": "", "name": "登录", "type": "routerLink", "icon": "person"
                },
                {
                    "state": "", "name": "注册", "type": "routerLink", "icon": "person"
                },
                {
                    "state": "", "name": "修改密码", "type": "routerLink", "icon": "person"
                }
            ]
        },
        // {
        //     "state": "http://www.baidu.com", "name": "baidu", "type": "link", "icon": "person",
        // },
        // {
        //     "state": "http://www.baidu.com", "name": "baidu", "type": "targetLink", "icon": "person",
        // }
    ]
