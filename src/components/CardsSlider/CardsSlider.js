import "./CardsSlider.css";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function CardsSlider() {
  return (
    <div style={{ marginBottom: "5%", background: "#f1f1f1", padding: "5%" }}>
      <h2>Recommended Movies</h2>
      <Carousel indicators={false}>
        <Carousel.Item>
          <CardGroup
            xs={6}
            lg={3}
            md={4}
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "space-evenly",
            }}
          >
            <Card
              className="bg-dark text-white "
              style={{
                maxWidth: "220px",
              }}
            >
              <a style={{color:"unset",textDecoration:"none"}} href="/movies/61e91c4d2aa40f449466b25b">
                <Card.Img src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/dune-et00122526-14-01-2022-11-37-05.jpg" />

                <Card.Body>
                  <Card.Title>Dune</Card.Title>
                  <Card.Text>Action/Adventure/Drama/Sci-Fi</Card.Text>
                </Card.Body>
              </a>
            </Card>
            <Card
              className="bg-dark text-white"
              style={{
                maxWidth: "220px",
              }}
            >
              <a style={{color:"unset",textDecoration:"none"}} href="/movies/61e59e60d17ac55880333f01">
                <Card.Img src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/venom-let-there-be-carnage-et00122532-25-12-2021-10-10-53.jpg" />

                <Card.Body>
                  <Card.Title>Venom : Let There Be Carnage</Card.Title>
                  <Card.Text>Action/Horror/Sci-Fi/Thriller</Card.Text>
                </Card.Body>
              </a>
            </Card>
            <Card
              className="bg-dark text-white"
              style={{
                maxWidth: "220px",
              }}
            >
              <a style={{color:"unset",textDecoration:"none"}} href="/movies/61e918a42aa40f449466b25a">
                <Card.Img src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/fast-and-furious-9-et00056556-30-11-2021-11-09-06.jpg" />

                <Card.Body>
                  <Card.Title>Fast and Furious 9</Card.Title>
                  <Card.Text>Action/Adventure/Crime/Thriller</Card.Text>
                </Card.Body>
              </a>
            </Card>
            <Card
              className="bg-dark text-white"
              style={{
                maxWidth: "220px",
              }}
            >
              <a style={{color:"unset",textDecoration:"none"}} href="/movies/61e6bce71303590966f571b5">
                <Card.Img src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/bell-bottom-et00117102-14-08-2021-04-33-35.jpg" />

                <Card.Body>
                  <Card.Title>Bell Bottom</Card.Title>
                  <Card.Text>Action/Thriller</Card.Text>
                </Card.Body>
              </a>
            </Card>
          </CardGroup>
        </Carousel.Item>
        <Carousel.Item>
          <CardGroup
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "space-evenly",
            }}
          >
            <Card
              className="bg-dark text-white"
              style={{
                maxWidth: "220px",
              }}
            >
              <a style={{color:"unset",textDecoration:"none"}} href="/movies/61e6bd241303590966f571b7">
                <Card.Img src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/shershaah-et00124017-16-07-2021-08-26-14.jpg" />

                <Card.Body>
                  <Card.Title>Shershaah</Card.Title>
                  <Card.Text> Action/Biography/War </Card.Text>
                </Card.Body>
              </a>
            </Card>
            <Card
              className="bg-dark text-white"
              style={{
                maxWidth: "220px",
              }}
            >
              <a style={{color:"unset",textDecoration:"none"}} href="/movies/61e5a119d17ac55880333f02">
                <Card.Img src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/spider-man-no-way-home-et00310790-07-12-2021-07-25-42.jpg" />

                <Card.Body>
                  <Card.Title>Spider-Man No Way Home</Card.Title>
                  <Card.Text>Action/Adventure/Sci-Fi</Card.Text>
                </Card.Body>
              </a>
            </Card>
            <Card
              className="bg-dark text-white"
              style={{
                maxWidth: "220px",
              }}
            >
              <a style={{color:"unset",textDecoration:"none"}} href="/movies/61e5a5c0d17ac55880333f03">
                <Card.Img src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/the-matrix-resurrections-et00133391-24-11-2021-12-59-51.jpg" />

                <Card.Body>
                  <Card.Title>Matrix Resurrections</Card.Title>
                  <Card.Text> Action/Thriller/Sci-fi</Card.Text>
                </Card.Body>
              </a>
            </Card>
            <Card
              className="bg-dark text-white"
              style={{
                maxWidth: "220px",
              }}
            >
              <a style={{color:"unset",textDecoration:"none"}} href="/movies/61e5aa42d17ac55880333f04">
                <Card.Img src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/pushpa--the-rise-et00129538-08-12-2021-01-21-46.jpg" />

                <Card.Body>
                  <Card.Title>Pushpa: The Rise - Part 01</Card.Title>
                  <Card.Text>Action/Thriller</Card.Text>
                </Card.Body>
              </a>
            </Card>
          </CardGroup>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CardsSlider;
