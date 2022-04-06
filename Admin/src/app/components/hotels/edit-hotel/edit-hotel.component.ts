import { Component, OnInit } from '@angular/core';
import { HotelsService } from 'src/app/services/hotels.service';
import { ActivatedRoute} from '@angular/router';
import { FormControl, FormGroup, Validators,FormBuilder ,FormArray} from '@angular/forms';
@Component({
  selector: 'app-edit-hotel',
  templateUrl: './edit-hotel.component.html',
  styleUrls: ['./edit-hotel.component.scss']
})
export class EditHotelComponent implements OnInit {
  EditHotel : FormGroup;
  images:any = new FormArray([new FormControl('',Validators.required)])
  constructor(private service:HotelsService,private activatedRoute: ActivatedRoute,private fb : FormBuilder) {
    this.EditHotel = this.fb.group({
      inputName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(15)]],

      inputUsername: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]]
      }
    )
   }
  Hotels:any
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const HotelId = params['id'];
      this.service.getHotelById(HotelId).subscribe(
        (res)=>this.Hotels=res,
        (err)=> {console.log(err)})
    });
  }

  get formControls(){
    return this.EditHotel.controls;
  }


  submitEditHotel(){
    console.log(this.EditHotel)
  }
  addImageInput(){
    this.images.push(new FormControl('',Validators.required))
    console.log(this.images)
  }
  removeImageInput(i:number){
    this.images.removeAt(i)
  }

}
