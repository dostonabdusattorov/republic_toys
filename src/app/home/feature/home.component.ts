import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../../shared/data-access/products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  categories: any[] = [];
  private categoriesSubscription!: Subscription;

  constructor(private productsSer: ProductsService) {}

  ngOnInit(): void {
    this.categoriesSubscription = this.productsSer
      .getCategories()
      .subscribe((categories) => {
        this.categories = categories;
      });
  }

  ngOnDestroy(): void {
    this.categoriesSubscription.unsubscribe();
  }
}
