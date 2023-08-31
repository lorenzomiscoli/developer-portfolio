import { Component } from "@angular/core";
import { FadeDirective } from "../../directives/fade.directive";

@Component({
  selector: "app-portfolio",
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.scss"],
  standalone: true,
  imports: [FadeDirective]
})
export class PortfolioComponent {

}
