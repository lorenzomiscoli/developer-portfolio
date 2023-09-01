import { Component } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";
import { FadeDirective } from "../../directives/fade.directive";

@Component({
  selector: "app-portfolio",
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.scss"],
  standalone: true,
  imports: [NgOptimizedImage, FadeDirective]
})
export class PortfolioComponent {

}
