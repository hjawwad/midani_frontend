import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NewsCard = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  return (
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
          <Card style={{ background: "transparent" }}>
            <div style={{ position: "relative" }}>
              <Card.Img variant="top" src="/images/news1.png" />
              <span
                style={{
                  position: "absolute",
                  right: 20,
                  bottom: 20,
                  color: "white",
                }}
              >
                Jan 13 • 14:52
              </span>
            </div>
            <Card.Body
              className={`${i18n.language === "ar" && "custom-style-ar"} `}
            >
              <Card.Title style={{ color: "white" }}>
                {t("news.cardTitle")}
              </Card.Title>
              <Card.Text
                style={{
                  color: "white",
                  opacity: "0.8",
                  unicodeBidi: i18n.language === "ar" && "isolate",
                  textAlign: i18n.language === "ar" && "right",
                  direction: i18n.language === "ar" && "rtl",
                }}
              >
                {t("news.cardDesc")}
              </Card.Text>
              <Link to="/detail">
                <span
                  className={`${i18n.language === "ar" && "custom-navbar-ar"} `}
                  style={{
                    fontSize: "20px",
                    color: "white",
                    alignItems: "center",
                  }}
                >
                  {t("news.readMore")}{" "}
                  <img
                    src="/images/arrow.png"
                    alt=""
                    style={{ width: "15px", height: "15px", margin: "0 10px" }}
                  />
                </span>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
export default NewsCard;
