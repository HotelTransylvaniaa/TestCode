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
              <Link
                className="me-3 list-group-item list-group-item-action  border-light fs-5"
                to={"/booking"}
                exact="true"
              >
                My Booking
              </Link>
              <Link
                className="me-3 list-group-item list-group-item-action  border-light fs-5"
                to={"/profile"}
                exact="true"
              >
                Profile
              </Link>
            </ul>
          </div>
          <div className="col-8 ps-5 mt-5">
            <h4 className="fw-bold">My bBooking</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
