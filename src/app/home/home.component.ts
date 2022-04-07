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
  public fruit2 =[
    {name:'Apple',price:21,sale:true},
    {name:'Orange',price:43,sale:false},
    {name:'Watermelon',price:15,sale:true},
    {name:'Mango',price:73,sale:false},
    {name:'Durian',price:64,sale:true},
    {name:'Banana',price:23,sale:false},
  ];

  constructor() { }

  public ngOnInit(): void {
    console.log('Fruit = ',this.fruit)
  }
  public resetName(): void{
    console.log('resetName')
    this.name = ""
  }
}
