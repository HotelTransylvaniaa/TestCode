import { Router } from '@angular/router';
import { AdminService } from './../../services/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor(private service:AdminService,private router:Router) { }

  ngOnInit(): void {
  }
  submitRegForm(form : any){
    console.log(form.form.value)
    this.service.adminLogin(form.form.value).subscribe(
      (res:any)=>{localStorage.setItem('token',res)
      this.router.navigate([''])
    },
      (err)=>console.log(err,"in login ts")
    )
  }
}
