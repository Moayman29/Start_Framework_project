import { Component, HostListener, OnInit } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
  
   scroll: boolean =false;
   
   @HostListener('window:scroll',['$event'])
  scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    this.scroll=true;
    console.log('true')
   } else {
    this.scroll=false;
    console.log('false')
   }
  }
}
