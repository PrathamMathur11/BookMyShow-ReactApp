// import '. Premieres.css'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Premieres() {
    return (
        <div style={{ marginBottom: "5%", background: "#2c3148", padding: "1% 9.5%" }}>
            <img alt="" class="style__Image-sc-eykeme-1 dWIxSp" style={{ borderRadius: "0px", opacity: "1", transition: "all 0.5s ease 0s", width: "100%", minHeight: "inherit", maxHeight: "inherit" }} src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" />
            <h2 className="text-white">Premieres</h2>
            <Carousel indicators={false}>
                <Carousel.Item>
                    <CardGroup style={{ display: "flex", gap: "20px", justifyContent: "space-evenly" }}>
                        <Card className="bg-dark text-white home" style={{
                            maxHeight: "450px", maxWidth: "200px"
                        }}>
                            <a href='/movies/61e5a119d17ac55880333f02'>
                                <Card.Img src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/spider-man-no-way-home-et00310790-07-12-2021-07-25-42.jpg" />
                            </a>
                            <Card.Body>
                                <Card.Title>
                                    Spider-Man
                                </Card.Title>
                                <Card.Text>
                                    No Way Home
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="bg-dark text-white home" style={{
                            maxHeight: "450px", maxWidth: "200px"
                        }}>
                            <a href='/movies/61e5a5c0d17ac55880333f03'>
                                <Card.Img src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/the-matrix-resurrections-et00133391-24-11-2021-12-59-51.jpg" />
                            </a>
                            <Card.Body>
                                <Card.Title>
                                    The Matrix
                                </Card.Title>
                                <Card.Text>
                                    Resurrections
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="bg-dark text-white home" style={{
                            maxHeight: "450px", maxWidth: "200px"
                        }}>
                            <a href='/movies/61e5a119d17ac55880333f02'>
                                <Card.Img src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/spider-man-no-way-home-et00310790-07-12-2021-07-25-42.jpg" />
                            </a>
                            <Card.Body>
                                <Card.Title>
                                    Spider-Man
                                </Card.Title>
                                <Card.Text>
                                    No Way Home
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="bg-dark text-white home" style={{
                            maxHeight: "450px", maxWidth: "200px"
                        }}>
                            <a href='/movies/61e5a5c0d17ac55880333f03'>
                                <Card.Img src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/the-matrix-resurrections-et00133391-24-11-2021-12-59-51.jpg" />
                            </a>
                            <Card.Body>
                                <Card.Title>
                                    The Matrix
                                </Card.Title>
                                <Card.Text>
                                    Resurrections
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        
                    </CardGroup>
                </Carousel.Item>
                <Carousel.Item>
                    <CardGroup style={{ display: "flex", gap: "20px", justifyContent: "space-evenly" }}>
                        <Card className="bg-dark text-white home" style={{
                            maxHeight: "450px", maxWidth: "200px"
                        }}>
                            <a href='/movies/61e5a5c0d17ac55880333f03'>
                                <Card.Img src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/the-matrix-resurrections-et00133391-24-11-2021-12-59-51.jpg" />
                            </a>
                            <Card.Body>
                                <Card.Title>
                                    The Matrix
                                </Card.Title>
                                <Card.Text>
                                    Resurrections
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="bg-dark text-white home" style={{
                            maxHeight: "450px", maxWidth: "200px"
                        }}>
                            <a href='/movies/61e5a119d17ac55880333f02'>
                                <Card.Img src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/spider-man-no-way-home-et00310790-07-12-2021-07-25-42.jpg" />
                            </a>
                            <Card.Body>
                                <Card.Title>
                                    Spider-Man
                                </Card.Title>
                                <Card.Text>
                                    No Way Home
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="bg-dark text-white home" style={{
                            maxHeight: "450px", maxWidth: "200px"
                        }}>
                            <a href='/movies/61e5a5c0d17ac55880333f03'>
                                <Card.Img src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/the-matrix-resurrections-et00133391-24-11-2021-12-59-51.jpg" />
                            </a>
                            <Card.Body>
                                <Card.Title>
                                    The Matrix
                                </Card.Title>
                                <Card.Text>
                                    Resurrections
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="bg-dark text-white home" style={{
                            maxHeight: "450px", maxWidth: "200px"
                        }}>
                            <a href='/movies/61e5a119d17ac55880333f02'>
                                <Card.Img src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/spider-man-no-way-home-et00310790-07-12-2021-07-25-42.jpg" />
                            </a>
                            <Card.Body>
                                <Card.Title>
                                    Spider-Man
                                </Card.Title>
                                <Card.Text>
                                    No Way Home
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        
                    </CardGroup>
                </Carousel.Item>
                
            </Carousel>
        </div>
    );
}

export default Premieres;
