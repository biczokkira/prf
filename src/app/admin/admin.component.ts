import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { Router } from '@angular/router';
import { LoginService } from '../utils/login.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private connectionService: LoginService, private router: Router){
    console.log(environment)
  }

  ngOnInit(): void {
    
  }
  
  json : any;
  x = '';

  usernames(){
    this.connectionService.users().subscribe(data => {
      this.json = JSON.parse(data);
      //this.x = this.json[0]["name"];
      console.log(this.json);
    });
  }
}
