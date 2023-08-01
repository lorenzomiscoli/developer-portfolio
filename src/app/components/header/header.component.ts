import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';
import {
  NavItem,
  navItems,
  sidenavAnimations,
} from 'src/app/constants/header-nav';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule, SidenavComponent, RouterModule],
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
