import { NgFor } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ThemeSwitcherComponent } from "../theme-switcher/theme-switcher.component";

export const SIDENAV_DEPS = [NgFor, RouterModule, ThemeSwitcherComponent];
