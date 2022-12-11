import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { useState, useEffect } from "react";

function AllMoviesFetch() {
  const [data, setData] = useState([]);

  useEffect(async () => {
    try {
      const response = await axios.get("https://bms-back-end.onrender.com/movies");
      console.log(response);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <div>
      <Container
        style={{
          padding: "8%",
          background:
            "#f1f1f1" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
          maxWidth: "1520px",
          minHeight: "410px"
        }}
      >
        <Row style={{ textAlign: "center" }}>
          {data.map((mov) => (
            <Col
              className="movies"
              id={mov._id}
              key={mov._id}
              xs={6}
              md={4}
              lg={3}
              style={{ marginBottom: "3%" }}
              className="allMovies"
            >
              <Card
                onClick={() => (window.location.href = "/movies/" + mov._id)}
                style={{
                  maxWidth: "200px",
                  cursor: "pointer",
                  background: "transparent",
                  border: "none",
                }}
              >
                <Card.Img src={mov.imageurl} />
                <Card.Body>
                  <Card.Title>{mov.title}</Card.Title>
                  <Card.Text>{mov.actor}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default AllMoviesFetch;
