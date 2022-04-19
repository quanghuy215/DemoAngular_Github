import { HttpServerService } from './../Services/http-server.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.scss'],
})
export class PostDataComponent implements OnInit {
  constructor(private httpServerService: HttpServerService) {}

  ngOnInit(): void {
    const payLoad = { body: 'some comment 4', postId: 4 };
    this.httpServerService.postComments(payLoad).subscribe((data) => {
      console.log('post comments: ', data);
    });
  }
}
