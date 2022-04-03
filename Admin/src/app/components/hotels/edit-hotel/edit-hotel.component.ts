import { Component, OnInit } from '@angular/core';
import { HotelsService } from 'src/app/services/hotels.service';
import { ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-edit-hotel',
  templateUrl: './edit-hotel.component.html',
  styleUrls: ['./edit-hotel.component.scss']
})
export class EditHotelComponent implements OnInit {
  constructor(private service:HotelsService,private activatedRoute: ActivatedRoute) { }
  Hotels:any
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const HotelId = params['id'];
      this.service.getHotelById(HotelId).subscribe(
        (res)=>this.Hotels=res,
        (err)=> {console.log(err)})
    });
  }

}
