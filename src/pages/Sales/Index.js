import React from "react";
import CustomFooter from "../../components/Footer/Footer";
import CustomNavbar from "../../components/Navbar/Navabr";

const Sales = () => {
  return (
    <>
      <div className="homecontainer">
        <div className="backgroundImg1">
          <CustomNavbar />
          <div className="d-flex justify-content-center">
            <h3 className="text-center title">Sales</h3>
          </div>
        </div>
      </div>
      <CustomFooter />
    </>
  );
};

export default Sales;