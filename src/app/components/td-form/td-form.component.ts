import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.scss'],
})
export class TDFormComponent implements OnInit {
  title = 'td-form';
  @ViewChild('signUpForm') signUpForm!: NgForm;

  constructor() {}

  ngOnInit(): void {
    // setTimeout(() => {
    //   console.log(this.signUpForm);
    // }, 0);
  }

  onSub() {
    console.log(this.signUpForm);
    console.log(this.signUpForm.form.value);
  }
}
