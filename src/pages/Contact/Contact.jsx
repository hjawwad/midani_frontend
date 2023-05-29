import { Input } from "@mui/base";
import React from "react";
import CustomFooter from "../../components/Footer/Footer";
import CustomNavbar from "../../components/Navbar/Navabr";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <div className="homecontainer">
        <div className="backgroundImg1">
          <CustomNavbar />
          <div className="container">
            <div className="row mt-5">
              <div className="col-lg-6">
                <div className="col-6 ">
                  <div className="text-white contact custom-underline">
                    Contact us
                  </div>

                  <p className="text-white mt-4">
                    Want to learn more about Midani or simply want to get in
                    touch? Just drop us a line and someone will get in touch
                    with you
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="col-9">
                  <p className="text-white m-2 ">
                    Which department you wish to contact?
                    <span className="text-danger">*</span>
                  </p>
                  <select
                    class="form-select bg-dark m-2 mt-3 p-3 text-white bg-opacity-10 custom-border"
                    aria-label="Default select example"
                  >
                    <option selected>select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <input
                    className="w-100 bg-dark p-3 m-2 mt-5 text-white bg-opacity-10 custom-border"
                    placeholder="Name"
                  ></input>
                  <input
                    className="w-100 bg-dark p-3 m-2 text-white bg-opacity-10 custom-border"
                    placeholder="Email"
                  ></input>
                  <input
                    className="w-100 bg-dark p-3 m-2 text-white bg-opacity-10 custom-border"
                    placeholder="Your company"
                  ></input>
                  <input
                    className="w-100 bg-dark p-3 m-2 text-white bg-opacity-10 custom-border"
                    placeholder="Subject"
                  ></input>
                  <textarea
                    className="w-100 bg-dark p-3 m-2 text-white bg-opacity-10 rounded-6"
                    rows="5"
                    placeholder="Message"
                  ></textarea>
                  <button className="p-3 m-2 bg-danger custom-border border-danger w-25">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CustomFooter />
    </div>
  );
};

export default Contact;
