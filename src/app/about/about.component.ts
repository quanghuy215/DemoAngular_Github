import { CommonService } from './../Services/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  public loginName = 'user';
  public myColor = 'red';
  public counter = 0;
  public counterBP = 0;
  constructor(private common: CommonService) {}

  ngOnInit(): void {
    this.counter = this.common.counter;
    this.counterBP = this.common.binhPhuong(this.counter);
    this.common.counter++;
  }
}
