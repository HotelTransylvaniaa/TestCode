import { Component, OnInit } from '@angular/core';
import { HotelsService } from 'src/app/services/hotels.service';
import { ActivatedRoute} from '@angular/router';
import { FormControl, FormGroup, Validators,FormBuilder ,FormArray} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-edit-hotel',
  templateUrl: './edit-hotel.component.html',
  styleUrls: ['./edit-hotel.component.scss']
})
export class EditHotelComponent implements OnInit {
  EditHotel : FormGroup;
  EHotel:any
  Room:any;
  Hotel:any;
  constructor(private service:HotelsService,private activatedRoute: ActivatedRoute,private fb : FormBuilder,private toastr: ToastrService) {
    this.Hotel={}
    this.Room=[]
    this.EditHotel = this.fb.group({
      inputName:["",[Validators.required,Validators.minLength(3),Validators.maxLength(15)]],
      inputPostalCode:[1,[Validators.required,Validators.min(1),Validators.max(100000),Validators.maxLength(6)]],
      inputRating:['',[Validators.required]],
      inputContact:this.fb.group({
        inputPhoneOne:['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
        inputPhoneTwo:['',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
        inputEmail:['',[Validators.required,Validators.email,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")]]
      }),
      inputAddress:this.fb.group({
        inputCountry: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
        inputCity: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(15)]],
        inputStreet: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(30)]]
      }),
      inputImage:this.fb.array([]),   ///
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
      inputRoom:this.fb.array([])
      }
    )
   }
  ngOnInit(): void {
    let images:FormArray;
    this.activatedRoute.params.subscribe(params => {
      const HotelId = params['id'];
      this.service.getHotelById(HotelId).subscribe(
        (res)=>{this.EHotel=res
          this.EditHotel.get('inputName')?.setValue(this.EHotel?.name)
          let actorsForm:any;
          let images:any
          this.EHotel.rooms.map(
            (room: any) => {
              actorsForm = this.fb.group({
                  inputRoomType:room.roomType,
                  inputRoomCount:room.count,
                  inputRoomCapacity:room.capacity,
                  inputPricePerNight:room.pricePerNight,
                  inputRoomImage:room.images[0],
                  inputRoomFacilities:this.fb.group({
                    inputRoomInternetAccess:room.facilities.internetAccess,
                    inputRoomWashingMachine:room.facilities.washingMachine,
                    inputRoomKitchen:room.facilities.kitchen,
                    inputRoomAirConditioning:room.facilities.airConditioning,
                    inputRoomCoffeeTeaMaker:room.facilities.coffeeteaMaker,
                    inputRoomTv:room.facilities.tv,
                    inputRoomBathtub:room.facilities.bathtub,
                    inputRoomBalcony:room.facilities.balcony
                  }),
                  inputRoomOffers:this.fb.group({
                    inputRoomBreakfastIncluded:room.roomOffers.breakfastIncluded,
                    inputRoomEarlyCheckIn:room.roomOffers.dinnerIncluded,
                    inputRoomDinnerIncluded:room.roomOffers.breakfastIncluded
                  })
              });
              this.inputRoom.push(actorsForm);

            }
          );
          this.EHotel?.images.map((image:any)=>{
               images=new FormControl(image)
              this.inputImage.push(images)
          })

        },
        (err)=> {console.log(err)})
    });
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
  get formControls(){return this.EditHotel.controls;}
  get inputCountry() {return this.EditHotel.get("inputAddress.inputCountry")}
  get inputCity() {return this.EditHotel.get("inputAddress.inputCity")}
  get inputStreet() {return this.EditHotel.get("inputAddress.inputStreet")}
  get inputPhoneOne() {return this.EditHotel.get("inputContact.inputPhoneOne")}
  get inputPhoneTwo() {return this.EditHotel.get("inputContact.inputPhoneTwo")}
  get inputEmail() {return this.EditHotel.get("inputContact.inputEmail")}
  get inputImage() {return this.EditHotel.get("inputImage") as FormArray}
  get inputRoom() {return this.EditHotel.get("inputRoom") as FormArray}


  // add and remove hotel images
  addImageInput(){
    this.inputImage.push(new FormControl(''))
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

  submitEditHotel(){
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
        name:this.EditHotel.get("inputName")?.value,
        rating:this.EditHotel.get("inputRating")?.value,
        address:{
          country:this.EditHotel.get("inputAddress.inputCountry")?.value,
          city:this.EditHotel.get("inputAddress.inputCity")?.value,
          street:this.EditHotel.get("inputAddress.inputStreet")?.value,
          lan:0,
          lat:0,
        },
        images:this.inputImage.value,
        facilities:{
          languages:{
            English:this.EditHotel.get("inputFacilities.inputLanguage.inputEnglish")?.value,
            Arabic:this.EditHotel.get("inputFacilities.inputLanguage.inputArabic")?.value,
            French:this.EditHotel.get("inputFacilities.inputLanguage.inputFrench")?.value,
          },
          services:{
            Cash_withdrawal:this.EditHotel.get("inputFacilities.inputServices.inputCashWithdrawal")?.value,
            Daily_housekeeping:this.EditHotel.get("inputFacilities.inputServices.inputDailyHousekeeping")?.value,
            Dry_cleaning:this.EditHotel.get("inputFacilities.inputServices.inputDryCleaning")?.value,
            Salon:this.EditHotel.get("inputFacilities.inputServices.inputSalon")?.value,
          },
          relax:{
            tours:this.EditHotel.get("inputFacilities.inputRelax.inputTours")?.value,
            nightclub:this.EditHotel.get("inputFacilities.inputRelax.inputNightClub")?.value,
            sauna:this.EditHotel.get("inputFacilities.inputRelax.inputSauna")?.value,
            spa:this.EditHotel.get("inputFacilities.inputRelax.inputSpa")?.value,
          },
          internet:{
            wifi_public:this.EditHotel.get("inputFacilities.inputInternet.inputWifiPublic")?.value,
            wifi_inrooms:this.EditHotel.get("inputFacilities.inputInternet.inputWifiInRoom")?.value,
          },
          access:{
            pets_allow:this.EditHotel.get("inputFacilities.inputAccess.inputPetsAllow")?.value,
            security:this.EditHotel.get("inputFacilities.inputAccess.inputSecurity")?.value,
            front_desk:this.EditHotel.get("inputFacilities.inputAccess.inputFrontDesk")?.value,
          },
          for_kids:{
            kids_club:this.EditHotel.get("inputFacilities.inputForKids.inputKidsClub")?.value,
            playground:this.EditHotel.get("inputFacilities.inputForKids.inputPlayground")?.value,
            swimmingpool:this.EditHotel.get("inputFacilities.inputForKids.inputSwimmingPool")?.value,
          }
        },
        rooms:this.Room,
        contact:{
          phone:[
            this.EditHotel.get("inputContact.inputPhoneOne")?.value,
            this.EditHotel.get("inputContact.inputPhoneTwo")?.value
          ],
          email:this.EditHotel.get("inputContact.inputEmail")?.value
        },
        postalCode:this.EditHotel.get("inputPostalCode")?.value
        }
        console.log(this.Hotel)
        // console.log(this.EHotel.name)
        // console.log(this.EHotel?.images)
        // console.log(this.inputImage.value)
        // this.activatedRoute.params.subscribe(params => {
        //   const HotelId = params['id'];
        //   this.service.editHotelById(HotelId,this.Hotel).subscribe(
        //     (res)=>this.showSuccess(),
        //   (err)=> {this.showError()
        //   })
        // })

  }
}
function index(index: any): FormGroup {
  throw new Error('Function not implemented.');
}

