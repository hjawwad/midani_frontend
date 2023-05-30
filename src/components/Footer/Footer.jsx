import { MDBFooter, MDBRow, MDBCol, MDBIcon } from "mdb-react-ui-kit";
import "./Footer.css";

import React from "react";
import { Link } from "react-router-dom";

const CustomFooter = () => {
  return (
    <MDBFooter className="text-lg-start text-white footerbackgroundImg1">
      <section className="m-5 mb-0">
        <MDBRow className="mt-3">
          <MDBCol md="6" lg="7" xl="7" className="mx-auto ">
            <h6 className="text-uppercase fw-bold mb-4">
              <img src="/images/elogo.svg" alt="" />
            </h6>
            <p>No one gets you closer!</p>
            <p>follow us on:</p>
            <div>
              <Link to="" className="me-4 text-reset">
                <MDBIcon fab icon="facebook-f" />
              </Link>
              <Link to="" className="me-4 text-reset">
                <MDBIcon fab icon="twitter" />
              </Link>
              <Link to="" className="me-4 text-reset">
                <MDBIcon fab icon="google" />
              </Link>
              <Link to="" className="me-4 text-reset">
                <MDBIcon fab icon="instagram" />
              </Link>
              <Link to="" className="me-4 text-reset">
                <MDBIcon fab icon="linkedin" />
              </Link>
              <Link to="" className="me-4 text-reset">
                <MDBIcon fab icon="github" />
              </Link>
            </div>
            <img
              className="show-mobile"
              src="/images/footerlogo.svg"
              style={{ width: "250px" }}
              alt=""
            />
          </MDBCol>

          <MDBCol md="6" lg="5" xl="5" className="mx-auto mycol">
            <div className="d-flex justify-content-between flex-wrap">
              <div className="d-flex flex-column mobile">
                <h6 className="text-uppercase fw-bold mb-4">Work with us</h6>
                <p>
                  <Link to="#!" className="text-reset">
                    Sales
                  </Link>
                </p>
                <p>
                  <Link to="#!" className="text-reset">
                    OTT
                  </Link>
                </p>
                <p>
                  <Link to="#!" className="text-reset">
                    Brands story
                  </Link>
                </p>
              </div>
              <div className="d-flex flex-column mobile">
                <h6 className="text-uppercase fw-bold mb-4">About</h6>
                <p>
                  <Link to="#!" className="text-reset">
                    News
                  </Link>
                </p>
                <p>
                  <Link to="#!" className="text-reset">
                    Contact
                  </Link>
                </p>
              </div>
              <div className="d-flex flex-column mobile">
                <h6 className="text-uppercase fw-bold mb-4">Try our app</h6>
                <p>App store</p>
                <p>Google play</p>
              </div>
              <div className="d-flex flex-column mobile">
                <h6 className="text-uppercase fw-bold mb-4">Legal</h6>
                <p>
                  <Link to="/imprint" className="text-reset">
                    Imprint
                  </Link>
                </p>
                <p>
                  <Link to="/privacy" className="text-reset">
                    Privacy policy
                  </Link>
                </p>
                <p>
                  <Link to="/terms" className="text-reset">
                    Terms of use
                  </Link>
                </p>
              </div>
            </div>
            <div
              className="d-flex flex-column logo"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
            >
              <img
                className="hide"
                src="/images/footerlogo.svg"
                style={{ width: "250px" }}
                alt=""
              />
              <span className="colyright">© 2023 Midani</span>
            </div>
          </MDBCol>
        </MDBRow>
      </section>
    </MDBFooter>
  );
};

export default CustomFooter;
