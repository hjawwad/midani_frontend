import React from "react";
import { Link } from "react-router-dom";
import CustomFooter from "../../components/Footer/Footer";
import CustomNavbar from "../../components/Navbar/Navabr";
import { useTranslation } from "react-i18next";
import "./Terms-conditions.css";

const TermsCoditions = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  return (
    <>
      <div className="termscontainer">
        <div className="backgroundImg1">
          <CustomNavbar />
          <div className=" m-5 mt-4 mb-0">
            <div className="d-flex justify-content-center">
              <h3 className="text-center title">{t("terms.heading")}</h3>
            </div>
            <div
              className={`terms`}
              style={{
                textAlign: `${i18n.language === "ar" ? "end" : "right"}`,
              }}
            >
              <div>Welcome to MIDANI.COM!</div>
              <br />
              <div>{t("terms.heading")}</div>
              <br />
              <div>{t("terms.rules")}</div>
              <br />
              <div>{t("terms.accessing")}</div>
              <div className="mt-3">{t("terms.terminology")}</div>
              <div className="mt-5">
                <strong>{t("terms.Cookies")}</strong>
              </div>
              <div>{t("terms.employ")}</div>
              <div className="mt-3">{t("terms.interactive")}</div>
              <div className="mt-5">
                <strong>{t("terms.License")}</strong>
              </div>
              <div>{t("terms.Unless")}</div>
              <div className="mt-5">
                <strong>{t("terms.not")}</strong>
              </div>
              <br />
              <div>{t("terms.Republish")}</div>
              <div className="mt-3">{t("terms.Parts")}</div>
              <div className="mt-3">{t("terms.reserves")}</div>
              <br />
              <br />

              <div>
                <strong>{t("terms.represent")}</strong>
              </div>
              <br />
              <div>{t("terms.entitled")}</div>
              <br />
              <br />

              <div>
                <strong>{t("terms.Hyperlinking")}</strong>
              </div>
              <br />
              <div>{t("terms.Government")}</div>
              <br />
              <br />

              <div>{t("terms.consider")}</div>
              <div>{t("terms.commonly-known")}</div>
              <div>{t("terms.organizations")}</div>
              <h4 style={{ marginTop: "60px" }}>{t("terms.Approved")}</h4>
              <div>{t("terms.corporate")}</div>
              <h4 style={{ marginTop: "60px" }}>{t("terms.iFrames")}</h4>
              <div>{t("terms.prior")}</div>
              <h4 style={{ marginTop: "60px" }}> {t("terms.Liability")}</h4>
              <div>{t("terms.responsible")}</div>
              <h4 style={{ marginTop: "60px" }}>Your Privacy</h4>
              <div>
                Please read <Link to="/privacy"> Privacy Policy</Link>
              </div>
              <h4 style={{ marginTop: "60px" }}>Reservation of Rights</h4>
              <div>
                We reserve the right to request that you remove all links or any
                particular link to our Website. You approve to immediately
                remove all links to our Website upon request. We also reserve
                the right to amen these terms and conditions and it’s linking
                policy at any time. By continuously linking to our Website, you
                agree to be bound to and follow these linking terms and
                conditions.
              </div>
              <h4 style={{ marginTop: "60px" }}>
                Removal of links from our website
              </h4>
              <div>
                If you find any link on our Website that is offensive for any
                reason, you are free to contact and inform us any moment. We
                will consider requests to remove links but we are not obligated
                to or so or to respond to you directly.
              </div>
              <div>
                We do not ensure that the information on this website is
                correct, we do not warrant its completeness or accuracy; nor do
                we promise to ensure that the website remains available or that
                the material on the website is kept up to date.
              </div>
              <h4 style={{ marginTop: "60px" }}>Disclaimer</h4>
              <div>
                To the maximum extent permitted by applicable law, we exclude
                all representations, warranties and conditions relating to our
                website and the use of this website. Nothing in this disclaimer
                will:
              </div>
              <div>
                limit or exclude our or your liability for death or personal
                injury; limit or exclude our or your liability for fraud or
                fraudulent misrepresentation; limit any of our or your
                liabilities in any way that is not permitted under applicable
                law; or exclude any of our or your liabilities that may not be
                excluded under applicable law. The limitations and prohibitions
                of liability set in this Section and elsewhere in this
                disclaimer: (a) are subject to the preceding paragraph; and (b)
                govern all liabilities arising under the disclaimer, including
                liabilities arising in contract, in tort and for breach of
                statutory duty.
              </div>
              <div>
                As long as the website and the information and services on the
                website are provided free of charge, we will not be liable for
                any loss or damage of any nature.
              </div>
            </div>
          </div>
        </div>
      </div>
      <CustomFooter />
    </>
  );
};

export default TermsCoditions;
