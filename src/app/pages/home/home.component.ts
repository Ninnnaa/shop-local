import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductInterface } from '../../interfaces/product.interface';
import { Categories } from '../../constants/categories.constant';

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
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      console.log(products)
      this.productsList = products;
    })
  }

}
