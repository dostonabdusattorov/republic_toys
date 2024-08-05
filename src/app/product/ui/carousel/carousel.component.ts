import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToyBoxComponent } from '../toy-box/toy-box.component';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, ToyBoxComponent],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  @Input() toys: any[] = [];

  currentSlide: number = 0;
  next() {
    if (this.currentSlide < this.toys.length - 3) {
      this.currentSlide++;
      console.log(this.currentSlide);
    }
  }
  prev() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
      console.log(this.currentSlide);
    }
  }

  get transformStyle(): string {
    return `translateX(calc(37rem * ${-this.currentSlide}))`;
  }

  trackById(index: number, item: any) {
    return item.id;
  }
}
