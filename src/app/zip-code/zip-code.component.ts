import { HttpServerService } from './../Services/http-server.service';
import { Component, OnInit } from '@angular/core';
import { Zipcode } from '../customeZipcode.model';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-zip-code',
  templateUrl: './zip-code.component.html',
  styleUrls: ['./zip-code.component.scss'],
})
export class ZipCodeComponent implements OnInit {
  public zipcode = '';
  public getData = {};
  dataZip: any[];
  public zipList;
  constructor(
    private httpServerService: HttpServerService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  public getDataZipcode(): void {
    this.httpServerService.getData(this.zipcode).subscribe((data) => {
      console.log('get zipcode: ', data);
      this.dataZip = data.results;
      let arr = [];
      Object.keys(data.results[0]).map(function (key) {
        arr.push({ [key]: data.results[0][key] });
        return arr;
      });
      this.zipList = new Zipcode(data.results[0]);
      //this.zipList = arr;
      console.log('dataZip: ', this.dataZip);
      console.log('arrZip: ', arr);
      console.log('ziplist: ', this.zipList);
      this.toastr.success('Sucessfull!', 'Get Data Zipcode');
    });
  }
}
