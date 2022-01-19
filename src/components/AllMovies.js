import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import data from "./movies.json";

function AllMovies() {
    // console.log(data)
    return (
        <div>
            <Container style={{ padding: "8%", background: "#f5f5f5", maxWidth: "1520px" }}>
                <Row style={{ textAlign: "center" }}>
                    {data.map((mov) =>
                        < Col id={mov.id} key={mov.id} xs={6} md={4} lg={3} style={{ marginBottom: "3%" }}>
                            <Card onClick={() => window.location.href = "/movies/" + mov.id} className="" style={{
                                maxWidth: "200px", cursor: "pointer", background: "transparent", border: "none"
                            }}>
                                <Card.Img src={mov.imageurl} />
                                <Card.Body>
                                    <Card.Title>{mov.title}</Card.Title>
                                    <Card.Text>{mov.actor}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </Row>
            </Container>
        </div >
    );
}

export default AllMovies;