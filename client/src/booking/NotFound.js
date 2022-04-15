import { Link } from "react-router-dom";
import "./NotFound.css";
import imageeeee from "../assets/1_EQisBuMOijQT8woW0Jn6pA_auto_x2.jpg";

export default function NotFound() {
  return (
    <>
      <div className="notFound position-relative" style={{ height: "88vh" }}>
        <div>
          <img
          className="position-relative"
            src={imageeeee}
            style={{ maxHeight: "90vh", width: "100%" }}
            alt=""
          />
          <Link
            to={"/"}
            className="text-decoration-none position-absolute nntlink"
          >
            <i className="fa-solid fa-arrow-left-long"></i> Back to our site
          </Link>
        </div>
      </div>
    </>
  );
}
