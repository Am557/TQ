import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Credential } from './credential';
import { Info } from './info';
import { Contact } from './contact';
import { Home } from './home';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private _http:HttpClient) { }

  url="http://localhost:3000/signin";

  signIn=(signin:Credential)=>
  {
    return this._http.post(this.url,signin)
  }

  url1="http://localhost:3000/signup";

  signUp=(signup:Info)=>
  {
    return this._http.post(this.url1,signup)
  }

  url2="http://localhost:3000/contact";

  contactSubmit=(contact:Contact)=>
  {
    return this._http.post(this.url2,contact)
  }

  url3="http://localhost:3000/home";

  homeSubmit=(getintouch:Home)=>
  {
    return this._http.post(this.url3,getintouch)
  }
}
