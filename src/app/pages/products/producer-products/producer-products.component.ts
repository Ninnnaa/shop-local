import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { ProductInterface } from '../../../interfaces/product.interface';

@Component({
  selector: 'app-producer-products',
  templateUrl: './producer-products.component.html',
  styleUrls: ['./producer-products.component.scss']
})
export class ProducerProductsComponent implements OnInit {
  producer: number = 0;
  productsList: ProductInterface[] = [] as ProductInterface[];

  constructor(
    private readonly productService: ProductService,
    private readonly activatedRoute: ActivatedRoute,

  ) {
    this.activatedRoute.params.subscribe(params => {
      this.producer = params['id'];
    });
  }

  ngOnInit(): void {
    this.productService.getProducerProducts(this.producer).subscribe( products => {
      this.productsList = products;
      }
    )
  }

}
