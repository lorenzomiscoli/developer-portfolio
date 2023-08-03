import { CommonModule } from "@angular/common";
import { SidenavComponent } from "../sidenav/sidenav.component";
import { RouterModule } from "@angular/router";

export const HEADER_DEPS = [CommonModule, SidenavComponent, RouterModule];
