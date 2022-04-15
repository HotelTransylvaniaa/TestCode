import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder ,FormArray} from '@angular/forms';
import { HotelsService } from 'src/app/services/hotels.service';
import { ActivatedRoute} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.scss']
})
export class AddHotelComponent implements OnInit {
  AddHotel : FormGroup;
  Room:any;
  Hotel:any;
  constructor(private service:HotelsService,private activatedRoute: ActivatedRoute,private fb : FormBuilder,private toastr: ToastrService,private _router: Router) {
    this.Hotel={}
    this.Room=[]
    this.AddHotel = this.fb.group({
      inputName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(15)]],
      inputPostalCode:[1,[Validators.required,Validators.min(1),Validators.max(100000),Validators.maxLength(6)]],
      inputRating:[1,[Validators.required]],
      inputContact:this.fb.group({
        inputPhoneOne:['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
        inputPhoneTwo:['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
        inputEmail:['',[Validators.required,Validators.email,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")]]
      }),
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
      inputRoom:this.fb.array([this.fb.group({
        inputRoomType:['single',[Validators.required]],
        inputRoomCount:[1,[Validators.required]],
        inputRoomCapacity:[1,[Validators.required]],
        inputPricePerNight:[1,[Validators.required]],
        inputRoomImage:["",[Validators.required]],
        inputRoomFacilities:this.fb.group({
          inputRoomInternetAccess:[false],
          inputRoomWashingMachine:[false],
          inputRoomKitchen:[false],
          inputRoomAirConditioning:[false],
          inputRoomCoffeeTeaMaker:[false],
          inputRoomTv:[false],
          inputRoomBathtub:[false],
          inputRoomBalcony:[false]
        }),
        inputRoomOffers:this.fb.group({
          inputRoomBreakfastIncluded:[false],
          inputRoomEarlyCheckIn:[false],
          inputRoomDinnerIncluded:[false]
        })
      })])
      }
    )
  }

  ngOnInit(): void {
  }
  showSuccess() {
    this.toastr.success('success',"",{
      timeOut: 3000,
      positionClass:'toast-top-right',
    });
  }
  showError() {
    this.toastr.error('error',"",{
      timeOut: 3000,
      positionClass:'toast-top-right',
    });
  }
  get formControls(){return this.AddHotel.controls;}
  get inputCountry() {return this.AddHotel.get("inputAddress.inputCountry")}
  get inputCity() {return this.AddHotel.get("inputAddress.inputCity")}
  get inputStreet() {return this.AddHotel.get("inputAddress.inputStreet")}
  get inputPhoneOne() {return this.AddHotel.get("inputContact.inputPhoneOne")}
  get inputPhoneTwo() {return this.AddHotel.get("inputContact.inputPhoneTwo")}
  get inputEmail() {return this.AddHotel.get("inputContact.inputEmail")}
  get inputImage() {return this.AddHotel.get("inputImage") as FormArray}
  get inputRoom() {return this.AddHotel.get("inputRoom") as FormArray}



  // add and remove hotel images
  addImageInput(){
    this.inputImage.push(new FormControl('',Validators.required))
  }
  removeImageInput(i:number){
    this.inputImage.removeAt(i)
  }
// add and remove hotel Rooms
  addRoomInput(){
this.inputRoom.push(
  this.fb.group({
    inputRoomType:['single',[Validators.required]],
    inputRoomCount:[1,[Validators.required]],
    inputRoomCapacity:[1,[Validators.required]],
    inputPricePerNight:[1,[Validators.required]],
    inputRoomImage:["",[Validators.required]],
    inputRoomFacilities:this.fb.group({
      inputRoomInternetAccess:[false],
      inputRoomWashingMachine:[false],
      inputRoomKitchen:[false],
      inputRoomAirConditioning:[false],
      inputRoomCoffeeTeaMaker:[false],
      inputRoomTv:[false],
      inputRoomBathtub:[false],
      inputRoomBalcony:[false]
    }),
    inputRoomOffers:this.fb.group({
      inputRoomBreakfastIncluded:[false],
      inputRoomEarlyCheckIn:[false],
      inputRoomDinnerIncluded:[false]
    })
  })
)
  }
  removeRoomInput(i:number){
    this.inputRoom.removeAt(i)
  }

  submitAddHotel(){
      for (let i = 0; i < this.inputRoom.length; i++) {
           this.Room.push({
              roomType:this.inputRoom.controls[i].value.inputRoomType,
              count:this.inputRoom.controls[i].value.inputRoomCount,
              capacity:this.inputRoom.controls[i].value.inputRoomCapacity,
              images:this.inputRoom.controls[i].value.inputRoomImage,
              pricePerNight:this.inputRoom.controls[i].value.inputPricePerNight,
              facilities:{
                internetAccess:this.inputRoom.controls[i].value.inputRoomFacilities.inputRoomInternetAccess,
                washingMachine:this.inputRoom.controls[i].value.inputRoomFacilities.inputRoomWashingMachine,
                kitchen:this.inputRoom.controls[i].value.inputRoomFacilities.inputRoomKitchen,
                airConditioning:this.inputRoom.controls[i].value.inputRoomFacilities.inputRoomAirConditioning,
                coffeeteaMaker:this.inputRoom.controls[i].value.inputRoomFacilities.inputRoomCoffeeTeaMaker,
                tv:this.inputRoom.controls[i].value.inputRoomFacilities.inputRoomTv,
                bathtub:this.inputRoom.controls[i].value.inputRoomFacilities.inputRoomBathtub,
                balcony:this.inputRoom.controls[i].value.inputRoomFacilities.inputRoomBalcony
              },
              roomOffers:{
                breakfastIncluded:this.inputRoom.controls[i].value.inputRoomOffers.inputRoomBreakfastIncluded,
                earlyCheckin:this.inputRoom.controls[i].value.inputRoomOffers.inputRoomEarlyCheckIn,
                dinnerIncluded:this.inputRoom.controls[i].value.inputRoomOffers.inputRoomDinnerIncluded,
              }
            })
        }

    this.Hotel={
        name:this.AddHotel.get("inputName")?.value,
        rating:this.AddHotel.get("inputRating")?.value,
        address:{
          country:this.AddHotel.get("inputAddress.inputCountry")?.value,
          city:this.AddHotel.get("inputAddress.inputCity")?.value,
          street:this.AddHotel.get("inputAddress.inputStreet")?.value,
          lan:0,
          lat:0,
        },
        images:this.inputImage.value,
        facilities:{
          languages:{
            English:this.AddHotel.get("inputFacilities.inputLanguage.inputEnglish")?.value,
            Arabic:this.AddHotel.get("inputFacilities.inputLanguage.inputArabic")?.value,
            French:this.AddHotel.get("inputFacilities.inputLanguage.inputFrench")?.value,
          },
          services:{
            Cash_withdrawal:this.AddHotel.get("inputFacilities.inputServices.inputCashWithdrawal")?.value,
            Daily_housekeeping:this.AddHotel.get("inputFacilities.inputServices.inputDailyHousekeeping")?.value,
            Dry_cleaning:this.AddHotel.get("inputFacilities.inputServices.inputDryCleaning")?.value,
            Salon:this.AddHotel.get("inputFacilities.inputServices.inputSalon")?.value,
          },
          relax:{
            tours:this.AddHotel.get("inputFacilities.inputRelax.inputTours")?.value,
            nightclub:this.AddHotel.get("inputFacilities.inputRelax.inputNightClub")?.value,
            sauna:this.AddHotel.get("inputFacilities.inputRelax.inputSauna")?.value,
            spa:this.AddHotel.get("inputFacilities.inputRelax.inputSpa")?.value,
          },
          internet:{
            wifi_public:this.AddHotel.get("inputFacilities.inputInternet.inputWifiPublic")?.value,
            wifi_inrooms:this.AddHotel.get("inputFacilities.inputInternet.inputWifiInRoom")?.value,
          },
          access:{
            pets_allow:this.AddHotel.get("inputFacilities.inputAccess.inputPetsAllow")?.value,
            security:this.AddHotel.get("inputFacilities.inputAccess.inputSecurity")?.value,
            front_desk:this.AddHotel.get("inputFacilities.inputAccess.inputFrontDesk")?.value,
          },
          for_kids:{
            kids_club:this.AddHotel.get("inputFacilities.inputForKids.inputKidsClub")?.value,
            playground:this.AddHotel.get("inputFacilities.inputForKids.inputPlayground")?.value,
            swimmingpool:this.AddHotel.get("inputFacilities.inputForKids.inputSwimmingPool")?.value,
          }
        },
        rooms:this.Room,
        contact:{
          phone:[
            this.AddHotel.get("inputContact.inputPhoneOne")?.value,
            this.AddHotel.get("inputContact.inputPhoneTwo")?.value
          ],
          email:this.AddHotel.get("inputContact.inputEmail")?.value
        },
        postalCode:this.AddHotel.get("inputPostalCode")?.value
        }
        console.log(this.Hotel)
        this.service.addHotel(this.Hotel).subscribe(
          (res)=>{this.showSuccess(),this._router.navigateByUrl('/admin/hotels')},
          (err)=> {this.showError()
          })
  }
}
