import { UsersService } from 'src/app/services/users.service';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  signUpForm : FormGroup;
  constructor(private fb : FormBuilder,private service:UsersService,private toastr: ToastrService) {

    this.signUpForm = this.fb.group({
      inputName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(15)]],

      inputUsername: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],

      inputSginUpEmail: ['',[Validators.required,Validators.email,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")]],

      inputPass: ['',[Validators.required,Validators.minLength(8),Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")]],

      inputConfiemPass: ['',[Validators.required]],

      },
      {
        validator: this.ConfirmedValidator('inputPass', 'inputConfiemPass')
      }
      )


    // this.signUpForm = new FormGroup({})
  }

  ngOnInit(): void {
  }
  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!',{
      timeOut: 3000,
      positionClass:'toast-top-right',
    });
  }
  get formControls(){
    return this.signUpForm.controls;
  }


  submitSignUpForm(){
    console.log(this.signUpForm.value)
    const userName=this.signUpForm.value.inputName;
    const userEmail=this.signUpForm.value.inputSginUpEmail;
    const password=this.signUpForm.value.inputPass;
    console.log(userName,userEmail,password);
   this.service.addUser({userName,userEmail,password}).subscribe(
    (res)=>this.showSuccess(),
    (err)=> {console.log(err)
    })
  }

  ConfirmedValidator(controlName: string, matchingControlName: string){
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ confirmedValidator: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}


}
