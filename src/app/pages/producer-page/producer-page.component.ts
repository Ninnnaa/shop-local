import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { ProductInterface } from '../../interfaces/product.interface';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-producer-page',
  templateUrl: './producer-page.component.html',
  styleUrls: ['./producer-page.component.scss']
})
export class ProducerPageComponent implements OnInit {

  dataSource: ProductInterface[] = [] as ProductInterface[];
  displayedColumns: string[] = ['name', 'category', 'location', 'edit', 'delete'];
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private readonly productService: ProductService,
    private readonly router: Router,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(products =>{
      this.dataSource = products;
    })
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id).subscribe( () => {
      this.openSnackBar('Produsul a fost sters');
      this.getProducts();
    });

  }

  editProduct(id: number): void {
    this.router.navigateByUrl(`/newProduct/${id}`);
    this.getProducts();
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'x', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

}
