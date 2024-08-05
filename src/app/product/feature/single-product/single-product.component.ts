import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductsService } from '../../../shared/data-access/products.service';
import { Subscription } from 'rxjs';
import {
  BreadcrumbComponent,
  ButtonComponent,
  OrderLinkComponent,
  PageComponent,
} from '../../../shared';
import { GalleryComponent } from '../../ui';

@Component({
  selector: 'app-single-product',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    PageComponent,
    BreadcrumbComponent,
    OrderLinkComponent,
    ButtonComponent,
    GalleryComponent,
  ],
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss'],
})
export class SingleProductComponent implements OnInit, OnDestroy {
  toy: any;
  getSingleToySubscription!: Subscription;
  paramsSubscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private productSer: ProductsService
  ) {}

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe((params) => {
      console.log(params);
      this.getSingleToySubscription = this.productSer
        .getSingleToy(params['id'])
        .subscribe((toy) => {
          this.toy = toy;
          console.log(toy);
        });
    });
  }

  ngOnDestroy(): void {
    this.getSingleToySubscription.unsubscribe();
    this.paramsSubscription.unsubscribe();
  }
}
