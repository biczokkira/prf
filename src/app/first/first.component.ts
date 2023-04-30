import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../utils/connection.service';
import { environment } from '../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(private connectionService: ConnectionService, private router: Router){
    console.log(environment)
  }

  ngOnInit(): void {
    
  }

  title = 'PRF';

  example = ['1_elem'];

  goToSecond(){
    this.router.navigate(['/second', {message: this.title}]);
  }

  hello(){
    console.log('Hello World');
    if(this.title === 'PRF'){
      this.title = 'NOT PRF';
    } else {
      this.title = 'PRF';
    }

    this.example.push(Math.floor(Math.random()*100) + '_elem');
    this.connectionService.greet().subscribe(data => {
      console.log('this came from the server: ', data);
    }, error => {
      console.log('Sorry we encounetered an error: ', error);
    });
  }

  helloFrom(st: string) {
    console.log('Hello from ' + st);
  }
}
