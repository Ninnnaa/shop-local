import { Component, OnInit } from '@angular/core';
import { EventInterface } from '../../interfaces/event.interface';
import { EventService } from '../../services/event.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

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

  constructor(
    private readonly eventService: EventService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.eventService.getEvents().subscribe(events => {
      this.dataSource = events
    })
  }

  logOut(): void {

  }

  deleteEvent(id: number): void {
    this.eventService.deleteEvent(id).subscribe(()=> {
      this.openSnackBar('Evenimentul a fost sters');
    },
      ()=> this.openSnackBar('Date incorecte'))
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'x', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

}
