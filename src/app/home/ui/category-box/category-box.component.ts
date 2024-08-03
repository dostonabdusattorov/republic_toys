import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-category-box',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './category-box.component.html',
  styleUrls: ['./category-box.component.scss'],
})
export class CategoryBoxComponent {
  @Input() img: string = '';
  @Input() count: number = 0;
  @Input() name: string = '';
}
