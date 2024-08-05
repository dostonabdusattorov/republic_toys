import { Injectable } from '@angular/core';
import { products } from '../../../db';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  getCategories(): Observable<any[]> {
    return of(products.categories);
  }

  getToys(pagination: number = 1, count: number = 12): Observable<any> {
    return of({
      count,
      total_count: products.toys.length,
      data: products.toys.slice((pagination - 1) * count, pagination * count),
    });
  }

  getSingleToy(id: string): Observable<any> {
    return of(products.toys.find((toy: any) => toy.id === id));
  }
}
