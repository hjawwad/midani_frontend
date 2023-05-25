import React from "react";
import CustomFooter from "../../components/Footer/Footer";
import CustomNavbar from "../../components/Navbar/Navabr";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./News.css";
import NewsCard from "../../components/Card/News-card";
import Search from "../../components/Search/Search";

const News = () => {
  return (
    <>
      <div className="newscontainer">
        <div className="backgroundImg1">
          <CustomNavbar />
          <div className="d-flex justify-content-center">
            <h3 className="text-center title">MAKING WAVES.</h3>
          </div>
          <p className="text-center desc">
            We don’t just break news, we make news. Check out what’s hot below
            and stay in the know with our social media.
          </p>
          <div className="content">
            <div style={{ margin: "0 30px", height: "530px" }}>
              <div
                className="backgroundImg2"
                style={{
                  background: `url(${"/images/news.png"}) no-repeat`,
                }}
              >
                <h3>Lorem ipsum dolor sit ame</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam sit amet ante ligula.{" "}
                </p>
              </div>
            </div>
            <div className="news">
              <div className="news-list">
                <span className="active">View all</span>
                <span>Football</span>
                <span>Basketball</span>
                <span>Tennis</span>
                <span>Hockey</span>
                <span>Interviews</span>
                <span>
                  <ChevronRightIcon />
                </span>
              </div>

              <img
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
