import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  name=""
  age=""
  email=""
  password=""

  getName(value:string){
    console.log(value);
    this.name=value;
  }
  getAge(value:string){
    console.log(value);
    this.age=value;
  }
  getEmail(value:string){
    console.log(value);
    this.email=value;
  }
  getPassword(value:string){
    console.log(value);
    this.password=value;
  }

  }
