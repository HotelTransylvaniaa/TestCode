export default function LoginForm({handelFormChange,userFormErrors,handleFormSubmit, userForm}){
   return(
    <form className='w-50 m-5 p-5 bg-light shadow'onSubmit={(e) => handleFormSubmit(e)}>
    <div className="mb-3 form-group" controlid="formBasicEmail">
      <label className='form-label' >Email address</label>
      <input className='form-control' type="email" placeholder="Enter email" name='userEmail' aria-describedby='useremail' value={userForm.userEmail} onChange={(e)=>handelFormChange(e)}/>
      <div id="useremail" className="text-danger form-text">
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
    <button disabled={userFormErrors.userEmailErr||userFormErrors.passwordErr} className="btn btn-primary" type="submit">
        Submit
    </button>
  </form>
   )
}