import { Component } from '@angular/core';
import { Contact } from '../contact';
import { FormService } from '../form.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private _formService:FormService){}

  courses=[
    'Diploma in Software Programming',
    'PG Diploma in Data Science and Machine Learning',
    'PG Diploma in Full Stack Java Development',
    'PG Diploma in Full Stack Python Development',
    'PG Diploma in VLSI Design',
    'PG Diploma in Embedded And Automotive Systems',
    'Diploma in IoT',
    'PG Diploma in Business Analytics',
    'Diploma in Business Communication',
    'Diploma in Human Resources Management',
    'PG Diploma in Product Management',
    'PG Diploma in Digital Marketing',
    'PG Diploma in UI/UX Design',
  ]

  contact1=new Contact('','','','',"")

  isSubmitted:boolean=true;

  public message:string=""

  submit=()=>
  {
    this.message="Thanks for contacting us, we will get back to you shortly!"
    this.isSubmitted=false;
    alert("Your enquiry has been sent successfully!")
    this._formService.contactSubmit(this.contact1).
    subscribe(data=>console.log("Data",data),error=>console.log("Error!",error))
  }
}
