import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Categories } from '../../../constants/categories.constant';
import { FormErrorEnums } from '../../../enums/auth/form-error.enums';
import { EventService } from '../../../services/event.service';
import { ActivatedRoute, Router } from '@angular/router';
import { citiesConstant } from '../../../constants/cities.constant';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
  form: FormGroup;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  categories = Categories;
  cities = citiesConstant;
  productId = 0;

  constructor(
    readonly fb: FormBuilder,
    private readonly router: Router,
    private _snackBar: MatSnackBar,
    private readonly activatedRoute: ActivatedRoute,
    private readonly productService: ProductService
  ) {

    this.activatedRoute.params.subscribe(params => {
      this.productId = params['id'];
    });
    if(this.productId !== 0) {
      this.productService.getProductById(this.productId).subscribe(product => {
        this.form.controls['name'].setValue(product?.name);
        this.form.controls['category'].setValue(product?.category);
        this.form.controls['location'].setValue(product?.location);
        this.form.controls['description'].setValue(product?.description);
      });
    }

    this.form = this.fb.group({
      name: this.fb.control(null, {
        validators: [Validators.required],
      }),
      category: this.fb.control(null, {
        validators: [Validators.required],
      }),
      location: this.fb.control(null, {
        validators: [Validators.required],
      }),
      description: this.fb.control(null, {
        validators: [Validators.required],
      }),
      image: this.fb.control('random', {
        validators: [Validators.required],
      }),
    }, {updateOn: 'blur'});
  }

  ngOnInit(): void {
  }

  displayError(formControlName: string): string {
    const formControl = this.form.controls[formControlName];

    if (formControl.hasError('required')) {
      return FormErrorEnums.required
    }
    if (formControl.hasError('email')) {
      return FormErrorEnums.email
    }

    return ''
  }

  submit(): void {
    if(this.productId == 0) {
      const data = {
        ...this.form.value,
        user_id: 2
      }
      this.productService.createProduct(data).subscribe(()=>{
        this.router.navigateByUrl('/functions');
    })
    } else {
      this.editProduct(this.productId);
    }
  }

  editProduct(id: number): void {
    this.productService.updateProduct(id, this.form.value).subscribe(()=>{
      this.router.navigateByUrl('/functions');
    });
  }


}
