import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  animations: [
    trigger('accordionAnimation', [
      state(
        'collapsed',
        style({
          height: '0',
          opacity: 0,
        })
      ),
      state(
        'expanded',
        style({
          height: '*',
          opacity: 1,
        })
      ),
      transition('collapsed <=> expanded', animate('300ms ease-in-out')),
    ]),
  ],
})
export class AccordionComponent {
  faqs = [
    {
      id: 1,
      title: 'How do I know which line to choose?',
      content:
        'KiwiCo subscriptions are available across flexible options. Choose from 1, 3, 6, or 12 month plans. And once you get started, you can switch lines, pause, or cancel anytime!',
      expanded: false,
    },
    {
      id: 2,
      title: 'What’s included in each crate?',
      content:
        'KiwiCo subscriptions are available across flexible options. Choose from 1, 3, 6, or 12 month plans. And once you get started, you can switch lines, pause, or cancel anytime!',
      expanded: false,
    },
    {
      id: 3,
      title: 'Can I try out a crate before subscribing?',
      content:
        'KiwiCo subscriptions are available across flexible options. Choose from 1, 3, 6, or 12 month plans. And once you get started, you can switch lines, pause, or cancel anytime!',
      expanded: false,
    },
    {
      id: 4,
      title: 'How much does a subscription cost?',
      content:
        'KiwiCo subscriptions are available across flexible options. Choose from 1, 3, 6, or 12 month plans. And once you get started, you can switch lines, pause, or cancel anytime!',
      expanded: false,
    },
    {
      id: 5,
      title: 'How much does a subscription cost?',
      content:
        'KiwiCo subscriptions are available across flexible options. Choose from 1, 3, 6, or 12 month plans. And once you get started, you can switch lines, pause, or cancel anytime!',
      expanded: false,
    },
  ];

  toggleAccordion(index: number) {
    this.faqs = this.faqs.map((item, i) => {
      if (i === index) {
        return { ...item, expanded: !item.expanded };
      } else {
        return { ...item, expanded: false };
      }
    });
  }

  trackById(index: number, item: any) {
    return item.id;
  }
}
