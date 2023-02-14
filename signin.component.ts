import { Component } from '@angular/core';
import { Credential } from '../credential';
import { FormService } from '../form.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  cred=new Credential('','')

  // student()
  // {
  //   window.location.href="http://localhost:52166/signin"
  // }

  // trainer()
  // {
  //   window.location.href="http://localhost:52166/courses"
  // }

  constructor(private _formService:FormService){}

  isSubmitted:boolean=true;
  public message:string=""

  submit=()=>
  {
    this.message="You have logged in successfully!"
    this.isSubmitted=false;
    this._formService.signIn(this.cred).
    subscribe(data=>console.log("Data",data),error=>console.log("Error!",error))
  }
}
