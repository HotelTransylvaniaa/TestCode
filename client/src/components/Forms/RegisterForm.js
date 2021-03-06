import "./Register.css";
export default function RegisterForm({
  handelFormChange,
  userFormErrors,
  handleFormSubmit,
  userForm,
}) {
  console.log(userForm);
  return (
    <>
     

      <div className="container-fluid bg2 vh-100 vw-100 border-0">
        <div className="row">
          <div className="col-md-7 m-auto">
            <div></div>
            <div className="card mt-5 ovaerlay">
              <div className="card-title text-center mt-3">
                <img
                  src="https://p7.hiclipart.com/preview/123/735/760/computer-icons-physician-login-medicine-user-avatar.jpg"
                  width="80px"
                  height="80px"
                  className="rounded-circle mt-3 text-white "
              alt=""  ></img>
              </div>
              <div className="card-body "></div>
              <form
                className="w-50 m-auto mt-3"
                onSubmit={(e) => handleFormSubmit(e)}
              >
                <div className="mb-3 input-group" controlid="formBasicEmail">
                  <span className="input-group-text">
                    <i className="fa-solid fa-user fa-2x "></i>
                  </span>
                  <input
                    className="form-control p-2"
                    type="text"
                    placeholder="Enter Name"
                    name="userName"
                    aria-describedby="userename"
                    value={userForm.userName}
                    onChange={(e) => handelFormChange(e)}
                  />
                  <div id="userename" className="text-danger form-text">
                    {userFormErrors.userNameErr}
                  </div>
                </div>
                <div className="mb-3 input-group" controlid="formBasicEmail">
                  <span className="input-group-text">
                    <i class="fa-solid fa-envelope fa-2x"></i>
                  </span>
                  <input
                    className="form-control p-2"
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
                <div className="mb-3 input-group" controlid="formBasicPassword">
                  <span className="input-group-text">
                    <i className="fa-solid fa-unlock-keyhole fa-2x"></i>
                  </span>
                  <input
                    className="form-control p-2"
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
                <div className="mb-3 input-group" controlid="formBasicPassword">
                  <span className="input-group-text">
                    <i className="fa-solid fa-lock fa-2x"></i>
                  </span>
                  <input
                    className="form-control  p-2"
                    type="password"
                    placeholder="Comfirm Your Password"
                    name="confirmpassword"
                    aria-describedby="userconfirmpass"
                    value={userForm.confirmPass}
                    onChange={(e) => handelFormChange(e)}
                  />
                  <div id="userpass" className="text-danger form-text">
                    {userFormErrors.confirmPassErr}
                  </div>
                </div>
                <div className="d-flex w-100 justify-content-center">
                  <button
                    disabled={
                      userFormErrors.userNameErr ||
                      userFormErrors.userEmailErr ||
                      userFormErrors.passwordErr ||
                      userFormErrors.confirmPassErr
                    }
                    className="btn btn-secondary m-3"
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
    </>
  );
}
