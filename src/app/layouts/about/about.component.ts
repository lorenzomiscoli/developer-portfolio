import { Component } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";
import { FadeDirective } from "../../directives/fade.directive";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
  standalone: true,
  imports: [NgOptimizedImage, FadeDirective]
})
export class AboutComponent {
  // Set the start date
  startDate: Date = new Date('2019-07-01');

  // Calculate years of experience
  yearsOfExperience: number = new Date().getFullYear() - this.startDate.getFullYear();
}
