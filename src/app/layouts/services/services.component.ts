import { Component } from "@angular/core";
import { FadeDirective } from "../../directives/fade.directive";

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.scss"],
  standalone: true,
  imports: [FadeDirective]
})
export class ServicesComponent {

}
