import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductsService } from '../../../shared/data-access/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  categoriesFilter!: any[];
  toys!: any[];
  current: number = 1;
  pagination_count: number = 12;
  total_toys_count!: number;
  searchText: string = '';
  private categoriesSubscription!: Subscription;
  private toysSubscription!: Subscription;

  constructor(private productsSer: ProductsService) {}

  fetchToys(event: number) {
    this.current = event;
    this.toysSubscription = this.productsSer
      .getToys(this.current, this.pagination_count)
      .subscribe(({ total_count, data }) => {
        this.toys = data;
        this.total_toys_count = total_count;
      });
  }

  ngOnInit(): void {
    this.categoriesSubscription = this.productsSer
      .getCategories()
      .subscribe((categories) => {
        this.categoriesFilter = categories.map((category) => ({
          ...category,
          selected: false,
        }));
      });

    this.fetchToys(this.current);
  }

  categoryFilterHandler(id: string): void {
    this.categoriesFilter = this.categoriesFilter.map((category) => {
      if (id === category.id) {
        return { ...category, selected: !category.selected };
      }

      return category;
    });
  }

  setSearchText(event: any): void {
    this.searchText = event.target.value;
  }

  get selectedCategoriesFilter(): any[] {
    return this.categoriesFilter.filter((item) => item.selected);
  }

  get filteredToys(): any[] {
    return this.toys
      .filter((toy) => {
        if (this.selectedCategoriesFilter.length === 0) return true;

        return this.selectedCategoriesFilter.find(
          (category) => category.id === toy.category
        );
      })
      .filter((toy) =>
        toy.name?.toLowerCase().includes(this.searchText.toLowerCase())
      );
  }

  ngOnDestroy(): void {
    this.categoriesSubscription.unsubscribe();
    this.toysSubscription.unsubscribe();
  }
}
