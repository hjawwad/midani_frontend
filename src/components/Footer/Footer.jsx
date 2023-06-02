import { MDBFooter, MDBRow, MDBCol, MDBIcon } from "mdb-react-ui-kit";
import "./Footer.css";

import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CustomFooter = () => {
  const { t, i18n } = useTranslation();

  return (
    <MDBFooter className="text-lg-start text-white footerbackgroundImg1">
      <section className="m-5 mb-0">
        <MDBRow
          className={`${i18n.language === "ar" && "custom-navbar-ar"} mt-3`}
        >
          <MDBCol
            style={{ textAlign: i18n.language === "ar" && "right" }}
            md="6"
            lg="7"
            xl="7"
            className="mx-auto "
          >
            <h6 className="text-uppercase fw-bold mb-4">
              {i18n.language === "ar" ? (
                <img src="/images/arabic-logo.svg" alt="" />
              ) : (
                <img src="/images/elogo.svg" alt="" />
              )}
            </h6>
            <p className={`${i18n.language === "ar" && "comma"}`}>
              {t("footer.text1")}
            </p>
            <p className={`${i18n.language === "ar" && "comma"}`}>
              {t("footer.text2")}
            </p>
            <div>
              <Link
                to=""
                className={`${
                  i18n.language === "ar" ? "ml4" : "me-4"
                } text-reset`}
              >
                <MDBIcon fab icon="facebook-f" />
              </Link>
              <Link
                to=""
                className={`${
                  i18n.language === "ar" ? "ml4" : "me-4"
                } text-reset`}
              >
                <MDBIcon fab icon="twitter" />
              </Link>
              <Link
                to=""
                className={`${
                  i18n.language === "ar" ? "ml4" : "me-4"
                } text-reset`}
              >
                <MDBIcon fab icon="google" />
              </Link>
              <Link
                to=""
                className={`${
                  i18n.language === "ar" ? "ml4" : "me-4"
                } text-reset`}
              >
                <MDBIcon fab icon="instagram" />
              </Link>
              <Link
                to=""
                className={`${
                  i18n.language === "ar" ? "ml4" : "me-4"
                } text-reset`}
              >
                <MDBIcon fab icon="linkedin" />
              </Link>
              <Link
                to=""
                className={`${
                  i18n.language === "ar" ? "ml4" : "me-4"
                } text-reset`}
              >
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
            <div
              className={`${
                i18n.language === "ar" && "custom-navbar-ar"
              } d-flex justify-content-between flex-wrap`}
              style={{ textAlign: i18n.language === "ar" && "right" }}
            >
              <div className="d-flex flex-column mobile">
                <h6 className="text-uppercase fw-bold mb-4">
                  {t("footer.heading1")}
                </h6>
                <p>
                  <Link to="#!" className="text-reset">
                    {t("footer.sales")}
                  </Link>
                </p>
                <p>
                  <Link to="#!" className="text-reset">
                    {t("footer.ott")}
                  </Link>
                </p>
                <p>
                  <Link to="#!" className="text-reset">
                    {t("footer.brands")}
                  </Link>
                </p>
              </div>
              <div className="d-flex flex-column mobile">
                <h6 className="text-uppercase fw-bold mb-4">
                  {t("footer.heading2")}
                </h6>
                <p>
                  <Link to="#!" className="text-reset">
                    {t("footer.news")}
                  </Link>
                </p>
                <p>
                  <Link to="#!" className="text-reset">
                    {t("footer.contact")}
                  </Link>
                </p>
              </div>
              <div className="d-flex flex-column mobile">
                <h6 className="text-uppercase fw-bold mb-4">
                  {t("footer.heading3")}
                </h6>
                <p>{t("footer.playstore")}</p>
                <p>{t("footer.googlePlay")}</p>
              </div>
              <div className="d-flex flex-column mobile">
                <h6 className="text-uppercase fw-bold mb-4">
                  {t("footer.heading4")}
                </h6>
                <p>
                  <Link to="/imprint" className="text-reset">
                    {t("footer.imprint")}
                  </Link>
                </p>
                <p>
                  <Link to="/privacy" className="text-reset">
                    {t("footer.privacypolicy")}
                  </Link>
                </p>
                <p>
                  <Link to="/terms" className="text-reset">
                    {t("footer.terms")}
                  </Link>
                </p>
              </div>
            </div>
            <div
              className="d-flex flex-column logo"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.05)",
                alignItems: i18n.language === "ar" && "flex-start",
              }}
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
