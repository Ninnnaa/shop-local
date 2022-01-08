import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthInterface, UserInterface } from '../interfaces/auth.interface';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  static readonly apiUrl = {
    login: 'login',
    create: 'register',
    users: 'users',
    user: (id: number) => `users/${id}`,
  }
  constructor(
    private readonly httpClient: HttpClient
  ) { }

  login(data: UserInterface): Observable<AuthInterface> {
    return this.httpClient.post<AuthInterface>(environment.url+ AuthServiceService.apiUrl.login, data);
  }

  create(data: UserInterface): Observable<UserInterface> {
    return this.httpClient.post<UserInterface>(environment.url+ AuthServiceService.apiUrl.create, data);
  }

  getUsers(): Observable<UserInterface[]> {
    return this.httpClient.get<UserInterface[]>(environment.url + AuthServiceService.apiUrl.users);
  }

  getUser(id: number): Observable<UserInterface> {
    return this.httpClient.get<UserInterface>(environment.url + AuthServiceService.apiUrl.user(id));
  }

  deleteUser(id: number): Observable<UserInterface> {
    return this.httpClient.delete<UserInterface>(environment.url + AuthServiceService.apiUrl.user(id));
  }
}
