import { Component, OnInit } from '@angular/core';
import { EventInterface } from '../../interfaces/event.interface';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  cards: EventInterface[] = [
    {
      title: 'Iarmarocul cadourilor de craciun',
      date: 'In decembrie',
      city: 'Balti',
    },
    {
      title: 'Iarmarocul produselor de sezon',
      date: 'In decembrie',
      city: 'Chisinau',

    },
    {
      title: 'Iarmarocul produselor handMade',
      date: 'In februarie',
      city: 'Edinet',

    },
    {
      title: 'Iarmaroc de iarna',
      date: 'In februarie',
      city: 'Chisinau',
    },
    {
      title: 'Iarmaroc de primavara',
      date: 'In martie',
      city: 'Chisinau',
    },
    {
      title: 'Iarmaroc de iarna',
      date: 'In Decembrie',
      city: 'Chisinau',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
