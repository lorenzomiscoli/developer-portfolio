import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ScrollDirective } from "../../directives/scroll-directive";
import { SidenavComponent } from "../sidenav/sidenav.component";
import { ThemeSwitcherComponent } from "../theme-switcher/theme-switcher.component";

export const HEADER_DEPS = [CommonModule, RouterModule, ScrollDirective, SidenavComponent, ThemeSwitcherComponent];
