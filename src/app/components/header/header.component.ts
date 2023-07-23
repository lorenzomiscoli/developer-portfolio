import { Component, ElementRef, ViewChild } from "@angular/core";
import { ClickOutsideDirective } from "src/app/directives/click-outside.directive";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  standalone: true,
  imports: [ClickOutsideDirective]
})
export class HeaderComponent {
  @ViewChild("sidenav") sidenav!: ElementRef;

  public openSidenav(): void {
    this.sidenav.nativeElement.classList.add("show");
  }

  public closeSidenav(): void {
    this.sidenav.nativeElement.classList.remove("show");
  }

}
