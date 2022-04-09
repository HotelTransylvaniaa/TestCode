import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-booking',
  templateUrl: './user-booking.component.html',
  styleUrls: ['./user-booking.component.scss']
})
export class UserBookingComponent implements OnInit {
  activeID:number=0;
  booking:any;
  constructor(private service:UsersService,private activatedRoute:ActivatedRoute) {
    this.activeID = this.activatedRoute.snapshot.params['id'];
    console.log(this.activeID);
   }

  ngOnInit(): void {
    this.service.userBooking(this.activeID).subscribe(
      (res)=>this.booking=res,
      (err)=> {console.log(err)
      })
  }
  deleteUserBooking(id:any){
     console.log(id)
  }

}
