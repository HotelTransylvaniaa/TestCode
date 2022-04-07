import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder ,FormArray} from '@angular/forms';
@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.scss']
})
export class AddHotelComponent implements OnInit {
  AddHotel : FormGroup;
  images:any = new FormArray([new FormControl('',Validators.required)])
  constructor(private fb : FormBuilder) {
    this.AddHotel = this.fb.group({
      inputName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(15)]],
      inputCountry: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
      inputCity: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(15)]],
      inputStreet: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(30)]],
      inputImage: ['',[Validators.required]],
      inputEnglish:[],
      inputArabic:[],
      inputFrench:[],
      inputCashWithdrawal:[],
      inputDailyHousekeeping:[],
      inputDryCleaning:[],
      inputSalon:[],
      inputTours:[],
      inputNightClub:[],
      inputSauna:[],
      inputSpa:[],
      inputWifiPublic:[],
      inputWifiInRoom:[],
      inputPetsAllow:[],
      inputSecurity:[],
      inputFrontDesk:[],
      inputKidsClub:[],
      inputPlayground:[],
      inputSwimmingPool:[],
      inputRoomType:[],
      inputRoomCount:[],
      }
    )
   }

  ngOnInit(): void {
  }
  get formControls(){
    return this.AddHotel.controls;
  }
  submitAddHotel(){
    console.log(this.AddHotel)
  }
  addImageInput(){
    this.images.push(new FormControl('',Validators.required))
    console.log(this.images)
  }
  removeImageInput(i:number){
    this.images.removeAt(i)
  }
}
