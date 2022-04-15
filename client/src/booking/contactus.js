import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { contactus } from "../store/actions/auth";
import { Link } from "react-router-dom";
import Footer from "../components/footer/footer";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handelSubmit = async (e) => {
    // alert("send user msg to backend");
    e.preventDefault();
    try {
      console.table({ name, email, msg });
      const res = contactus({ name, email, msg });
      console.log("msg from contact us", res);
      // toast.success("Your message send successful");
      toast.success("Success");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="container my-5 shadow-lg bg-body rounded" style={{ minHeight: "54.3vh" }}>
        <div className="row">
          <div className="col-7 container p-5">
            <form onSubmit={handelSubmit}>
              <h4 className="mb-3">Get in touch</h4>
              <div className="form-grou mb-2">
                <label htmlFor="name" className="form-label">
                  Enter Your name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-grou mb-2">
                <label htmlFor="email" className="form-label">
                  Enter your email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="text@mail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group mb-3">
                <label className="mb-2" htmlFor="floatingTextarea">
                  Comments
                </label>
                <textarea
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea"
                  style={{ height: "100px" }}
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
          <div className="col-5 bg-primary text-light container p-5">
            <h4 className="mb-5">Contact us</h4>
            <div className="d-flex mb-3">
              <i className="fa-solid fa-location-dot fs-5 mt-1"></i>
              <div className="d-flex">
                <h4 className="mx-3">Address : </h4>
                <p className="mt-1">ITI Assuit Universty ,Assuit ,Egypt</p>
              </div>
            </div>
            <div className="d-flex mb-3">
              <i className="fa-solid fa-phone fs-5 mt-2"></i>
              <div className="d-flex">
                <h4 className="mx-3">Phone : </h4>
                <p className="mt-1">01000000000</p>
              </div>
            </div>
            <div className="d-flex mb-3">
              <i className="fa-solid fa-message fs-5 mt-2"></i>

              <div className="d-flex">
                <h4 className="mx-3">Email : </h4>
                <p className="mt-1">ITI@gmail.com</p>
              </div>
            </div>
            <div className="d-flex mb-4">
              <i className="fa-solid fa-earth-africa fs-5 mt-2"></i>{" "}
              <div className="d-flex">
                <h4 className="mx-3">Websuit : </h4>
                <p className="mt-1">ITI.gov.eg</p>
              </div>
            </div>
            <div className="w-100 mt-4 d-flex justify-content-center">
              <a href="https://www.whatsapp.com" className="text-light">
                <i className="fa-brands fa-whatsapp fs-3 me-5"></i>
              </a>
              <a href="https://www.facebook.com" className="text-light">
                <i className="fa-brands fa-facebook fs-3 me-5"></i>
              </a>
              <a href="https://mail.google.com" className="text-light">
                <i className="fa-solid fa-envelope fs-3 me-5"></i>
              </a>
              <a href="https://twitter.com/" className="text-light">
                <i className="fa-brands fa-twitter fs-3 me-5"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
