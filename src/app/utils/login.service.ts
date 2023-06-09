import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post(environment.serverUrl + 'login', {username: username, password: password}, {responseType: 'text'});
  }

  logout(){
    return this.http.post(environment.serverUrl + 'logout', {}, {withCredentials: true, responseType: 'text'});
  }
  
  users() {
    return this.http.get(environment.serverUrl + 'admin', {responseType: 'text', withCredentials: true});
  }
}
