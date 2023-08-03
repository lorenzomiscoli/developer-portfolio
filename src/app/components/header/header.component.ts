import { Component } from '@angular/core';
import {
  NavItem,
  navItems,
  sidenavAnimations,
} from 'src/app/constants/header-nav';
import { HEADER_DEPS } from './header.dependencies';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [HEADER_DEPS],
  animations: [sidenavAnimations],
})
export class HeaderComponent {
  public navItems: NavItem[] = navItems;
  public sidenavState: string = 'out';

  public openSidenav() {
    this.sidenavState = 'in';
  }

  public closeSidenav() {
    this.sidenavState = 'out';
  }
}
