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

  patchValue() {
    this.signUpForm.form.patchValue(this.userDetails);
  }

  userDetails = {
    username: 'vishnu',
    email: 'jv@gmail.com',
    secretQuestion: 'favBook',
    answer: 'Naruto',
    isSubscribed: true,
    modeofContact: 'Email',
  };

  mocArr = [
    { contactMode: 'Email', id: 123 },
    { contactMode: 'Phone', id: 124 },
  ];

  ngOnInit(): void {
    // setTimeout(() => {
    //   console.log(this.signUpForm);
    // }, 0);
  }

  onSub() {
    if (this.signUpForm.valid) {
      console.log(this.signUpForm);
      console.log(this.signUpForm.form.value);
    }
  }
}
