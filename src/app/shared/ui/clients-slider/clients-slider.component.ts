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
  animations: [
    trigger('carouselAnimation', [
      transition(':increment', [
        query(
          ':enter, :leave',
          [style({ position: 'absolute', width: '100%' })],
          { optional: true }
        ),
        group([
          query(
            ':leave',
            [
              animate(
                '500ms ease-in-out',
                style({ transform: 'translateX(-100%)' })
              ),
            ],
            { optional: true }
          ),
          query(
            ':enter',
            [
              style({ transform: 'translateX(100%)' }),
              animate(
                '500ms ease-in-out',
                style({ transform: 'translateX(0)' })
              ),
            ],
            { optional: true }
          ),
        ]),
      ]),
      transition(':decrement', [
        query(
          ':enter, :leave',
          [style({ position: 'absolute', width: '100%' })],
          { optional: true }
        ),
        group([
          query(
            ':leave',
            [
              animate(
                '500ms ease-in-out',
                style({ transform: 'translateX(100%)' })
              ),
            ],
            { optional: true }
          ),
          query(
            ':enter',
            [
              style({ transform: 'translateX(-100%)' }),
              animate(
                '500ms ease-in-out',
                style({ transform: 'translateX(0)' })
              ),
            ],
            { optional: true }
          ),
        ]),
      ]),
    ]),
  ],
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
