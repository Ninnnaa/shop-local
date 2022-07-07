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

  createEventBy(data: any, image?: File): Observable<EventInterface> {

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("date", data.date);
    formData.append("time", data.time);
    formData.append("name", data.name);
    formData.append("participants", data.participants);
    formData.append("description", data.description);
    formData.append("location", data.location);
    if(image) {
      formData.append("event_image", image);
    }
    console.log(formData)
    return this.httpClient.post<EventInterface>(environment.url+ EventService.apiUrl.events, formData);
  }

  deleteEvent(id: number): Observable<EventInterface> {
    return this.httpClient.delete<EventInterface>(environment.url+ EventService.apiUrl.event(id));
  }

  updateEvent(id: number, data: EventService): Observable<EventInterface> {
    return this.httpClient.put<EventInterface>(environment.url+ EventService.apiUrl.event(id), data);
  }
}
