import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleTestimonialComponent } from '../../../home/ui/single-testimonial/single-testimonial.component';

@Component({
  selector: 'app-testimonial-list',
  standalone: true,
  imports: [CommonModule, SingleTestimonialComponent],
  templateUrl: './testimonial-list.component.html',
  styleUrls: ['./testimonial-list.component.scss'],
})
export class TestimonialListComponent {
  testimonial = {
    text: 'My grandson has been getting eureka crates for about five years and there has never been any duplication. He also tells me that your kits are environmentally friendly and well designed. He really loved the globe last time the stand,the rotation, and the magnifying glass.',
    job: 'Futurist founder',
    name: 'Reid Bingham',
    img: 'assets/images/Ellipse 1.png',
  };
}
