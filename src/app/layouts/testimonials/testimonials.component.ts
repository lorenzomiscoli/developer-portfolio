import { Component } from "@angular/core";
import { TESTIMONIALS_DEPS } from "./testimonials.dependencies";

@Component({
  selector: "app-testimonials",
  templateUrl: "./testimonials.component.html",
  styleUrls: ["./testimonials.component.scss"],
  standalone: true,
  imports: [TESTIMONIALS_DEPS]
})
export class TestimonialsComponent {

}
