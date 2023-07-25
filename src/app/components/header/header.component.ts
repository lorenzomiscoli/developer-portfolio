import { ClickOutsideDirective } from 'src/app/directives/click-outside.directive';
import { CommonModule } from '@angular/common';
import { Component } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  standalone: true,
  imports: [CommonModule]
})
export class HeaderComponent {
  public isSidenavVisible = false;
  public isSidenavHiding = false;

  public open(): void {
    this.isSidenavVisible = true;
  }

  public close(): void {
    this.isSidenavHiding = true;
    setTimeout(() => {
      this.isSidenavVisible = false;
      this.isSidenavHiding = false;
    }, 500);
  }

}
