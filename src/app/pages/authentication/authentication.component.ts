import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormErrorEnums } from '../../enums/auth/form-error.enums';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router } from '@angular/router';
import { AuthInterface, UserInterface } from '../../interfaces/auth.interface';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  form: FormGroup;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
     readonly fb: FormBuilder,
     private readonly authService: AuthServiceService,
     private readonly router: Router,
     private _snackBar: MatSnackBar
  ) {
    this.form = this.fb.group({
      email: this.fb.control(null, {
        validators: [Validators.required, Validators.email]
      }),
      password: this.fb.control(null, {
        validators: [Validators.required],
      }),
    }, {updateOn: 'blur'});
  }

  ngOnInit(): void {
  }

  displayError(formControlName: string): string {
    const formControl = this.form.controls[formControlName];

    if(formControl.hasError('required')) {
      return FormErrorEnums.required
    }
    if(formControl.hasError('email')) {
      return FormErrorEnums.email
    }
    return ''
  }

  submit(): void {
    const data = {
      email: this.form.controls['email'].value,
      password: this.form.controls['password'].value
    } as UserInterface;

    this.authService.login(data).subscribe( user => {
      user.user.id === 1 ? this.router.navigateByUrl('/administrator') : this.router.navigateByUrl('functions');

    },
      error => {
      this.openSnackBar(error);
      })
  }

  openSnackBar(error: string) {
    this._snackBar.open('Datele introduse sunt incorecte!', 'Inchide', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
