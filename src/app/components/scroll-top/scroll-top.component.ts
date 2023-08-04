import { Component } from "@angular/core";
import { SCROLL_TOP_DEPS } from "./scroll-top.dependencies";

@Component({
  selector: "app-scroll-top",
  templateUrl: "./scroll-top.component.html",
  styleUrls: ["./scroll-top.component.scss"],
  standalone: true,
  imports: [SCROLL_TOP_DEPS]
})
export class ScrollTopComponent {

  public scrollToTop(): void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }

}
