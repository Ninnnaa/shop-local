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
  }

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  getEvents(): Observable<EventInterface[]> {
    return this.httpClient.get<EventInterface[]>(environment.url+ EventService.apiUrl.events);
  }
}
