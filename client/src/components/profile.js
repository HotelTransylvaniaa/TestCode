import "./profile.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { editProfile } from "../store/actions/auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Footer from "../components/footer/footer";


export default function Profile() {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const passPattern = new RegExp(
    "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})"
  );
  const { auth } = useSelector((state) => ({ ...state }));

  const [data, setData] = useState({
    userName: auth.userName,
    password: auth.userPassword,
  });
  const [userFormErrors, setUserFormError] = useState({
    userNameErr: null,
    passwordErr: null,
  });
  const [openEdit, setOpenEdit] = useState(false);

  useEffect(() => { }, [data]);

  const toggleBox = () => {
    setOpenEdit(true);
  };
  const handelFormChange = (e) => {
    if (e.target.name === "userName") {
      setData({
        ...data,
        userName: e.target.value,
      });
      setUserFormError({
        ...userFormErrors,
        userNameErr:
          e.target.value.length === 0
            ? "this filed is requird"
            : e.target.value.length < 2
              ? "Name Length must bigger than 2"
              : null,
      });
    } else if (e.target.name === "password") {
      setData({
        ...data,
        password: e.target.value,
      });
      setUserFormError({
        ...userFormErrors,
        passwordErr:
          e.target.value.length === 0
            ? "this filed is requird"
            : !passPattern.test(e.target.value)
              ? "password lenght not less than 8 characters , contains at least one upercase"
              : null,
      });
    }
  };
  // console.log(data, "DATA");
  const saveData = () => {
    setOpenEdit(false);
    console.log(auth);
    auth.userName = data.userName;
    auth.userPassword = data.password;
    editProfile(auth)
      .then((res) => {
        window.localStorage.setItem("auth", JSON.stringify(auth));
      })
      .catch((err) => {
        navigate("/login");
        dispatch({
          type: "LOGOUT",
          payload: null,
        });
        window.localStorage.removeItem("auth");
        console.log(err);
      });
  };

  return (
    <>
      <div className="bg-light py-5" style={{ minHeight: "63.4vh" }}>
        <div className="container">
          <div className="row ">
            <div className="col-4 shadow py-4">
              <ul className="list-group">
                <Link
                  className="me-3 active list-group-item list-group-item-action  border-light fs-5"
                  to={"/profile"}
                  exact="true"
                >
                  Profile
                </Link>

                <Link
                  className="me-3 list-group-item list-group-item-action  border-light fs-5"
                  to={"/booking"}
                  exact="true"
                >
                  My Booking
                </Link>
              </ul>
            </div>
            <div className="col-8 ps-5 mt-5">
              <h4 className="fw-bold">Personail Details</h4>
              <p>Update your info and find out how it's used.</p>
              <div className="box my-3 py-3 ">
                <div className="row">
                  <div className="col-12 px-0">
                    <div className="w-100 d-flex">
                      <h4 className="fw-bold">User Details</h4>

                      <i
                        className="fa-solid fa-pen ms-auto fs-5 mt-3"
                        onClick={toggleBox}
                      ></i>
                    </div>
                    <div className="box my-3 p-2 py-3 d-flex uBox w-100">
                      <div className="pt-2 ps-1">
                        {openEdit ? (
                          <h1 className="letter fs-1 text-capitalize">
                            {auth.userName.charAt(0)}
                          </h1>
                        ) : (
                          <h1 className="letter fs-1 text-capitalize">
                            {data.userName.charAt(0)}
                          </h1>
                        )}
                      </div>
                      <div className="ms-5 w-100 d-flex">
                        <div>
                          <h5 className="fw-bold mb-2">Name</h5>
                          {openEdit ? (
                            <>
                              <h5 className="fw-normal">{auth.userName}</h5>
                            </>
                          ) : (
                            <h5 className="fw-normal">{data.userName}</h5>
                          )}
                        </div>
                        {openEdit ? (
                          <>
                            <input
                              type="text"
                              name="userName"
                              value={data.userName}
                              onChange={(e) => handelFormChange(e)}
                              className="form-control w-50 h-50 mt-auto ms-4"
                            ></input>
                            <div
                              id="userName"
                              className="text-danger form-text mt-5 ms-2"
                            >
                              {userFormErrors.userNameErr}
                            </div>
                          </>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mt-4">
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
                  <div className="col-md-6 my-2">
                    <h6>Password</h6>
                  </div>
                  <div className="col-md-6 d-flex my-2">
                    {openEdit ? (
                      <>
                        <h6 className=""></h6>
                      </>
                    ) : (
                      <h6 className="">**********</h6>
                    )}
                    {openEdit ? (
                      <>
                        <input
                          type="password"
                          name="password"
                          value={data.password}
                          onChange={(e) => handelFormChange(e)}
                          className="form-control w-50"
                        ></input>
                        <div id="password" className="text-danger form-text">
                          {userFormErrors.passwordErr}
                        </div>
                      </>
                    ) : null}
                    <div className="ms-auto">
                      <a
                        onClick={toggleBox}
                        onChange={(e) => handelFormChange(e)}
                      ></a>
                    </div>
                  </div>
                  <hr></hr>
                  {openEdit ? (
                    <button
                      className="btn btn-secondary w-25 ms-auto my-4"
                      value="Save"
                      type="submit"
                      onClick={saveData}
                      disabled={
                        userFormErrors.userNameErr || userFormErrors.passwordErr
                      }
                    >
                      Save
                    </button>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />

    </>

  );
}
