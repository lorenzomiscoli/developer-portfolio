import { Component } from "@angular/core";
import { FadeDirective } from "../../directives/fade.directive";

@Component({
  selector: "app-resume",
  templateUrl: "./resume.component.html",
  styleUrls: ["./resume.component.scss"],
  standalone: true,
  imports: [FadeDirective]
})
export class ResumeComponent {

}
