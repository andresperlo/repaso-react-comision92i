import Carousel from "react-bootstrap/Carousel";
import ImageC from "./ImageC";
import "../css/Carousel.css";

const CarouselC = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <ImageC
          urlImage={"https://picsum.photos/2000/500?random=1"}
          textAlt={"imagen 1"}
          widImg={"100%"}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ImageC
          urlImage={"https://picsum.photos/2000/500?random=2"}
          textAlt={"imagen 2"}
          widImg={"100%"}
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ImageC
          urlImage={"https://picsum.photos/2000/500?random=3"}
          textAlt={"imagen 3"}
          widImg={"100%"}
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselC;
