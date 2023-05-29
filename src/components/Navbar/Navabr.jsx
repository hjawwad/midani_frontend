import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "./Navbar.css";

const CustomNavbar = () => {
  const location = useLocation();
  return (
    <Navbar expand="lg" bg="transparent" variant="dark">
      <Navbar.Brand className="logo" href="/">
        <img src="/images/logo.png" alt="" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <div className="nav1">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#Sales">Sales</Nav.Link>
            <Nav.Link href="#Brands">Brands story</Nav.Link>
            <Nav.Link href="/news">News</Nav.Link>
            <Nav.Link href="#OTT">OTT</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact us</Nav.Link>
          </Nav>
          <Nav>
            <div className="navcontainer d-flex">
              <select className="desktop">
                <option value="Eng">Eng</option>
                <option value="Ar">Ar</option>
              </select>
              <div className="mobile">
                <span className="active">Eng</span>
                <span>{" | "}</span>
                <span>Ar</span>
              </div>
            </div>
            {location?.pathname === "/" && (
              <button className="downloadbtn">Download</button>
            )}
          </Nav>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
