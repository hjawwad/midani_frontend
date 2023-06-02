import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import "./Navbar.css";

const CustomNavbar = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [navActive, setNavActive] = useState(
    localStorage.getItem("navActive") || "home"
  );

  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Navbar
      style={{ display: "flex", flexDirection: "row-reverse" }}
      expand="lg"
      bg="transparent"
      variant="dark"
    >
      <Navbar.Brand
        className="logo"
        onClick={() => {
          setNavActive("home");
          localStorage.setItem("navActive", "home");
        }}
        href="/"
      >
        <img src="/images/elogo.svg" alt="" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <div
          className="nav1"
          style={{ display: "flex", flexDirection: "row-reverse" }}
        >
          <Nav style={{ display: "flex", flexDirection: "row-reverse" }}>
            <Nav.Link
              style={{
                color: navActive === "home" && "white",
                opacity: navActive === "home" && 1,
              }}
              href="/"
              onClick={() => {
                setNavActive("home");
                localStorage.setItem("navActive", "home");
              }}
            >
              {t("navbar.home")}
            </Nav.Link>
            <Nav.Link
              style={{
                color: navActive === "sales" && "white",
                opacity: navActive === "sales" && 1,
              }}
              href="/sales"
              onClick={() => {
                setNavActive("sales");
                localStorage.setItem("navActive", "sales");
              }}
            >
              {t("navbar.sales")}
            </Nav.Link>
            <Nav.Link
              style={{
                color: navActive === "brandsstory" && "white",
                opacity: navActive === "brandsstory" && 1,
              }}
              onClick={() => {
                setNavActive("brandsstory");
                localStorage.setItem("navActive", "brandsstory");
              }}
              href="/brandsstory"
            >
              {t("navbar.brands")}
            </Nav.Link>
            <Nav.Link
              style={{
                color: navActive === "news" && "white",
                opacity: navActive === "news" && 1,
              }}
              href="/news"
              onClick={() => {
                setNavActive("news");
                localStorage.setItem("navActive", "news");
              }}
            >
              {t("navbar.news")}
            </Nav.Link>
            <Nav.Link
              style={{
                color: navActive === "ott" && "white",
                opacity: navActive === "ott" && 1,
              }}
              href="/ott"
              onClick={() => {
                setNavActive("ott");
                localStorage.setItem("navActive", "ott");
              }}
            >
              {t("navbar.ott")}
            </Nav.Link>
            <Nav.Link
              style={{
                color: navActive === "about" && "white",
                opacity: navActive === "about" && 1,
              }}
              onClick={() => {
                setNavActive("about");
                localStorage.setItem("navActive", "about");
              }}
              href="/about"
            >
              {t("navbar.about")}
            </Nav.Link>
            <Nav.Link
              style={{
                color: navActive === "contact" && "white",
                opacity: navActive === "contact" && 1,
              }}
              onClick={() => {
                setNavActive("contact");
                localStorage.setItem("navActive", "contact");
              }}
              href="/contact"
            >
              {t("navbar.contact")}
            </Nav.Link>
          </Nav>
          <Nav style={{ display: "flex", flexDirection: "row-reverse" }}>
            <div className="navcontainer d-flex">
              <select
                className="desktop"
                onChange={(e) => changeLanguage(e.target.value)}
              >
                <option value="en">Eng</option>
                <option value="ar">Ar</option>
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
