import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  @Input() total_toys_count: number = 0;
  @Input() pagination_count: number = 0;
  @Input() current: number = 0;

  @Output() change = new EventEmitter();

  get pageCount(): number {
    return Math.trunc(this.total_toys_count / this.pagination_count) + 1;
  }

  get pagination_list(): (number | string)[] {
    if (
      this.current === this.pageCount ||
      this.current === this.pageCount - 1 ||
      this.current === this.pageCount - 2 ||
      this.current === this.pageCount - 3
    ) {
      return [
        this.pageCount - 3,
        this.pageCount - 2,
        this.pageCount - 1,
        this.pageCount,
      ];
    }

    return [
      this.current % 2 === 0 ? this.current - 1 : this.current,
      this.current % 2 === 0 ? this.current : this.current + 1,
      '...',
      this.pageCount,
    ];
  }

  prevHandler(): void {
    if (this.current > 1) {
      this.change.emit(this.current - 1);
    }
  }

  nextHandler(): void {
    if (
      this.current <
      Math.trunc(this.total_toys_count / this.pagination_count) + 1
    )
      this.change.emit(this.current + 1);
  }

  itemHandler(item: number | string): void {
    if (typeof item === 'number') {
      this.change.emit(item as number);
      return;
    }

    if (this.current % 2 === 1) {
      this.change.emit(this.current + 2);
    } else {
      this.change.emit(this.current + 1);
    }
  }
}
