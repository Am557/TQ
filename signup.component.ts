import { Component } from '@angular/core';
import { Info } from '../info';
import { FormService } from '../form.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  genders=['Male','Female','Others','Do not wish to declare']
  info1=new Info('','','','','','','')

  constructor(private _formService:FormService){}
  isSubmitted:boolean=true;

  public message:string=""

  submit=()=>
  {
    this.message="Your account has been created successfully! Check your mail for your credentials."
    this.isSubmitted=false;
    this._formService.signUp(this.info1).
    subscribe(data=>console.log("Data",data),error=>console.log("Error!",error))
  }
}
