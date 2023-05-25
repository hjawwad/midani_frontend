import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

const NewsCard = () => (
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
          <Card.Body>
            <Card.Title style={{ color: "white" }}>Title of News</Card.Title>
            <Card.Text style={{ color: "white", opacity: "0.8" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              sit amet ante ligula.
            </Card.Text>
            <Link to="/detail">
              <span style={{ fontSize: "20px", color: "white" }}>
                Read post{" "}
                <img
                  src="/images/arrow.png"
                  alt=""
                  style={{ width: "15px", height: "15px" }}
                />
              </span>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
);
export default NewsCard;
