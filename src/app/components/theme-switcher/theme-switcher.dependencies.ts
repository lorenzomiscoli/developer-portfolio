import { NgClass, NgFor, NgIf, TitleCasePipe } from "@angular/common";

import { ClickOutsideDirective } from "src/app/directives/click-outside.directive";

export const THEME_SWITCHER_DEPS = [NgIf, NgFor, NgClass, TitleCasePipe, ClickOutsideDirective];
