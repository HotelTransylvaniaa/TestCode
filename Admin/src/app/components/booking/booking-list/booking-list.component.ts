import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.scss']
})
export class BookingListComponent implements OnInit {
  booking:any
  constructor(private service:BookingService) { }

  ngOnInit(): void {
    this.getbooking()
  }
  del(id:any){
    this.service.deletebookingList(id).subscribe(
      (res)=>this.getbooking(),
      
      (err)=> {console.log(err)})
      
  }
  getbooking()
  {
    this.service.getbookingList().subscribe(
      (res)=>this.booking=res,
      
      (err)=> {console.log(err)})
  }

}
