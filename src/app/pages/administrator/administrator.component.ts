import { Component, OnInit } from '@angular/core';
import { EventInterface } from '../../interfaces/event.interface';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.scss']
})
export class AdministratorComponent implements OnInit {
  dataSource: EventInterface[] = [] as EventInterface[];
  displayedColumns: string[] = ['name', 'date', 'time', 'location', 'edit', 'delete'];

  constructor(
    private readonly eventService: EventService,
  ) { }

  ngOnInit(): void {
    this.eventService.getEvents().subscribe(events => {
      this.dataSource = events
    })
  }

  logOut(): void {

  }

}
