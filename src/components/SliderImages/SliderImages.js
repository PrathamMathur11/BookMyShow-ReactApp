import './SliderImages.css'
import Carousel from 'react-bootstrap/Carousel';
function SliderImages() {
  return (
    <div style={{margin: "0.5% 1%" }}>
      <Carousel fade>
        <Carousel.Item>
          <a href='/movies/61e8410e4b2069fab7589a43'>
          <img
            className="d-block w-100 C-height"
            src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/eternals-et00122524-21-10-2021-11-59-37.jpg"
            alt="First slide"
          />
          </a>
          <Carousel.Caption>
            {/* <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <a href='/movies/61e911612aa40f449466b257'>
          <img
            className="d-block w-100 C-height"
            src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/sooryavanshi-et00097952-27-10-2021-05-17-20.jpg"
            alt="Second slide"
          />
          </a>

          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <a href='/movies/61e59e60d17ac55880333f01'>
          <img
            className="d-block w-100 C-height"
            src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/venom-let-there-be-carnage-et00310976-29-09-2021-06-12-54.jpg"
            alt="Third slide"
          />
          </a>

          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <a href='/movies/61e913982aa40f449466b259'>
          <img
            className="d-block w-100 C-height"
            src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/no-time-to-die-et00110039-29-09-2021-01-44-39.jpg"
            alt="Second slide"
          />
          </a>

          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default SliderImages;
