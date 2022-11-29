import React from "react";
import Carousel from "react-bootstrap/Carousel";
import brand1 from "../../../assets/brands/Brand1.png";
import brand2 from "../../../assets/brands/Brand2.png";

const BrandCarousel = () => {
  return (
    <Carousel className="mt-5">
      <Carousel.Item>
        <img className="d-block w-100" src={brand1} alt="First slide" />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={brand2} alt="Second slide" />

        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
};

export default BrandCarousel;
