import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import data from "./movies.json";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useParams } from "react-router";

function SingleMovie() {
  const { movid } = useParams();
  return (
    <div>
      {data.map((mov) => {
        if (mov.id == movid) {
          return (
            <Container
              style={{
                padding: "0 6%",
                background: "#f5f5f5",
                maxWidth: "1520px",
              }}
            >
              <Row style={{ textAlign: "center" }}>
                <Col id={mov.id} key={mov.id} style={{ marginBottom: "2%" }}>
                  <Card
                    style={{ backgroundColor: "transparent", border: "none" }}
                  >
                    <Row
                      class="row no-gutters"
                      style={{
                        backgroundImage: `linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%),url(${mov.backgroundIMG})`,
                        backgroundRepeat: "round",
                        minWidth: "1519px",
                        margin: "0 0 0 -91px",
                      }}
                    >
                      <Col
                        class="col image"
                        style={{
                          maxWidth: "max-content",
                          padding: "3%",
                          marginLeft: "100px",
                        }}
                      >
                        <img
                          src={mov.imageurl}
                          id="img"
                          alt="movie image"
                          width="300"
                          style={{
                            borderRadius: "16px 16px 0px 0px",
                            objectFit: "cover",
                            cursor: "pointer",
                            width: "auto",
                            height: "392px",
                          }}
                        />
                      </Col>
                      <Col>
                        <div
                          class="card-block px-2 py-5"
                          style={{ textAlign: "start" ,paddingLeft: "8rem !important"}}
                        >
                          <img
                            src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png"
                            alt="tvod-tag"
                            width="90"
                            height="20"
                            class="styles__ImageTag-sc-qswwm9-12 iMjFDD"
                          />
                          <h1 class="card-title text-white">{mov.title}</h1>
                          <p class="card-text text-white">{mov.detailMore}</p>
                          <p class="card-text text-white">{mov.actor}</p>

                          <ButtonGroup size="lg" className="mb-2">
                            <Button
                              href="#"
                              style={{
                                background: "red",
                                border: "none",
                                margin: "0 12px 0 0",
                              }}
                            >
                              Get Tickets
                            </Button>
                            <Button
                              href="#"
                              style={{ background: "red", border: "none" }}
                            >
                              Play
                            </Button>
                          </ButtonGroup>
                        </div>
                      </Col>
                    </Row>
                    <br />
                    <Row
                      class="card-footer row w-100"
                      style={{ textAlign: "start" }}
                    >
                      <h4>About The Movie</h4>
                      <p>{mov.aboutmovie}</p>
                    </Row>
                  </Card>
                </Col>
              </Row>
            </Container>
          );
        }
      })}
    </div>
  );
}

export default SingleMovie;
