import { CommonModule } from "@angular/common";
import { SidenavComponent } from "../sidenav/sidenav.component";
import { RouterModule } from "@angular/router";
import { ScrollDirective } from "src/app/directives/scroll-directive";

export const HEADER_DEPS = [CommonModule, SidenavComponent, RouterModule, ScrollDirective];
