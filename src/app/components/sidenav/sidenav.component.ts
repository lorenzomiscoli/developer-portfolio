import { CommonModule } from '@angular/common';
import { NavItem, navItems } from '../../constants/header-nav';
import { Component, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class SidenavComponent {
  @Output() public onClose = new EventEmitter<void>();

  public sidenavItems: NavItem[] = navItems;

  public close(): void {
    this.onClose.emit();
  }
}
