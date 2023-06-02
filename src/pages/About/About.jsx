import React, { useState } from "react";
import CustomFooter from "../../components/Footer/Footer";
import CustomNavbar from "../../components/Navbar/Navabr";
import Search from "../../components/Search/Search";
import { useTranslation } from "react-i18next";
import "./About.css";

const About = () => {
  const [showFullParagraph1, setShowFullParagraph1] = useState(true);
  const [showFullParagraph2, setShowFullParagraph2] = useState(false);
  const [showFullParagraph3, setShowFullParagraph3] = useState(false);
  const [showFullParagraph4, setShowFullParagraph4] = useState(false);
  const [showFullParagraph5, setShowFullParagraph5] = useState(false);
  const [showFullParagraph6, setShowFullParagraph6] = useState(false);
  const [showFullParagraph7, setShowFullParagraph7] = useState(false);
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  const toggleParagraph1 = () => {
    setShowFullParagraph1(!showFullParagraph1);
  };

  const toggleParagraph2 = () => {
    setShowFullParagraph2(!showFullParagraph2);
  };

  const toggleParagraph3 = () => {
    setShowFullParagraph3(!showFullParagraph3);
  };

  const toggleParagraph4 = () => {
    setShowFullParagraph4(!showFullParagraph4);
  };

  const toggleParagraph5 = () => {
    setShowFullParagraph5(!showFullParagraph5);
  };

  const toggleParagraph6 = () => {
    setShowFullParagraph6(!showFullParagraph6);
  };

  const toggleParagraph7 = () => {
    setShowFullParagraph7(!showFullParagraph7);
  };

  const renderParagraph = (paragraph, showFullParagraph) => {
    if (showFullParagraph) {
      return paragraph;
    }
    return paragraph.substring(0, 640);
  };

  return (
    <div>
      <div className="homecontainer">
        <div className="backgroundImg111">
          <CustomNavbar />

          <div className={`d-flex flex-column align-items-center`}>
            <div
              className={`${
                i18n.language === "ar" && "custom-navbar-ar"
              } mt-6 main-about`}
              style={{ width: "90%" }}
            >
              <div className="internal-div">
                <div className="para-heading text-white custom-underline">
                  {t("about.para1.heading")}
                </div>
                <p className="about-para text-white">
                  {renderParagraph(t("about.para1.para"), showFullParagraph1)}
                </p>
                {showFullParagraph1 || (
                  <>
                    <br />
                    <div
                      className="text-white readButton"
                      onClick={toggleParagraph1}
                    >
                      <strong>{t("about.read")}</strong>
                    </div>
                  </>
                )}
              </div>
              <div className="d-flex internal-div justify-content-center">
                <img src="/images/iPhone14-0.svg" alt="Responsive"></img>
              </div>
            </div>
            {/* style={{ display: "flex", justifyContent: "center" }} */}
            <div>
              <div
                style={{ position: "relative", top: "350px" }}
                className="vectors"
              >
                <img
                  src="/images/v-line1.png"
                  style={{
                    position: "absolute",
                    top: "10px",
                    zIndex: -1,
                    backgroundSize: "contain",
                    objectFit: "contain",
                  }}
                  alt="Responsive"
                ></img>
                <img
                  src="/images/v-line1.png"
                  style={{
                    position: "absolute",
                    top: "30px",
                    zIndex: -1,
                    backgroundSize: "contain",
                    objectFit: "contain",
                  }}
                  alt="Responsive"
                ></img>
                <img
                  src="/images/v-line1.png"
                  style={{
                    position: "absolute",
                    top: "50px",
                    zIndex: -1,
                    backgroundSize: "contain",
                    objectFit: "contain",
                  }}
                  alt="Responsive"
                ></img>
                <img
                  src="/images/v-line1.png"
                  style={{
                    position: "absolute",
                    top: "70px",
                    zIndex: -1,
                    backgroundSize: "contain",
                    objectFit: "contain",
                  }}
                  alt="Responsive"
                ></img>
              </div>
              <div
                className={`${
                  i18n.language === "ar" && "custom-navbar-ar"
                } mt-6 main-about reverse-col`}
                style={{ width: "90%" }}
              >
                <div className="internal-div d-flex justify-content-center">
                  <img src="/images/iPhone14-1.svg" alt="Responsive"></img>
                </div>
                <div className="internal-div float-sm-left">
                  <div className="para-heading text-white custom-underline">
                    {t("about.para2.heading")}
                    <span style={{ color: "#BC0D1A" }}>?</span>
                  </div>
                  <p className="about-para text-white">
                    {renderParagraph(t("about.para2.para"), showFullParagraph2)}
                  </p>
                  {showFullParagraph2 || (
                    <>
                      <br />
                      <div
                        className="text-white readButton"
                        onClick={toggleParagraph2}
                      >
                        <strong>{t("about.read")}</strong>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div>
              <div
                style={{ position: "relative", top: "700px" }}
                className="vectors"
              >
                <img
                  src="/images/v-line2.svg"
                  style={{
                    position: "absolute",
                    top: "10px",
                    zIndex: -1,
                    backgroundSize: "contain",
                    objectFit: "contain",
                  }}
                  alt="Responsive"
                ></img>
                <img
                  src="/images/v-line2.svg"
                  style={{
                    position: "absolute",
                    top: "30px",
                    zIndex: -1,
                    backgroundSize: "contain",
                    objectFit: "contain",
                  }}
                  alt="Responsive"
                ></img>
                <img
                  src="/images/v-line2.svg"
                  style={{
                    position: "absolute",
                    top: "50px",
                    zIndex: -1,
                    backgroundSize: "contain",
                    objectFit: "contain",
                  }}
                  alt="Responsive"
                ></img>
                <img
                  src="/images/v-line2.svg"
                  style={{
                    position: "absolute",
                    top: "70px",
                    zIndex: -1,
                    backgroundSize: "contain",
                    objectFit: "contain",
                  }}
                  alt="Responsive"
                ></img>
                <img
                  src="/images/v-line2.svg"
                  style={{
                    position: "absolute",
                    top: "90px",
                    zIndex: -1,
                    backgroundSize: "contain",
                    objectFit: "contain",
                  }}
                  alt="Responsive"
                ></img>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div
                  className={`${
                    i18n.language === "ar" && "custom-navbar-ar"
                  } mt-6 main-about`}
                  style={{ width: "90%" }}
                >
                  <div className="internal-div">
                    <div className="para-heading text-white custom-underline">
                      {t("about.para3.heading")}
                    </div>
                    <p className="about-para text-white">
                      {renderParagraph(
                        t("about.para3.para"),
                        showFullParagraph3
                      )}
                    </p>
                    {showFullParagraph3 || (
                      <>
                        <br />
                        <div
                          className="text-white readButton"
                          onClick={toggleParagraph3}
                        >
                          <strong>{t("about.read")}</strong>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="internal-div d-flex justify-content-center">
                    <img src="/images/iPhone14-2.svg" alt="Responsive"></img>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                style={{ position: "relative", top: "1200px" }}
                className="vectors"
              >
                <img
                  src="/images/v-line3.svg"
                  style={{
                    position: "absolute",
                    top: "10px",
                    zIndex: -1,
                    backgroundSize: "contain",
                    objectFit: "contain",
                  }}
                  alt="Responsive"
                ></img>
                <img
                  src="/images/v-line3.svg"
                  style={{
                    position: "absolute",
                    top: "30px",
                    zIndex: -1,
                    backgroundSize: "contain",
                    objectFit: "contain",
                  }}
                  alt="Responsive"
                ></img>
                <img
                  src="/images/v-line3.svg"
                  style={{
                    position: "absolute",
                    top: "50px",
                    zIndex: -1,
                    backgroundSize: "contain",
                    objectFit: "contain",
                  }}
                  alt="Responsive"
                ></img>
                <img
                  src="/images/v-line3.svg"
                  style={{
                    position: "absolute",
                    top: "70px",
                    zIndex: -1,
                    backgroundSize: "contain",
                    objectFit: "contain",
                  }}
                  alt="Responsive"
                ></img>
                <img
                  src="/images/v-line3.svg"
                  style={{
                    position: "absolute",
                    top: "90px",
                    zIndex: -1,
                    backgroundSize: "contain",
                    objectFit: "contain",
                  }}
                  alt="Responsive"
                ></img>
              </div>
              <div
                className={`main-about reverse-col mt-6 ${
                  i18n.language === "ar" && "custom-navbar-ar"
                }`}
                style={{ width: "90%" }}
              >
                <div className="internal-div d-flex justify-content-center">
                  <img src="/images/iPhone14-1.svg" alt="Responsive"></img>
                </div>
                <div className="internal-div">
                  <div className="para-heading text-white custom-underline">
                    {t("about.para4.heading")}
                  </div>
                  <p className="about-para text-white">
                    {renderParagraph(t("about.para4.para"), showFullParagraph4)}
                  </p>
                  {showFullParagraph4 || (
                    <>
                      <br />
                      <div
                        className="text-white readButton"
                        onClick={toggleParagraph4}
                      >
                        <strong>{t("about.read")}</strong>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div
              className={`main-about mt-6 ${
                i18n.language === "ar" && "custom-navbar-ar"
              }`}
              style={{ width: "90%" }}
            >
              <div className="internal-div">
                <div className="para-heading text-white custom-underline">
                  {t("about.para5.heading")}
                </div>
                <p className="about-para text-white">
                  {renderParagraph(t("about.para5.para"), showFullParagraph5)}
                </p>
                {showFullParagraph5 || (
                  <>
                    <br />
                    <div
                      className="text-white readButton"
                      onClick={toggleParagraph5}
                    >
                      <strong>{t("about.read")}</strong>
                    </div>
                  </>
                )}
              </div>
              <div className="internal-div d-flex justify-content-center">
                <img src="/images/iPhone14-4.svg" alt="Responsive"></img>
              </div>
            </div>
            <div
              className={`main-about reverse-col mt-6 ${
                i18n.language === "ar" && "custom-navbar-ar"
              }`}
              style={{ width: "90%" }}
            >
              <div className="internal-div d-flex justify-content-center">
                <img src="/images/iPhone14-5.svg" alt="Responsive"></img>
              </div>
              <div className="internal-div">
                <div className="para-heading text-white custom-underline">
                  {t("about.para6.heading")}
                </div>
                <p className="about-para text-white">
                  {renderParagraph(t("about.para6.para"), showFullParagraph6)}
                </p>
                {showFullParagraph6 || (
                  <>
                    <br />
                    <div
                      className="text-white readButton"
                      onClick={toggleParagraph6}
                    >
                      <strong>{t("about.read")}</strong>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div
              className={`main-about mt-6 ${
                i18n.language === "ar" && "custom-navbar-ar"
              }`}
              style={{ width: "90%" }}
            >
              <div className="internal-div">
                <div className="para-heading text-white custom-underline">
                  {t("about.para7.heading")}
                </div>
                <p className="about-para text-white">
                  {renderParagraph(t("about.para7.para"), showFullParagraph7)}
                </p>
                {showFullParagraph7 || (
                  <>
                    <br />
                    <div
                      className="text-white readButton"
                      onClick={toggleParagraph7}
                    >
                      <strong>{t("about.read")}</strong>
                    </div>
                  </>
                )}
              </div>
              <div className="internal-div d-flex justify-content-center">
                <img src="/images/iPhone14-6.svg" alt="Responsive"></img>
              </div>
            </div>
            <div>
              <div className=" d-flex reverse-col justify-content-center mb-4">
                <div className="custom-underline-text">{t("about.love")}</div>
              </div>
              <div
                className={`d-flex justify-content-center align-items-center ${
                  i18n.language === "ar" && "custom-navbar-ar"
                }`}
              >
                <img src="/images/Vector.png" alt="Responsive" />
                <p className="ml-2 text-white">{t("about.news")}</p>
              </div>

              <div
                className={`d-flex justify-content-center align-items-center mt-2 ${
                  i18n.language === "ar" && "custom-navbar-ar"
                }`}
              >
                <img src="/images/Vector.png" alt="Responsive" />
                <p className="ml-2 text-white">{t("about.Personalized")}</p>
              </div>
              <div
                className={`d-flex justify-content-center align-items-center mt-2 ${
                  i18n.language === "ar" && "custom-navbar-ar"
                }`}
              >
                <img src="/images/Vector.png" alt="Responsive" />
                <p className="ml-2 text-white">{t("about.Original")}</p>
              </div>
              <div
                className={`d-flex justify-content-center align-items-center mt-2 ${
                  i18n.language === "ar" && "custom-navbar-ar"
                }`}
              >
                <img src="/images/Vector.png" alt="Responsive" />
                <p className="ml-2 text-white">{t("about.Live")}</p>
              </div>
              <div
                className={`d-flex justify-content-center align-items-center mt-2 ${
                  i18n.language === "ar" && "custom-navbar-ar"
                }`}
              >
                <img src="/images/Vector.png" alt="Responsive" />
                <p className="ml-2 text-white">{t("about.Subscription")}</p>
              </div>
            </div>
            <div>
              <div className=" d-flex justify-content-center mb-4">
                <div className="custom-underline-text">
                  {t("about.Partners")}
                </div>
              </div>
              <div
                className={`d-flex justify-content-center align-items-center mt-2 ${
                  i18n.language === "ar" && "custom-navbar-ar"
                }`}
              >
                <img src="/images/Vector.png" alt="Responsive" />
                <p className="ml-2 text-white">{t("about.content")}</p>
              </div>
              <div
                className={`d-flex justify-content-center align-items-center mt-2 ${
                  i18n.language === "ar" && "custom-navbar-ar"
                }`}
              >
                <img src="/images/Vector.png" alt="Responsive" />
                <p className="ml-2 text-white">{t("about.Exclusive")}</p>
              </div>
              <div
                className={`d-flex justify-content-center align-items-center mt-2 ${
                  i18n.language === "ar" && "custom-navbar-ar"
                }`}
              >
                <img src="/images/Vector.png" alt="Responsive" />
                <p className="ml-2 text-white">{t("about.engaged")}</p>
              </div>
              <div
                className={`d-flex justify-content-center align-items-center mt-2 ${
                  i18n.language === "ar" && "custom-navbar-ar"
                }`}
              >
                <img src="/images/Vector.png" alt="Responsive" />
                <p className="ml-2 text-white">{t("about.Increased")}</p>
              </div>
              <div
                className={`d-flex justify-content-center align-items-center mt-2 ${
                  i18n.language === "ar" && "custom-navbar-ar"
                }`}
              >
                <img src="/images/Vector.png" alt="Responsive" />
                <p className="ml-2 text-white">{t("about.elevate")}</p>
              </div>
            </div>
          </div>
          <Search />
        </div>
      </div>
      <CustomFooter />
    </div>
  );
};

export default About;
