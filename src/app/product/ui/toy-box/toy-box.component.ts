import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toy-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toy-box.component.html',
  styleUrls: ['./toy-box.component.scss'],
})
export class ToyBoxComponent {
  @Input() img: string = '';
  @Input() articul: number = 0;
  @Input() name: string = '';
}
