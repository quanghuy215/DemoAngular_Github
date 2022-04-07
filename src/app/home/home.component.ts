import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = `Harry`;
  public age = 25;
  public fruit =['Apple','Orange','Watermelon','Mango','Durian','Banana'];

  constructor() { }

  public ngOnInit(): void {
    console.log('Fruit = ',this.fruit)
  }
  public resetName(): void{
    console.log('resetName')
    this.name = ""
  }
}
