import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormErrorEnums } from '../../enums/auth/form-error.enums';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  form: FormGroup;
  constructor(
     readonly fb: FormBuilder
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
}
