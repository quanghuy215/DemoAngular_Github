import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public name = `Harry`;
  public age = 25;
  public fruit = ['Apple', 'Orange', 'Watermelon', 'Mango', 'Durian', 'Banana'];
  public fruit2 = [
    { name: 'Apple', price: 21, sale: true },
    { name: 'Orange', price: 43, sale: false },
    { name: 'Watermelon', price: 15, sale: true },
    { name: 'Mango', price: 73, sale: false },
    { name: 'Durian', price: 64, sale: true },
    { name: 'Banana', price: 23, sale: false },
  ];
  public districts: string[] = [];
  public cities = [
    {
      city: 'Choose a City',
      district: ['Choose a District'],
    },
    {
      city: 'Da Nang',
      district: [
        'Quận Cẩm Lệ',
        'Quận Hải Châu',
        'Quận Liên Chiểu',
        'Quận Ngũ Hành Sơn',
        'Quận Sơn Trà',
        'Quận Thanh Khê',
        'Huyện Hòa Vang',
        'Huyện Hoàng Sa',
      ],
    },
    {
      city: 'An Giang',
      district: [
        'Thành phố Long Xuyên',
        'Thành phố Châu Đốc',
        'Thị xã Tân Châu',
        'Huyện An Phú',
        'Huyện Châu Phú',
        'Huyện Châu Thành',
        'Huyện Chợ Mới',
        'Huyện Phú Tân',
        'Huyện Thoại Sơn',
        'Huyện Tịnh Biên',
        'Huyện Tri Tôn',
      ],
    },
    {
      city: 'Bà Rịa - Vũng Tàu',
      district: [
        'Thành phố Bạc Liêu',
        'Huyện Đông Hải',
        'Huyện Giá Rai',
        'Huyện Hòa Bình',
        'Huyện Hồng Dân',
        'Huyện Phước Long',
        'Huyện Vĩnh Lợi',
      ],
    },
  ];
  constructor() {}

  public ngOnInit(): void {
    console.log('City = ', this.cities);
  }
  public resetName(): void {
    //console.log('resetName');
    this.name = '';
  }
  public changeCity(event: any) {
    const cityPick = event.target.value;
    if (!cityPick) {
      return;
    }
    //method 1
    // const search = this.cities.filter((city) => city.city === cityPick);
    // console.log('search', search);
    // if (search && search.length > 0) {
    //   this.districts = search[0].district;
    // }

    //method 2
    this.districts =
      this.cities.find((data) => data.city === cityPick)?.district || [];
  }
}
