import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Footer() {
  return (
    <div
      class="foot"
      style={{ backgroundColor: "rgb(51, 51, 56)", color: "white" }}
    >
      <Container fluid>
        <Row
          style={{
            padding: "3%",
            backgroundColor: "rgb(51, 51, 56)",
            color: "white",
          }}
        >
          <Col
            xs={{ offset: 1, span: 2 }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <img alt="hut" src="//in.bmscdn.com/webin/common/icons/hut.svg" />
            <div>List your Show</div>
          </Col>
          <Col xs={4} style={{flex: "0 0 auto", width: "48.333333%", alignSelf: "center"}}>
            Got a show, event, activity or a great experience? Partner with us get listed on BookMyShow
          </Col>
          <Col xs={5} style={{ display: "flex", flexDirection: "row-reverse" ,flex: "0 0 auto" ,width: "19.666667%"
 }}>
            <Button href="/register"
              style={{ backgroundColor: "rgb(236, 94, 113)", border: "none" }}
            >
              Contact Today!
            </Button>
          </Col>
        </Row>
        <Row
          style={{
            backgroundColor: "rgb(64, 64, 67)",
            textAlign: "center",
            padding: "3%",
          }}
        >
          <Col><a>
          Developed using</a></Col>
          <Col><a>
          ReactJS and NodeJS</a></Col>
          <Col><a href="https://github.com/PrathamMathur11/BookMyShow-NodeJs-Express" style={{color:"unset",textDecoration:"none"}}>
          for Backend Repository </a></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
