import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NavItem} from '../navitem.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-item',
  templateUrl: './navitem.component.html',
  styleUrls: ['./navitem.component.scss']
})
export class NavItemComponent implements OnInit {

  @Input() navItem: NavItem;
  @Output() selected = new EventEmitter<number>();

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  goTo(path: string) {
    if (path !== '-') {
      this.router.navigateByUrl(`/${path}`);
    } else {
      this.selected.emit(this.navItem.id);
    }
  }
}
