import { HttpServerService } from './../Services/http-server.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.scss'],
})
export class GetDataComponent implements OnInit {
  constructor(private httpServerService: HttpServerService) {}

  public ngOnInit(): void {
    this.httpServerService.getComments().subscribe((data) => {
      console.log('get comments : ', data);
    });
    this.httpServerService.getRandomUsers(5).subscribe((data) => {
      console.log('get random user : ', data.results);
    });
  }
}
