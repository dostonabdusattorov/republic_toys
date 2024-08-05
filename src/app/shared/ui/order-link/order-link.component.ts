import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-order-link',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './order-link.component.html',
  styleUrls: ['./order-link.component.scss'],
})
export class OrderLinkComponent {}
