import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  registration(username: string, password: string) {
    return this.http.post(environment.serverUrl + 'registration', {username: username, password: password}, {responseType: 'text'});
  }
}
