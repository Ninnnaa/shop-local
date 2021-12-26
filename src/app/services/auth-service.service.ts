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
    login: 'login'
  }
  constructor(
    private readonly httpClient: HttpClient
  ) { }

  login(data: UserInterface): Observable<AuthInterface> {
    return this.httpClient.post<AuthInterface>(environment.url+ AuthServiceService.apiUrl.login, data);
  }
}
