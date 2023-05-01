import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../utils/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: string;
  password: string;

  constructor(private registerService: RegisterService, private router: Router){
    this.username = '';
    this.password = '';
  }

  ngOnInit(): void {
  }

  registration(){
    if(this.username != '' && this.password != '') {
      this.registerService.registration(this.username, this.password).subscribe(msg => {
        console.log('ez itt a msg');
        this.router.navigate(['/login']);
      }, error => {
        console.log(error);
      })
    }
  }
}
