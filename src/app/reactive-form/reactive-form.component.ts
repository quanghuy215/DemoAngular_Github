import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  // public name = '';
  // public formdata: FormGroup = new FormGroup({
  //   name: new FormControl(''),
  //   age: new FormControl(''),
  // });

  public formdata2 = this.fb.group({
    name: ['', Validators.required],
    age: ['', Validators.required],
  });
  constructor(private common: CommonService, private fb: FormBuilder) {}

  ngOnInit(): void {}
  public submitForm(): void {
    // console.log('submit form : formdata = ', this.formdata.value);
    this.common.submitData(this.formdata2.value);
  }
}
