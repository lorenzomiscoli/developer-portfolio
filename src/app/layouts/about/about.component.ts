import { Component } from "@angular/core";
import { FadeDirective } from "../../directives/fade.directive";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
  standalone: true,
  imports: [FadeDirective]
})
export class AboutComponent {

}
