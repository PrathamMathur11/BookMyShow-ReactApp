// import '. Premieres.css'
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function Premieres() {
  return (
    <div
      style={{ marginBottom: "5%", background: "#2c3148", padding: "1% 9.5%" }}
    >
      <img
        alt=""
        class=""
        style={{
          borderRadius: "0px",
          opacity: "1",
          transition: "all 0.5s ease 0s",
          width: "100%",
          minHeight: "inherit",
          maxHeight: "inherit",
        }}
        src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
      />
      <h2 className="text-white">Premieres</h2>
      <Carousel indicators={false}>
        <Carousel.Item>
          <CardGroup
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "space-evenly",
              padding:"20px 0"
            }}
          >
            <Card
              className="bg-dark text-white home"
              style={{ maxWidth: "200px" }}
            >
              <a href="/movies/61e5a119d17ac55880333f02">
                <Card.Img src="https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/spider-man-no-way-home-et00310790-12-04-2022-11-03-45.jpg" />
              </a>
              <Card.Body>
                <Card.Title>Spider-Man</Card.Title>
                <Card.Text>No Way Home</Card.Text>
              </Card.Body>
            </Card>
            <Card
              className="bg-dark text-white home"
              style={{
                maxHeight: "450px",
                maxWidth: "200px",
              }}
            >
              <a href="/movies/61e5a5c0d17ac55880333f03">
                <Card.Img src="https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/the-matrix-resurrections-et00133391-17-03-2022-12-14-17.jpg" />
              </a>
              <Card.Body>
                <Card.Title>The Matrix</Card.Title>
                <Card.Text>Resurrections</Card.Text>
              </Card.Body>
            </Card>
            <Card
              className="bg-dark text-white home"
              style={{
                maxHeight: "450px",
                maxWidth: "200px",
              }}
            >
              <a href="/movies/61e5a119d17ac55880333f02">
                <Card.Img src="https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/spider-man-no-way-home-et00310790-12-04-2022-11-03-45.jpg" />
              </a>
              <Card.Body>
                <Card.Title>Spider-Man</Card.Title>
                <Card.Text>No Way Home</Card.Text>
              </Card.Body>
            </Card>
            <Card
              className="bg-dark text-white home"
              style={{
                maxHeight: "450px",
                maxWidth: "200px",
              }}
            >
              <a href="/movies/61e5a5c0d17ac55880333f03">
                <Card.Img src="https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/the-matrix-resurrections-et00133391-17-03-2022-12-14-17.jpg" />
              </a>
              <Card.Body>
                <Card.Title>The Matrix</Card.Title>
                <Card.Text>Resurrections</Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </Carousel.Item>
        <Carousel.Item>
          <CardGroup
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "space-evenly",
              padding:"20px 0"
            }}
          >
            <Card
              className="bg-dark text-white home"
              style={{
                maxHeight: "450px",
                maxWidth: "200px",
              }}
            >
              <a href="/movies/61e5a5c0d17ac55880333f03">
                <Card.Img src="https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/the-matrix-resurrections-et00133391-17-03-2022-12-14-17.jpg" />
              </a>
              <Card.Body>
                <Card.Title>The Matrix</Card.Title>
                <Card.Text>Resurrections</Card.Text>
              </Card.Body>
            </Card>
            <Card
              className="bg-dark text-white home"
              style={{
                maxHeight: "450px",
                maxWidth: "200px",
              }}
            >
              <a href="/movies/61e5a119d17ac55880333f02">
                <Card.Img src="https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/spider-man-no-way-home-et00310790-12-04-2022-11-03-45.jpg" />
              </a>
              <Card.Body>
                <Card.Title>Spider-Man</Card.Title>
                <Card.Text>No Way Home</Card.Text>
              </Card.Body>
            </Card>
            <Card
              className="bg-dark text-white home"
              style={{
                maxHeight: "450px",
                maxWidth: "200px",
              }}
            >
              <a href="/movies/61e5a5c0d17ac55880333f03">
                <Card.Img src="https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/the-matrix-resurrections-et00133391-17-03-2022-12-14-17.jpg" />
              </a>
              <Card.Body>
                <Card.Title>The Matrix</Card.Title>
                <Card.Text>Resurrections</Card.Text>
              </Card.Body>
            </Card>
            <Card
              className="bg-dark text-white home"
              style={{
                maxHeight: "450px",
                maxWidth: "200px",
              }}
            >
              <a href="/movies/61e5a119d17ac55880333f02">
                <Card.Img src="https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/spider-man-no-way-home-et00310790-12-04-2022-11-03-45.jpg" />
              </a>
              <Card.Body>
                <Card.Title>Spider-Man</Card.Title>
                <Card.Text>No Way Home</Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Premieres;
