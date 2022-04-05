import { Component, OnInit,DoCheck ,OnChanges} from '@angular/core';
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
   this.getUsers()
  }
  getUsers(){
    this.service.getUserList().subscribe(
      (res)=>this.Users=res,
    (err)=> {console.log(err)})
  }

  deleteUser(id:any){
    console.log(id)
    this.service.deletUser(id).subscribe(
      (res)=>this.getUsers(),
      (err)=> {console.log(err)
      })
    }

}
