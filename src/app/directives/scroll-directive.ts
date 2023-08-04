import { Directive, ElementRef, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appScroll]",
  standalone: true
})
export class ScrollDirective {
  @Input({ required: true }) toogleClass!: string;
  @Input({ required: true }) activateOn!: number;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener("document:scroll", []) onWindowScroll() {
    const verticalOffset = document.documentElement.scrollTop
    if (verticalOffset >= this.activateOn) {
      this.renderer.addClass(this.elementRef.nativeElement, this.toogleClass);
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, this.toogleClass);
    }
  }

}
