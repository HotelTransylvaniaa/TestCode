import { useEffect, useState } from "react";
import RegisterForm from "../components/RegisterForm";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { register } from "../store/actions/auth";
import {Redirect} from "react-router-dom"
// import history from '../../node_modules/history';



export default function Register({history}) {
  const emailPattern= new RegExp("^[^\\s@]+@([^\\s@.,]+\\.)+[^\\s@.,]{2,}$")
  const namePattern=new RegExp("^[a-z]*$")
  const passPattern=new  RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})")
 const [userForm,setUserForm]=useState({
   userName:"",
   userEmail:"",
   password:"",
   confirmPass:""
 });
 useEffect(() => {
}, [userForm]);

 const [userFormErrors, setUserFormError] = useState({
 userNameErr:null,
  userEmailErr: null,
  passwordErr: null,
  confirmPassErr:null
});
const handleFormSubmit= async(e)=>{
  e.preventDefault();
  try{
   await register(userForm)
   toast.success("Register Success Please Login");
    history.push("/login")
  }
  catch(err){
    toast.error(err.response.data)
  }
}
const handelFormChange=(e)=>{
  if(e.target.name==="userEmail"){
    setUserForm({
      ...userForm,
      userEmail:e.target.value,
    });
    setUserFormError({
      ...userFormErrors,
      userEmailErr:
       e.target.value.length===0
       ?"this filed is requird"
       :!emailPattern.test(e.target.value) 
       ?"email not valid" 
       : null
    })
  }
  else if(e.target.name==="userName"){
    setUserForm({
      ...userForm,
      userName:e.target.value,
    });
    setUserFormError({
      ...userFormErrors,
      userNameErr:
       e.target.value.length===0
       ?"this filed is requird"
       :!namePattern.test(e.target.value) 
       ?"No space" 
       : null
    })
  }
    else if(e.target.name==="password"){
      setUserForm({
        ...userForm,
        password:e.target.value,
      })
      setUserFormError({
        ...userFormErrors,
        passwordErr:
         e.target.value.length===0
         ?"this filed is requird"
         :!passPattern.test(e.target.value) 
         ?"password length not less than 8 characters , contains at least one lowercase , one uppercase ,  at least one digit and special character" 
         : null
      })
    }
    else if(e.target.name==="confirmpassword"){
      setUserForm({
        ...userForm,
        confirmPass:e.target.value,
      })
      setUserFormError({
        ...userFormErrors,
        confirmPassErr:
        e.target.value.length===0
        ?"this filed is requird"
         :e.target.value !=userForm.password
         ?"Doesnt Match"
         : null
      })
    }
}
  return (
      <>
      <div className="container-fluid p-2 bg-secondary text-white text-center">
          <h1>Register</h1>
      </div>
      <ToastContainer position="top-center"/>
    <div className='container'>
      <div className='row d-flex flex-column align-content-center'>
          <RegisterForm handelFormChange={handelFormChange} handleFormSubmit={handleFormSubmit} userForm={userForm} userFormErrors={userFormErrors}/>
    </div>
    </div>
    </>
  );
}

