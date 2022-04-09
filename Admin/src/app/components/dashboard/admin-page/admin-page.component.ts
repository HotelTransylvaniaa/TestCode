import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
token:any
  constructor() { }

  ngOnInit(): void {
    // this.token=localStorage.getItem("token");
    // console.log(this.token)
  }
  gotoLogin(){

  }
}
