import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
Users:any
  constructor(private service:UsersService) { }
  ngOnInit(): void {
    this.service.getUserList().subscribe(
    (res)=>this.Users=res,
    (err)=> {console.log(err)})
  }
}
