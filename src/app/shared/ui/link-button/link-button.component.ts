import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-link-button',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './link-button.component.html',
  styleUrls: ['./link-button.component.scss'],
})
export class LinkButtonComponent {
  @Input() icon: string = '';
  @Input() link: string = '';
  @Input() down: boolean = false;
}
