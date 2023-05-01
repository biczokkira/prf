import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimalsService } from '../utils/animals.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  name: string;
  age: string;

  constructor(private animalsService: AnimalsService, private router: Router){
    this.name = '';
    this.age = '';
  }

  ngOnInit(): void {
  }

  add(){
    if(this.name != '' && this.age != '') {
      this.animalsService.add(this.name, this.age).subscribe(msg => {
        console.log('ez itt a msg');
      }, error => {
        console.log(error);
      })
    }
  }

}
