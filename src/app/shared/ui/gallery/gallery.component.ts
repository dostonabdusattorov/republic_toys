import { Component, Input, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  isSliderActive: boolean = false;
  sliderActiveImg: number = 0;

  @Input() images!: any[];

  constructor(private renderer: Renderer2) {}

  setMainImage(src: string): void {
    this.images = this.images.map((img, index) => {
      if (img.src === src) {
        this.sliderActiveImg = index;
        return { ...img, main: true };
      }

      return { ...img, main: false };
    });
  }

  startSlider(): void {
    this.isSliderActive = true;
    this.renderer.addClass(document.body, 'no-scroll');
  }

  finishSlider(): void {
    this.isSliderActive = false;
    this.renderer.removeClass(document.body, 'no-scroll');
  }

  sliderPrev(): void {
    if (this.sliderActiveImg > 0) {
      this.sliderActiveImg--;
    }
  }

  sliderNext(): void {
    if (this.sliderActiveImg < this.images.length - 1) {
      this.sliderActiveImg++;
    }
  }

  get mainImage(): any {
    return this.images.find((img) => img.main);
  }

  get otherImages(): any[] {
    return this.images.filter((img) => !img.main);
  }

  trackBySrc(index: number, img: any) {
    return img.src;
  }
}
