import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavItem, navItems, sidenavAnimations } from '../../constants/header-nav';
import { HEADER_DEPS } from './header.dependencies';
import { ThemeService } from '../../services/theme.service';
import { Mode } from '../theme-switcher/theme-options';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [HEADER_DEPS],
  animations: [sidenavAnimations],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public navItems: NavItem[] = navItems;
  public sidenavState: string = 'out';
  public logoName!: string;
  private subscription!: Subscription;

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.subscription = this.themeService.currentValue.subscribe(value => {
      if (this.themeService.checkTheme(value) === Mode.LIGHT) {
        this.logoName = 'logo';
      } else {
        this.logoName = 'logo-white';
      }
    })
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  public openSidenav() {
    this.sidenavState = 'in';
  }

  public closeSidenav() {
    this.sidenavState = 'out';
  }
}
