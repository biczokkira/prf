import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  constructor(private http: HttpClient) { }

  add(name: string, age: string) {
    return this.http.post(environment.serverUrl + 'second', {name: name, age: age}, {responseType: 'text'});
  }
}
