import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { EventInterface } from '../interfaces/event.interface';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  static readonly apiUrl = {
    events: 'events',
    event: (id: number) => `events/${id}`,
  }

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  getEvents(): Observable<EventInterface[]> {
    return this.httpClient.get<EventInterface[]>(environment.url+ EventService.apiUrl.events);
  }

  getEventById(id: number): Observable<EventInterface> {
    return this.httpClient.get<EventInterface>(environment.url+ EventService.apiUrl.event(id));
  }

  createEventBy(data: EventService): Observable<EventInterface> {
    return this.httpClient.post<EventInterface>(environment.url+ EventService.apiUrl.event, data);
  }
}
