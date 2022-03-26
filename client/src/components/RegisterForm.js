export default function RegisterForm({handelFormChange,userFormErrors,handleFormSubmit, userForm}){
  console.log(userForm)
    return (
        <>
      <form className='w-50 m-5 p-5 bg-light shadow'onSubmit={(e) => handleFormSubmit(e)}>
           <div className="mb-3 form-group" controlid="formBasicEmail">
          <label className='form-label'>Name</label>
          <input className='form-control' type="text" placeholder="Enter Name" name='userName' aria-describedby='userename' value={userForm.userName} onChange={(e)=>handelFormChange(e)}/>
          <div id="userename" className="text-danger form-text">
              {userFormErrors.userNameErr}
          </div>
        </div>
        <div className="mb-3 form-group" controlid="formBasicEmail">
          <label className='form-label' >Email address</label>
          <input className='form-control' type="email" placeholder="Enter email" name='userEmail' aria-describedby='useremail' value={userForm.userEmail} onChange={(e)=>handelFormChange(e)}/>
          <div  id="useremail" className="text-danger form-text">
              {userFormErrors.userEmailErr}
          </div>
        </div>
        <div className="mb-3 form-group" controlid="formBasicPassword">
          <label className='form-label'>Password</label>
          <input className='form-control' type="password" placeholder="Password" name='password' aria-describedby='userpass' value={userForm.password} onChange={(e)=>handelFormChange(e)} />
          <div id="userpass" className="text-danger form-text">
              {userFormErrors.passwordErr}
          </div>
        </div>
        <div className="mb-3 form-group" controlid="formBasicPassword">
          <label className='form-label'>Confirm Password</label>
          <input className='form-control' type="password" placeholder="Comfirm Your Password" name='confirmpassword' aria-describedby='userconfirmpass' value={userForm.confirmPass} onChange={(e)=>handelFormChange(e)} />
          <div id="userpass" className="text-danger form-text">
              {userFormErrors.confirmPassErr}
          </div>
        </div>
        <button disabled={userFormErrors.userNameErr||userFormErrors.userEmailErr ||userFormErrors.passwordErr||userFormErrors.confirmPassErr} className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
      </>
    )
}