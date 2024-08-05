import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-specialist-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './specialists-card.component.html',
  styleUrls: ['./specialists-card.component.scss'],
})
export class SpecialistCardComponent {
  @Input() src: string = '';
  @Input() job: string = '';
  @Input() name: string = '';
}
