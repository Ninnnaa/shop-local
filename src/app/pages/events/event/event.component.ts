import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../../services/event.service';
import { EventInterface } from '../../../interfaces/event.interface';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  eventId: number = 0;
  event: EventInterface = {} as EventInterface;
  thumbnail: any;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly eventService: EventService,
    private sanitizer: DomSanitizer

  ) {
    this.activatedRoute.params.subscribe(params => {
      this.eventId = params['id'];
    });
  }

  ngOnInit(): void {
    this.eventService.getEventById(this.eventId).subscribe(test => {
      this.event = test;

      let objectURL = 'data:image/jpeg;base64,' + test.event_image;

      this.thumbnail = this.sanitizer.bypassSecurityTrustUrl(objectURL);
      }
    )
  }
}
