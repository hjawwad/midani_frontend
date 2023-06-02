import CustomFooter from "../../components/Footer/Footer";
import CustomNavbar from "../../components/Navbar/Navabr";
import Search from "../../components/Search/Search";
import "./News-detail.css";
import { useTranslation } from "react-i18next";

const NewsDetail = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className="detailcontainer">
        <div className="backgroundImg1">
          <CustomNavbar />
          <div className="content">
            <div className="content2">
              <div
                className="backgroundImg2"
                style={{
                  background: `url(${"/images/news.png"}) no-repeat`,
                }}
              />
            </div>
            <div
              className="details"
              style={{
                textAlign: i18n.language === "ar" && "right",
              }}
            >
              <h2>{t("newsDetails.title")}</h2>
              <p
                className={`${i18n.language === "ar" && "comma"}`}
                style={{
                  marginLeft: i18n.language === "ar" && "auto",
                  width: i18n.language === "ar" && "100%",
                }}
              >
                {t("newsDetails.text1")}
              </p>
              <p
                className={`${i18n.language === "ar" && "comma"}`}
                style={{
                  marginLeft: i18n.language === "ar" && "auto",
                  width: i18n.language === "ar" && "100%",
                }}
              >
                {t("newsDetails.text2")}
              </p>
              <p
                className={`${i18n.language === "ar" && "comma"}`}
                style={{
                  marginLeft: i18n.language === "ar" && "auto",
                  width: i18n.language === "ar" && "100%",
                }}
              >
                {t("newsDetails.text3")}
              </p>
              <p
                className={`${i18n.language === "ar" && "comma"}`}
                style={{
                  marginLeft: i18n.language === "ar" && "auto",
                  width: i18n.language === "ar" && "100%",
                }}
              >
                {t("newsDetails.text4")}
              </p>
              <p
                className={`${i18n.language === "ar" && "comma"}`}
                style={{
                  marginLeft: i18n.language === "ar" && "auto",
                  width: i18n.language === "ar" && "100%",
                }}
              >
                {t("newsDetails.text5")}
              </p>
              <p
                className={`${i18n.language === "ar" && "comma"}`}
                style={{
                  marginLeft: i18n.language === "ar" && "auto",
                  width: i18n.language === "ar" && "100%",
                }}
              >
                {t("newsDetails.text6")}
              </p>
              <p
                className={`${i18n.language === "ar" && "comma"}`}
                style={{
                  marginLeft: i18n.language === "ar" && "auto",
                  width: i18n.language === "ar" && "100%",
                }}
              >
                {t("newsDetails.text7")}
              </p>
              {/* <span>Lorem ipsum dolor sit amet, consectetur</span>
              <span>Lorem ipsum dolor sit amet, consectetur</span> */}
            </div>
          </div>
          <Search />
        </div>
      </div>
      <CustomFooter />
    </>
  );
};
export default NewsDetail;
