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
      inputAddress:this.fb.group({
        inputCountry: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
        inputCity: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(15)]],
        inputStreet: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(30)]]
      }),
      inputImage:this.fb.array([new FormControl('',Validators.required)]),
      inputFacilities:this.fb.group({
        inputLanguage:this.fb.group({
          inputEnglish:[false],
          inputArabic:[false],
          inputFrench:[false],
        }),
        inputServices:this.fb.group({
          inputCashWithdrawal:[false],
          inputDailyHousekeeping:[false],
          inputDryCleaning:[false],
          inputSalon:[false],
        }),
        inputRelax:this.fb.group({
          inputTours:[false],
          inputNightClub:[false],
          inputSauna:[false],
          inputSpa:[false],
        }),
        inputInternet:this.fb.group({
          inputWifiPublic:[false],
          inputWifiInRoom:[false],
        }),
        inputAccess:this.fb.group({
          inputPetsAllow:[false],
          inputSecurity:[false],
          inputFrontDesk:[false],
        }),
        inputForKids:this.fb.group({
          inputKidsClub:[false],
          inputPlayground:[false],
          inputSwimmingPool:[false],
        })
      }),
      inputRoom:this.fb.array([{
        inputRoomType:["single"],
        inputRoomCount:[1],
        inputRoomCapacity:[1],

      }])

      }
    )
  }

  ngOnInit(): void {
  }
  get formControls(){return this.AddHotel.controls;}
  get inputCountry() {return this.AddHotel.get("inputAddress.inputCountry")}
  get inputCity() {return this.AddHotel.get("inputAddress.inputCity")}
  get inputStreet() {return this.AddHotel.get("inputAddress.inputStreet")}
  get inputImage() {return this.AddHotel.get("inputImage") as FormArray}



  // add and remove hotel images
  addImageInput(){
    this.inputImage.push(new FormControl('',Validators.required))
  }
  removeImageInput(i:number){
    this.inputImage.removeAt(i)
  }
// add and remove hotel Rooms
  addRoomInput(){

  }
  removeRoomInput(i:number){

  }
// add and remove hotel Room Images
addRoomImages(){

}
removeRoomImages(i:number){

}

  submitAddHotel(){
    console.log(this.AddHotel.value)
  }

}
