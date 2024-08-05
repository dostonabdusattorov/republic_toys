import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../shared/data-access/products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss'],
})
export class SingleProductComponent implements OnInit, OnDestroy {
  toy: any;
  relatedToys!: any[];
  getSingleToySubscription!: Subscription;
  getCategoryToysSubscription!: Subscription;
  paramsSubscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private productSer: ProductsService
  ) {}

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe((params) => {
      this.getSingleToySubscription = this.productSer
        .getSingleToy(params['id'])
        .subscribe((toy) => {
          this.toy = toy;
          this.getCategoryToysSubscription = this.productSer
            .getCategoryToys(toy.category)
            .subscribe((data) => {
              this.relatedToys = data.filter((item) => item.id !== toy.id);
            });
        });
    });
  }

  ngOnDestroy(): void {
    this.getSingleToySubscription.unsubscribe();
    this.paramsSubscription.unsubscribe();
    this.getCategoryToysSubscription.unsubscribe();
  }
}
