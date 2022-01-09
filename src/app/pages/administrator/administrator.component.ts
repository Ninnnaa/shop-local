import { Component, OnInit } from '@angular/core';
import { EventInterface } from '../../interfaces/event.interface';
import { EventService } from '../../services/event.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { UserInterface } from '../../interfaces/auth.interface';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.scss']
})
export class AdministratorComponent implements OnInit {
  dataSource: EventInterface[] = [] as EventInterface[];
  displayedColumns: string[] = ['name', 'date', 'time', 'location', 'edit', 'delete'];
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  usersList: UserInterface[] = [] as UserInterface[];
  displayedUserColumns: string[] = ['brand', 'telephone', 'email', 'delete'];

  constructor(
    private readonly eventService: EventService,
    private _snackBar: MatSnackBar,
    private readonly authService: AuthServiceService,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
    this.eventData();
    this.usersData();
  }

  eventData(): void {
    this.eventService.getEvents().subscribe(events => {
      this.dataSource = events
    })
  }

  deleteEvent(id: number): void {
    this.eventService.deleteEvent(id).subscribe(()=> {
      this.openSnackBar('Evenimentul a fost sters');
      this.eventData();
    },
      ()=> this.openSnackBar('Date incorecte'))
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'x', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  editEvent(id: number): void {
    this.router.navigateByUrl(`/addEvent/${id}`);
  }

  usersData(): void {
    this.authService.getUsers().subscribe(users => {
      users.shift();
      this.usersList = users;
    })
  }

  deleteUser(id: number): void {
    this.authService.deleteUser(id).subscribe(()=>{
      this.openSnackBar('Producatorul a fost sters');
      this.usersData();
    }, ()=> this.openSnackBar('Producatorul nu fost sters'));
  }
}
