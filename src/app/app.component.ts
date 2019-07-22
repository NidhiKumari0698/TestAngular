import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { TestService } from './test.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  Data = [];
  Class: any;
  dept: any = 'cs';
  showtable: boolean = true;
  constructor(
    private testService: TestService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  // Form = this.fb.group({
  //   branch: ['cs', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
  // });

  ngOnInit() {
    this.Data = [];
    this.Class = {};
    console.log('inside init');
    console.log('dept changed to ', this.dept);

    this.testService.getStudent(this.dept).subscribe(res2 => {
      console.log('Students detail is:', res2);
      this.Data = [...res2.student];
      console.log('Data is:', this.Data);
      this.Class = {
        dept: res2.class.dept,
        hod: res2.class.hod.name,
        room: res2.class.room,
      };
      console.log('Class is:', this.Class);
    });

    // let objArray = [{ name: 'first' }, { name: 'second' }, { name: 'third' }, { name: 'fourth' }];

    // let clonedArr = [...objArray];
  }

  deleteData(data) {
    console.log('data to be deleted is:', data);
    this.testService.deleteStudent(data._id).subscribe(res3 => {
      console.log('res3 is:', res3);
      this.ngOnInit();
    });
  }

  branchChanged(event) {
    console.log('dept selected is:', event.target.value);
    this.dept = event.target.value;
    console.log('this.dept is:', this.dept);
    this.ngOnInit();
  }
}
