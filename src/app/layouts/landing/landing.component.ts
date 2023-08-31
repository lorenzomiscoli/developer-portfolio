import { NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";
import { FadeDirective } from "../../directives/fade.directive";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.scss"],
  standalone: true,
  imports: [NgOptimizedImage, FadeDirective]
})
export class LandingComponent {

}
