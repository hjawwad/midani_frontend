import React from "react";
import CustomFooter from "../../components/Footer/Footer";
import CustomNavbar from "../../components/Navbar/Navabr";
import "./Privacy-policy.css";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="privacy-policy">
        <div className="backgroundImg1">
          <CustomNavbar />

          <div className="d-flex justify-content-center">
            <h3 className="text-center title">Privacy Policy</h3>
          </div>
        </div>
      </div>
      <CustomFooter />
    </>
  );
};

export default PrivacyPolicy;
