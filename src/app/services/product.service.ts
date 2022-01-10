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

  createProduct(data: ProductInterface): Observable<ProductInterface> {
    return this.httpClient.post<ProductInterface>(environment.url+ ProductService.apiUrl.products, data);
  }

  updateProduct(id: number, data: ProductInterface): Observable<ProductInterface> {
    return this.httpClient.put<ProductInterface>(environment.url+ ProductService.apiUrl.product(id), data);
  }

  deleteProduct(id: number): Observable<ProductInterface> {
    return this.httpClient.delete<ProductInterface>(environment.url+ ProductService.apiUrl.product(id));
  }

  getProductById(id: number): Observable<ProductInterface> {
    return this.httpClient.get<ProductInterface>(environment.url+ ProductService.apiUrl.product(id));
  }

}
