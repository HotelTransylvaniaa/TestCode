import "./Login.css";
export default function LoginForm({
  handelFormChange,
  userFormErrors,
  handleFormSubmit,
  userForm,
}) {
  return (
    //   <form className='w-50 m-5 p-5'onSubmit={(e) => handleFormSubmit(e)}>
    //   <div className="mb-3 form-group" controlid="formBasicEmail">
    //     <label className='form-label' >Email address</label>
    //     <input className='form-control' type="email" placeholder="Enter email" name='userEmail' aria-describedby='useremail' value={userForm.userEmail} onChange={(e)=>handelFormChange(e)}/>
    //     <div id="useremail" className="text-danger form-text">
    //         {userFormErrors.userEmailErr}
    //     </div>
    //   </div>
    //   <div className="mb-3 form-group" controlid="formBasicPassword">
    //     <label className='form-label'>Password</label>
    //     <input className='form-control' type="password" placeholder="Password" name='password' aria-describedby='userpass' value={userForm.password} onChange={(e)=>handelFormChange(e)} />
    //     <div id="userpass" className="text-danger form-text">
    //         {userFormErrors.passwordErr}
    //     </div>
    //   </div>
    //   <button disabled={userFormErrors.userEmailErr||userFormErrors.passwordErr} className="btn btn-primary" type="submit">
    //       Submit
    //   </button>
    // </form>
    <div className="container-fluid bg1 vh-100">
      <div className="row">
        <div className="col-md-7 m-auto">
          <div className="card mt-5 bg-dark opacity-75  ">
            <div className="card-title text-center mt-3">
              <img
                src="http://cognitive-physio.com/assets/images/user.jpg"
                width="100px"
                height="100px"
                className="rounded-circle mt-3 text-white"
              ></img>
            </div>
            <div className="card-body "></div>
            <form
              className="w-75 m-auto mt-3 "
              onSubmit={(e) => handleFormSubmit(e)}
            >
              <div className="mb-3 input-group" controlid="formBasicEmail">
                <span className="input-group-text">
                  <i className="fa-solid fa-user fa-2x "></i>
                </span>
                <input
                  className="form-control"
                  type="email"
                  placeholder="Enter email"
                  name="userEmail"
                  aria-describedby="useremail"
                  value={userForm.userEmail}
                  onChange={(e) => handelFormChange(e)}
                />
                <div id="useremail" className="text-danger form-text">
                  {userFormErrors.userEmailErr}
                </div>
              </div>
              <div
                className="mb-3 input-group m-auto"
                controlid="formBasicPassword"
              >
                <span className="input-group-text">
                  <i class="fa-solid fa-lock fa-2x"></i>
                </span>
                <input
                  className="form-control"
                  type="password"
                  placeholder="Password"
                  name="password"
                  aria-describedby="userpass"
                  value={userForm.password}
                  onChange={(e) => handelFormChange(e)}
                />
                <div id="userpass" className="text-danger form-text">
                  {userFormErrors.passwordErr}
                </div>
              </div>
              <div className="d-flex w-100 justify-content-center">
                <button
                  disabled={
                    userFormErrors.userEmailErr || userFormErrors.passwordErr
                  }
                  className="btn btn-secondary m-3 text-center"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
