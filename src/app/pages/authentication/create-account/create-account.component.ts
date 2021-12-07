import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormErrorEnums } from '../../../enums/auth/form-error.enums';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
})
export class CreateAccountComponent implements OnInit {
  form: FormGroup;

  constructor(
    readonly fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      email: this.fb.control(null, {
        validators: [Validators.required, Validators.email],
      }),
      firsName: this.fb.control(null, {
        validators: [Validators.required],
      }),
      lastName: this.fb.control(null, {
        validators: [Validators.required],
      }),
      city: this.fb.control(null, {
        validators: [Validators.required],
      }),
      businessName: this.fb.control(null, {
        validators: [Validators.required],
      }),
      telephone: this.fb.control(null, {
        validators: [Validators.required],
      }),
      storeAddress: this.fb.control(null, {
        validators: [Validators.required],
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

    if (formControl.hasError('required')) {
      return FormErrorEnums.required
    }
    if (formControl.hasError('email')) {
      return FormErrorEnums.email
    }
    return ''
  }
}
