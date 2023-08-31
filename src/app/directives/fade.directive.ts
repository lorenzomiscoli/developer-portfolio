import { AfterViewInit, Directive, ElementRef, Input, OnDestroy } from "@angular/core";
import { AnimationBuilder, AnimationMetadata, animate, style } from "@angular/animations";

@Directive({
  selector: "[appFade]",
  standalone: true
})
export class FadeDirective implements AfterViewInit, OnDestroy {
  private _observer: IntersectionObserver | undefined;
  @Input() public delay = 0;
  @Input({ alias: "appFade", required: true }) public animation!: string;

  constructor(private elementRef: ElementRef, private builder: AnimationBuilder) { }

  ngAfterViewInit(): void {
    this.show(false);
    const options = { root: null, rootMargin: "0px", threshold: 0.0 };
    this._observer = new IntersectionObserver(this._callback, options);
    this._observer.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy() { this._observer!.disconnect(); }

  private _callback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    for (let entry of entries) {
      if (entry.isIntersecting) {
        this._observer!.unobserve(this.elementRef.nativeElement);
        this.show(true);
        break;
      }
    }
  }

  private show(show: boolean): void {
    const metadata = show ? this.getAnimation() : [style({ opacity: '*' }), animate('0ms', style({ opacity: 0 }))];
    const factory = this.builder.build(metadata);
    const player = factory.create(this.elementRef.nativeElement, { params: { delay: this.delay } });
    player.play();
  }

  private getAnimation(): AnimationMetadata[] {
    switch (this.animation) {
      case "up": {
        return [
          style({ opacity: 0, transform: 'translateY(50px)' }),
          animate('800ms {{delay}}ms ease-in', style({ opacity: 1, transform: 'translateY(0px)' }))
        ];
      }
      case "left": {
        return [
          style({ opacity: 0, transform: 'translateX(-50px)' }),
          animate('800ms {{delay}}ms ease-in', style({ opacity: 1, transform: 'translateX(-0px)' }))
        ];
      }
      default: {
        return [
          style({ opacity: 0 }),
          animate('800ms {{delay}}ms ease-in', style({ opacity: 1 }))
        ];
      }
    }
  }
}
