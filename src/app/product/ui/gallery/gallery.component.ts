import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  activeImg: number = 0;
  isSliderActive: boolean = false;
  sliderActiveImg: number = 0;
  @Input() images: string[] = [];

  constructor(private renderer: Renderer2) {}

  setActiveImage(index: number) {
    this.activeImg = index;
    this.sliderActiveImg = index;
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
}
