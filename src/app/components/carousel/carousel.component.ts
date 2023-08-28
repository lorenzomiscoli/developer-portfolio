import { AfterViewInit, Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { CAROUSEL_DEPS } from './carousel.dependencies';

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"],
  standalone: true,
  imports: [CAROUSEL_DEPS]
})
export class CarouselComponent implements AfterViewInit {
  private items!: HTMLElement[];
  public navigationDots!: number[];
  public currentDot = 0;
  public position = 0;
  private itemWidth = 0;
  @ViewChild('viewbox') public viewBox!: ElementRef<HTMLElement>;
  @ViewChild('content') public content!: ElementRef<HTMLElement>;


  constructor(private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.items = Array.from(this.content.nativeElement.children) as HTMLElement[];
      this.initializeNavigation();
      this.calculateDimension();
    }, 0)
  }

  @HostListener('window:resize') public onResize(): void {
    this.calculateDimension();
  }

  initializeNavigation(): void {
    this.navigationDots = Array(this.items.length).fill(1).map((_, i) => i);
  }

  calculateDimension(): void {
    const carouselWidth = this.viewBox.nativeElement.getBoundingClientRect().width;
    this.itemWidth = carouselWidth;
    this.items.forEach(item => {
      this.renderer.setStyle(item, 'flex-shrink', 0);
      this.renderer.setStyle(item, 'min-width', this.itemWidth + 'px');
      this.renderer.setStyle(item, 'max-width', this.itemWidth + 'px');
    })
    this.position = -this.itemWidth * this.currentDot;
  }

  scrollTo(dotIndex: number): void {
    if (dotIndex !== this.currentDot) {
      this.currentDot = dotIndex;
      this.position = -(this.itemWidth) * dotIndex;
      this.renderer.setStyle(this.content.nativeElement, 'transition-duration', '0.6s');
      setTimeout(() => {
        this.renderer.setStyle(this.content.nativeElement, 'transition-duration', '0s');
      }, 250);
    }
  }

}
