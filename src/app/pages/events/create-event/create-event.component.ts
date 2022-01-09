import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { citiesConstant } from '../../../constants/cities.constant';
import { ActivatedRoute, Router } from '@angular/router';
import { FormErrorEnums } from '../../../enums/auth/form-error.enums';
import { EventService } from '../../../services/event.service';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import * as dayjs from 'dayjs';
import { EventInterface } from '../../../interfaces/event.interface';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {
  form: FormGroup;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  cities = citiesConstant;
  eventId = 0;
  eventData: EventInterface = {} as EventInterface;

  constructor(
    readonly fb: FormBuilder,
    private readonly eventService: EventService,
    private readonly router: Router,
    private _snackBar: MatSnackBar,
    private readonly activatedRoute: ActivatedRoute,
  ) {

    this.activatedRoute.params.subscribe(params => {
      this.eventId = params['id'];
    });
if(this.eventId !== 0) {
  this.eventService.getEventById(this.eventId).subscribe(event => {
    this.form.controls['name'].setValue(event.name);
    this.form.controls['date'].setValue(event.date);
    this.form.controls['time'].setValue(event.time);
    this.form.controls['location'].setValue(event.location);
    this.form.controls['description'].setValue(event.description);
    this.form.controls['participants'].setValue(event.participants);
  });
}


    this.form = this.fb.group({
      name: this.fb.control(null, {
        validators: [Validators.required],
      }),
      time: this.fb.control(null, {
        validators: [Validators.required],
      }),
      date: this.fb.control(null, {
        validators: [Validators.required],
      }),
      location: this.fb.control(null, {
        validators: [Validators.required],
      }),
      description: this.fb.control(null, {
        validators: [Validators.required],
      }),
      participants: this.fb.control(null, {
        validators: [Validators.required],
      })
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

  date(event: MatDatepickerInputEvent<Date>): void {
    this.form.controls['date'].setValue(dayjs(event.value).format('YYYY/MM/DD'));
  }

  submit(): void {
    if(this.eventId === 0 ) {
      this.eventService.createEventBy(this.form.value).subscribe( user => {
          this.openSnackBar('Evenimentul a fost adaugat');
          this.router.navigateByUrl('/administrator');

        },
        error => {
          this.openSnackBar('Date incorecte');
        })
    } else {
      this.eventService.updateEvent(this.eventId, this.form.value).subscribe( user => {
          this.openSnackBar('Evenimentul a fost editat');
          this.router.navigateByUrl('/administrator');

        },
        error => {
          this.openSnackBar('Date incorecte');
        })
    }
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'x', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

}
