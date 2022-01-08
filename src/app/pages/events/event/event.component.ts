import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../../services/event.service';
import { EventInterface } from '../../../interfaces/event.interface';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  eventId: number = 0;
  event: EventInterface = {} as EventInterface;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly eventService: EventService,
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.eventId = params['id'];
    });
  }

  ngOnInit(): void {
    this.eventService.getEventById(this.eventId).subscribe(test => {
      this.event = test;
      }
    )
  }
}
