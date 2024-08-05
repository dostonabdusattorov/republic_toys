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
    return `translateX(calc(37rem * ${-this.currentSlide}))`;
  }

  trackById(index: number, item: any) {
    return item;
  }
}
