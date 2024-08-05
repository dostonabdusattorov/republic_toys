import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toy-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toy-box.component.html',
  styleUrls: ['./toy-box.component.scss'],
})
export class ToyBoxComponent {
  @Input() id: string = '';
  @Input() img: string = '';
  @Input() articul: number = 0;
  @Input() name: string = '';

  constructor(private router: Router) {}

  click(id: string): void {
    this.router.navigate([`products/${id}`]);
  }
}
