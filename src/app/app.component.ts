import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  condition(){
    if(localStorage.getItem('user')) {
      return false;
    } else {
      return true;
    }
  }
}
