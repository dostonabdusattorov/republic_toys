import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  animate,
  group,
  query,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

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
  currentSlide: number = 1;
  next() {
    if (this.currentSlide < this.slides.length - 2) {
      this.currentSlide++;
    }
  }
  prev() {
    if (this.currentSlide > 1) {
      this.currentSlide--;
    }
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
