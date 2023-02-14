import { Component } from '@angular/core';
import { Home } from '../home';
import { FormService } from '../form.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

    home1=new Home('','','')

  f1()
  {
    window.location.href="http://localhost:4200/courses"
  }

  constructor(private _formService:FormService){}

  // public message:string=""

  submit()
  {
    // this.message="Thanks for connecting with TechQubes, a mail has been sent to your given mail id!!!"
    alert("Your request has been sent.")
    this._formService.homeSubmit(this.home1).
    subscribe(data=>console.log("Data",data),error=>console.log("Error!",error))
    // this.getintouch.reset()
  }
}
