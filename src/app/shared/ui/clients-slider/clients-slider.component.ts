import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clients-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clients-slider.component.html',
  styleUrls: ['./clients-slider.component.scss'],
})
export class ClientsSliderComponent {
  slides = [
    '../../../../assets/images/Group 126.svg',
    '../../../../assets/images/Group 127.svg',
    '../../../../assets/images/Group 128.svg',
    '../../../../assets/images/Group 126.svg',
    '../../../../assets/images/Group 127.svg',
    '../../../../assets/images/Group 128.svg',
  ];
  currentSlide: number = 0;
  next() {
    if (this.currentSlide < this.slides.length - 3) {
      this.currentSlide++;
    }
  }
  prev() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }
  }
  get transformStyle(): string {
    const gapAdjustment = (40 / this.slides.length) * this.currentSlide;
    return `translateX(calc(-${(this.currentSlide * 100) / 3}% - ${
      2 * gapAdjustment
    }px))`;
  }
  get activeSlides() {
    return [
      this.slides[this.currentSlide - 1],
      this.slides[this.currentSlide],
      this.slides[this.currentSlide + 1],
    ];
  }
  trackById(index: number, item: any) {
    return item;
  }
}
