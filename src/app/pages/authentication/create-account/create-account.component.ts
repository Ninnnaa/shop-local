import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormErrorEnums } from '../../../enums/auth/form-error.enums';
import { AuthServiceService } from '../../../services/auth-service.service';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { citiesConstant } from '../../../constants/cities.constant';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
})
export class CreateAccountComponent implements OnInit {
  form: FormGroup;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  cities = citiesConstant;

  constructor(
    readonly fb: FormBuilder,
    private readonly authService: AuthServiceService,
    private readonly router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.form = this.fb.group({
      email: this.fb.control(null, {
        validators: [Validators.required, Validators.email],
      }),
      name: this.fb.control(null, {
        validators: [Validators.required],
      }),
      lastName: this.fb.control(null, {
        validators: [Validators.required],
      }),
      location: this.fb.control(null, {
        validators: [Validators.required],
      }),
      brand: this.fb.control(null, {
        validators: [Validators.required],
      }),
      telephone: this.fb.control(null, {
        validators: [Validators.required],
      }),
      address: this.fb.control(null, {
        validators: [Validators.required],
      }),
      password: this.fb.control(null, {
        validators: [Validators.required, Validators.minLength(8)],
      }),
      password_confirmation: this.fb.control(null, {
        validators: [Validators.required, Validators.minLength(8)],
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
    if (formControl.hasError('minlength')) {
      return FormErrorEnums.min
    }

    return ''
  }
  submit(): void {
    console.log(this.form.value)
    this.authService.create(this.form.value).subscribe( user => {
      this.openSnackBar('Profil inregistrat');
        this.router.navigateByUrl('/auth');

      },
      error => {
        this.openSnackBar('Date incorecte');
      })
  }
  openSnackBar(message: string) {
    this._snackBar.open(message, 'Inchide', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
