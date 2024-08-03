import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single-testimonial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-testimonial.component.html',
  styleUrls: ['./single-testimonial.component.scss'],
})
export class SingleTestimonialComponent {
  @Input() text: string = '';
  @Input() job: string = '';
  @Input() name: string = '';
  @Input() img: string = '';
}
