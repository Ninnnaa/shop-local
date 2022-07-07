import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductInterface } from '../../interfaces/product.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productId = '';

  productsList: ProductInterface[] = [] as ProductInterface[];

  constructor(
    private readonly productService: ProductService,
    private readonly activatedRoute: ActivatedRoute ) {
    this.activatedRoute.params.subscribe(params => {
      this.productId = params['id'];
    });
  }

  ngOnInit(): void {
    console.log(this.productId)
    this.productService.getProducts().subscribe(products => {
      this.productsList = products.filter(products => products.category === this.productId);
    })

  }

}
