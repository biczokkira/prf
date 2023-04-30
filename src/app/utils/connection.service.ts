import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor(private http: HttpClient) { }

  greet() {
    return this.http.get('http://localhost:3000/', {responseType: 'text'});
  }
}
