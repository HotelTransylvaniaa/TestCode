import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
token:any;
  constructor(private router:Router) { }
  getToken(){
    console.log(!!localStorage.getItem("token"),"in auth")
   return !!localStorage.getItem("token")
  }
  getValueOfToken(){
    return localStorage.getItem("token")
  }
}
