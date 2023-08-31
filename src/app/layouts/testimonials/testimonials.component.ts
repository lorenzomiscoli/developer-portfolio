import { Component } from "@angular/core";
import { CarouselComponent } from "../../components/carousel/carousel.component";
import { FadeDirective } from "../../directives/fade.directive";

@Component({
  selector: "app-testimonials",
  templateUrl: "./testimonials.component.html",
  styleUrls: ["./testimonials.component.scss"],
  standalone: true,
  imports: [CarouselComponent, FadeDirective]
})
export class TestimonialsComponent {

}
