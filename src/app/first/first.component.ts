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

  json : any;
  x = '';

  example = ['1_elem'];

  goToSecond(){
    this.router.navigate(['/second', {message: this.title}]);
  }

  hello(){
    this.connectionService.greet().subscribe(data => {
      this.json = JSON.parse(data);
      //this.x = this.json[0]["name"];
      console.log(this.x);
    });
  }

  helloFrom(st: string) {
    console.log('Hello from ' + st);
  }
}
