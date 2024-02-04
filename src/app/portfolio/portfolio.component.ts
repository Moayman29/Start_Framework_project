import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  x=""
  appear= false

  houseImg= "../assets/poert1.png"
  cakeImg= "../assets/port2.png"
  circusImg= "../assets/port3.png"
  imageCenter= [this.houseImg,this.cakeImg,this.circusImg]

  i=0
  
  display(i:number){
    this.appear=true
    this.x=this.imageCenter[i];
    console.log(i)
    console.log(this.x)
  }

}
