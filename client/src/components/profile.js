import "./profile.css";
import { useEffect, useState } from "react";
// import NavAccount from "./navbar/NavAccount";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { editProfile } from "../store/actions/auth";
import { Link } from "react-router-dom";

export default function Profile() {
  const { auth } = useSelector((state) => ({ ...state }));
  console.log(auth);
  const dispatch = useDispatch();

  const [data, setData] = useState({
    userName: auth.userName,
    password: auth.userPassword,
  });

  const [openEdit, setOpenEdit] = useState(false);

  useEffect(() => {}, [data]);

  const toggleBox = () => {
    setOpenEdit(true);
  };
  const handelFormChange = (e) => {
    if (e.target.name === "userName") {
      setData({
        ...data,
        userName: e.target.value,
      });
    } else if (e.target.name === "password") {
      setData({
        ...data,
        password: e.target.value,
      });
      
    }
  };
  console.log(data, "DATA");
  const saveData = () => {
    setOpenEdit(false);
    auth.userName = data.userName;
    auth.userPassword = data.password;
    console.log(auth);
    localStorage.setItem("auth", JSON.stringify(auth));
    editProfile(auth);
  };

  return (
    <div className="bg-light my-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-3 shadow py-4">
            <ul className="list-group">
              
              <Link className="me-3 list-group-item list-group-item-action  border-light fs-5" to={"/profile"} exact="true">Profile</Link>

              <Link className="me-3 list-group-item list-group-item-action  border-light fs-5" to={"/booking"} exact="true">My Booking</Link>
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
                      class="fa-solid fa-pen ms-auto fs-5 mt-3"
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
                            className="h-50 mt-auto ms-4"
                          ></input>
                        </>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="col-md-6 my-5">
                  <h6>Email</h6>
                </div>
                <div className="col-md-6 my-4">
                  <h6 className="">{auth.userEmail}</h6>
                  <p className="fw-light">
                    This is the email address you use to sign in. It’s also
                    where we send your booking confirmations
                  </p>
                </div>
                <hr></hr>
                <div className="col-md-6 my-5">
                  <h6>Password</h6>
                </div>
                <div className="col-md-6 d-flex my-5">
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
                        className=""
                      ></input>
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
  );
}
