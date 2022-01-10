import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductInterface } from '../interfaces/product.interface';
import { EventInterface } from '../interfaces/event.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  static readonly apiUrl = {
    products: 'products',
    product: (id: number) => `products/${id}`,
  }

  constructor(
    private readonly httpClient: HttpClient,
  ) { }

  getProducts(): Observable<ProductInterface[]> {
    return this.httpClient.get<ProductInterface[]>(environment.url+ ProductService.apiUrl.products);
  }

}
