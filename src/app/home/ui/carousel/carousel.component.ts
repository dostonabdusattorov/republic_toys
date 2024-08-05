import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  currentSlide: number = 0;
  next() {
    if (this.currentSlide < 3) {
      this.currentSlide++;
    }
  }
  prev() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }
  }

  get transformStyle(): string {
    return `translateX(calc(107rem * ${-this.currentSlide}))`;
  }
}
