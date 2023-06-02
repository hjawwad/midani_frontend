import React from "react";
import CustomFooter from "../../components/Footer/Footer";
import CustomNavbar from "../../components/Navbar/Navabr";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import "./News.css";
import NewsCard from "../../components/Card/News-card";
import Search from "../../components/Search/Search";

import { useTranslation } from "react-i18next";

const News = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  return (
    <>
      <div className="newscontainer">
        <div className="backgroundImg1">
          <CustomNavbar />
          <div className="d-flex justify-content-center">
            <h3 className="text-center title"> {t("news.title")}</h3>
          </div>
          <p className="text-center desc">{t("news.desc")}</p>
          <div className="content">
            <div style={{ margin: "0 30px", height: "530px" }}>
              <div
                className="backgroundImg2"
                style={{
                  background: `url(${"/images/news.png"}) no-repeat`,
                  display: "flex",
                  paddingRight: i18n.language === "ar" && "30px",
                  alignItems: i18n.language === "ar" && "end",
                }}
              >
                <h3>{t("news.imgTitle")}</h3>
                <p
                  style={{
                    textAlign: i18n.language === "ar" && "right",
                    unicodeBidi: i18n.language === "ar" && "isolate",
                    direction: i18n.language === "ar" && "rtl",
                  }}
                >
                  {t("news.imgDesc")}.
                </p>
              </div>
            </div>
            <div
              className={`${
                i18n.language === "ar" && "custom-navbar-ar"
              }  news`}
              style={{ paddingRight: i18n.language === "ar" && "30px" }}
            >
              <div
                className={`${
                  i18n.language === "ar" && "custom-navbar-ar"
                } news-list`}
              >
                <span className="active">{t("news.all")}</span>
                <span>{t("news.football")}</span>
                <span>{t("news.basketball")}</span>
                <span>{t("news.tennis")}</span>
                <span className="mobile">{t("news.hockey")}</span>
                <span>{t("news.interviews")}</span>
                <span className="mobile">
                  {i18n.language === "ar" ? (
                    <ChevronLeftIcon />
                  ) : (
                    <ChevronRightIcon />
                  )}
                </span>
              </div>

              <img
                className="mobile"
                src="/images/search.png"
                alt=""
                style={{ width: "30px", height: "30px", marginRight: "30px" }}
              />
            </div>
            <div className="border-bottom"></div>
            <div className="all-news">
              <NewsCard />
            </div>
          </div>
          <Search />
        </div>
      </div>
      <CustomFooter />
    </>
  );
};

export default News;
