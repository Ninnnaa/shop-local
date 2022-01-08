import { Component, OnInit } from '@angular/core';
import { EventInterface } from '../../interfaces/event.interface';
import { EventService } from '../../services/event.service';
import { Router } from '@angular/router';
import { citiesConstant } from '../../constants/cities.constant';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  cards: EventInterface[] = [] as EventInterface[];
  searchText= '';
  cities = citiesConstant

  constructor(
    private readonly eventService: EventService,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
    this.eventService.getEvents().subscribe(events => {
      this.cards = events;
    })
  }

  getEvent(id:number) {
    this.router.navigateByUrl(`/event/${id}`);
  }
}
