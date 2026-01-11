import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {

  @ViewChild('signUpForm') signUpForm !: NgForm
  constructor() { }

  ngOnInit(): void {


   
  }

  userDetails = {
    userName: 'iamjhonDoe',
    email: 'jd@email.com',
    secratQuestion: 'favBook',
    answer: 'the key',
    isSubscribed: true,
    modeOfContact: 'phone'
  }

  mocArr=[
    {
      contactMode : 'email', id : 234
    },
    {
      contactMode : 'phone',id :9786
    }
  ]

  AddData(){
 

    if(this.signUpForm.valid){
      this.signUpForm.reset()
    }

  }


  patchData(){
    this.signUpForm.form.patchValue(this.userDetails)
  }

}