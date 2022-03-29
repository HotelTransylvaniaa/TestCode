import "./profile.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function Profile() {
  const { auth } = useSelector((state) => ({ ...state }));
  console.log(auth);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    window.localStorage.removeItem("auth");
  };
  return (
    <div className="bg-light my-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-3 shadow py-4">
            <ul className="list-group">
              <a
                className="list-group-item list-group-item-action active border-light fs-5"
                aria-current="true"
              >
                Profile
              </a>
              <a className="list-group-item list-group-item-action  border-light fs-5">
                My Booking
              </a>
            </ul>
          </div>
          <div className="col-8 ps-5">
            <h4 className="fw-bold">Personail Details</h4>
            <p>Update your info and find out how it's used.</p>
            <div className="box my-3 p-3 ">
              <div className="row">
                {/* //////////////////////  */}
                <div className="col-12 ps-0">
                  <h4 className="fw-bold">User Details</h4>
                  <div className="box my-3 p-3 d-flex uBox w-100">
                    <div className="pt-2 ps-1">
                      <h1 className="letter fs-1 text-capitalize">
                        {auth.userName.charAt(0)}
                      </h1>
                    </div>
                    <div className="ms-5">
                      <h5 className="fw-bold">name</h5>
                      <h5 className="fw-normal">{auth.userName}</h5>
                    </div>
                  </div>
                </div>
                {/* ////////////////////////////// */}

                <hr></hr>

                <div className="col-md-6">
                  <h6>Email</h6>
                </div>
                <div className="col-md-6">
                  <h6 className="">{auth.userEmail}</h6>
                  <p className="fw-light">
                    This is the email address you use to sign in. It’s also
                    where we send your booking confirmations
                  </p>
                </div>
                <hr></hr>

                <div className="col-md-6">
                  <h6>Phone Number</h6>
                </div>
                <div className="col-md-6">
                  <div className="d-flex justify-content-between">
                    <h6>Add your phone number</h6>
                    {/* <i class="fa-solid fa-plus fs-5"></i> */}
                  </div>    
                  <p className="fw-light">
                    Properties or attractions you book can use this number to
                    contact you. You can also use it to sign in.
                  </p>
                </div>
                <hr></hr>

                <div className="col-md-6">
                  <h6>Address</h6>
                </div>
                <div className="col-md-6">
                  <h6 className="">Add your address</h6>
                </div>
                <hr></hr>

                <div className="col-md-6">
                  <h6>Password</h6>
                </div>
                <div className="col-md-6">
                  <h6 className="">Passowrd{auth.password}</h6>
                </div>
                <hr></hr>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
