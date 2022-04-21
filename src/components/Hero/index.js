import React from "react";
import Banner from "../../assets/images/Banner.png";
import Banner1 from "../../assets/images/Banner1.png";
import Banner2 from "../../assets/images/Banner2.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const settings = {
    autoplay: true,
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="hero-section">
      <Slider {...settings}>
        <div className="d-flex">
          <i className="fas fa-quote-left"></i>
          <img src={Banner} alt="banner" />
        </div>
        <div className="d-flex">
          <i className="fas fa-quote-left"></i>
          <img src={Banner1} alt="banner" />
        </div>
        <div className="d-flex">
          <i className="fas fa-quote-left"></i>
          <img src={Banner2} alt="banner" />
        </div>
      </Slider>
      <div className="container">
        <div className="figcaption">
          <p className="desc">
            <span className="line"> A heritage </span>
            in care, <br />
            A reputation in <br />
            excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
