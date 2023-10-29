import { Component, Output, EventEmitter } from '@angular/core';
import { NavItem, navItems } from '../../constants/header-nav';
import { SIDENAV_DEPS } from './sidenav.dependencies';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  standalone: true,
  imports: [SIDENAV_DEPS],
})
export class SidenavComponent {
  @Output() public onClose = new EventEmitter<void>();

  public sidenavItems: NavItem[] = navItems;

  public close(): void {
    this.onClose.emit();
  }
}
