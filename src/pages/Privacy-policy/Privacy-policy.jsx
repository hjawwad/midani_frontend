import React from "react";
import { useTranslation } from "react-i18next";
import CustomFooter from "../../components/Footer/Footer";
import CustomNavbar from "../../components/Navbar/Navabr";
import "./Privacy-policy.css";

const PrivacyPolicy = () => {
  const { i18n, t } = useTranslation();
  return (
    <>
      <div className="privacy-policy">
        <div className="backgroundImg1">
          <CustomNavbar />
          <div className="container text-white cutom-font mt-5 pb-5">
            <div className="d-flex justify-content-center">
              <h3 className="text-center title">{t("privacy.title")}</h3>
            </div>

            <div className={`${i18n.language === "ar" && "comma"} mt-5`}>
              {t("privacy.text1")}
            </div>
            <br />
            <div className={`${i18n.language === "ar" && "comma"}`}>
              <strong>{t("privacy.heading1")}</strong>
            </div>
            <br />

            <div className={`${i18n.language === "ar" && "comma"}`}>
              {t("privacy.heading1")}
            </div>
            <div className={`${i18n.language === "ar" && "comma"} mt-3`}>
              {t("privacy.p1")}
            </div>
            <div className={`${i18n.language === "ar" && "comma"} mt-3`}>
              {t("privacy.p2")}
            </div>
            <div className={`${i18n.language === "ar" && "comma"} mt-3`}>
              {t("privacy.p3")}
            </div>
            <div className={`${i18n.language === "ar" && "comma"} mt-3`}>
              {t("privacy.p4")}
            </div>
            <br />
            <div className={`${i18n.language === "ar" && "comma"}`}>
              <strong> {t("privacy.heading2")}</strong>
            </div>
            <br />

            <div className={`${i18n.language === "ar" && "comma"}`}>
              {t("privacy.heading3")}
            </div>
            <div className={`${i18n.language === "ar" && "comma"}`}>
              {t("privacy.p5")}
            </div>
            <div className={`${i18n.language === "ar" && "comma"} mt-3`}>
              {t("privacy.p6")}
            </div>
            <div className={`${i18n.language === "ar" && "comma"} mt-3`}>
              {t("privacy.p7")}
            </div>
            <div className={`${i18n.language === "ar" && "comma"} mt-3`}>
              {t("privacy.heading4")}
            </div>
            <div>{t("privacy.p8")}</div>
            <div className={`${i18n.language === "ar" && "comma"} mt-3`}>
              {t("privacy.heading5")}
            </div>
            <div>{t("privacy.p9")}</div>
            <div className={`${i18n.language === "ar" && "comma"} mt-3`}>
              {t("privacy.heading6")}
            </div>
            <div>{t("privacy.p10")}</div>
            <div className={`${i18n.language === "ar" && "comma"} mt-3`}>
              {t("privacy.heading7")}
            </div>
            <div className={`${i18n.language === "ar" && "comma"}`}>
              {t("privacy.p11")}
            </div>
            <br />

            <div className={`${i18n.language === "ar" && "comma"}`}>
              <strong>{t("privacy.heading8")}</strong>
            </div>
            <br />
            <div className={`${i18n.language === "ar" && "comma"}`}>
              {t("privacy.p12")}
            </div>
            <br />
            <div className={`${i18n.language === "ar" && "comma"}`}>
              <strong>{t("privacy.heading9")}</strong>
            </div>
            <br />
            <div className={`${i18n.language === "ar" && "comma"}`}>
              {t("privacy.p13")}
            </div>
            <br />
            <div className={`${i18n.language === "ar" && "comma"}`}>
              <strong>{t("privacy.heading10")}</strong>
            </div>
            <br />
            <div className={`${i18n.language === "ar" && "comma"}`}>
              {t("privacy.p14")}
            </div>
            <br />
            <br />
            <div className={`${i18n.language === "ar" && "comma"}`}>
              {t("privacy.p15")}
            </div>
            <div className={`${i18n.language === "ar" && "comma"}`}>
              {t("privacy.p16")}
            </div>
            <div className={`${i18n.language === "ar" && "comma"}`}>
              {t("privacy.p17")}
            </div>
            <div className={`${i18n.language === "ar" && "comma"}`}>
              {t("privacy.p18")}
            </div>
          </div>
        </div>
      </div>
      <CustomFooter />
    </>
  );
};

export default PrivacyPolicy;
