import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductInterface } from '../../interfaces/product.interface';
import { Categories } from '../../constants/categories.constant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  productsList: ProductInterface[] = [] as ProductInterface[];
  categoriesList = Categories;

  constructor(
    private readonly productService: ProductService,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      console.log(products)
      this.productsList = products;
    })
  }

  goToProducts(id: string): void {
    this.router.navigateByUrl(`/products/${id}`)
  }

}
