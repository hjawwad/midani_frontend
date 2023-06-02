import CustomNavbar from "../../components/Navbar/Navabr";
import CustomFooter from "../../components/Footer/Footer";
import "./Imprint.css";

import { useTranslation } from "react-i18next";

const Imprint = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  return (
    <div>
      <div className="homecontainer">
        <div className="backgroundImg1">
          <CustomNavbar />
          <div className="container text-white cutom-font mt-5">
            <div className="text-center">
              <span className="custom-underline-text">
                <strong>Imprint</strong>
              </span>
            </div>
            <div>ESPORSA FZE LLC,</div>
            <div>Grand Tower, Office # B-1106-33</div>
            <div>Phone: +971556929500</div>
            <div>
              Email: <span>Hello@esporsa.com</span>
            </div>
            <br />

            <div>
              <strong>Presented By:</strong>
            </div>
            <div>FOUNDER & CEO</div>
            <div>CHUCRI RIZK</div>
            <br />

            <div className={`${i18n.language === "ar" && "comma"}`}>
              <strong>{t("imprint.title")}</strong>
            </div>
            <div className={`${i18n.language === "ar" && "comma"}`}>
              {t("imprint.name")}
            </div>
            <div className={`${i18n.language === "ar" && "comma"}`}>
              {t("imprint.law")}
            </div>
            <br />

            <div className={`${i18n.language === "ar" && "comma"}`}>
              {t("imprint.new1")}
            </div>
            <br />

            <div className={`${i18n.language === "ar" && "comma"}`}>
              <strong>{t("imprint.new2")}</strong>
            </div>
            <div className={`${i18n.language === "ar" && "comma"}`}>
              {t("imprint.new3")}
            </div>
            <br />
            <div className={`${i18n.language === "ar" && "comma"}`}>
              <strong>{t("imprint.new4")}</strong>
            </div>
            <div className={`${i18n.language === "ar" && "comma"}`}>
              {t("imprint.new5")}
            </div>
          </div>
        </div>
        <CustomFooter />
      </div>
    </div>
  );
};
export default Imprint;
