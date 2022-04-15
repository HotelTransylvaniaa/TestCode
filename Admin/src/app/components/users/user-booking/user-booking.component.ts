import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { BookingService } from 'src/app/services/booking.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-booking',
  templateUrl: './user-booking.component.html',
  styleUrls: ['./user-booking.component.scss']
})
export class UserBookingComponent implements OnInit {
  activeID:number=0;
  booking:any;
  constructor(private service:UsersService,private activatedRoute:ActivatedRoute,private service2:BookingService ) {
    this.activeID = this.activatedRoute.snapshot.params['id'];
    console.log(this.activeID);
   }

  ngOnInit(): void {
    this.getUserBooking()
  }
  deleteUserBooking(id:any){
    this.service2.deletebookingList(id).subscribe(
      (res)=>this.getUserBooking(),
      (err)=> {console.log(err)})
  }

  getUserBooking(){
    this.service.userBooking(this.activeID).subscribe(
      (res)=>this.booking=res,
      (err)=> {console.log(err)
      })
  }
}
