import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./Navbar.css";

const CustomNavbar = () => {
  return (
    <Navbar expand="lg">
      <Navbar.Brand className="logo" href="/">
        <img src="/images/logo.png" alt="" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "90%",
            marginLeft: "auto",
          }}
        >
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#Sales">Sales</Nav.Link>
            <Nav.Link href="#Brands">Brands story</Nav.Link>
            <Nav.Link href="#News">News</Nav.Link>
            <Nav.Link href="#OTT">OTT</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Contact">Contact us</Nav.Link>
          </Nav>
          <Nav>
            <select>
              <option value="Eng">Eng</option>
              <option value="Ar">Ar</option>
            </select>
            <button className="downloadbtn">Download</button>
          </Nav>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
