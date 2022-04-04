import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelsService } from 'src/app/services/hotels.service';
@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.scss']
})
export class HotelsListComponent implements OnInit {
Hotels:any
  constructor(private service:HotelsService , private router:Router) { }

  ngOnInit(): void {
    this.getHotels()
  }

  deleteHotel(id:any){
    this.service.deleteHotelsById(id).subscribe(
    (res)=>this.getHotels(),
    (err)=> {console.log(err)})
  }

  getHotels(){
    this.service.getHotelsList().subscribe(
      (res)=>this.Hotels=res,
      (err)=> {console.log(err)})
  }

  goToEditHotel(id:any){
    this.router.navigate([`/admin/hotel-edit/${id}`])
  }
}
