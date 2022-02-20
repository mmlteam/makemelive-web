import React from "react";
import Slider from "react-slick";
import { clientcarouselImagePath } from "../../utils/assetUtils";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import "./client-carousel.scss";

export default function ClientLogosCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <FaChevronRight />,
    prevArrow: <FaChevronLeft />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <Slider
      {...settings}
      id="work-client-carousel"
      className="client-logo-carousel-wrap"
    >
      <div className="client-carousel-slide-item">
        <figure className="client-carousel-asset">
          <img
            src={clientcarouselImagePath("anitadongre.png")}
            alt="websitedevelopment"
          />
        </figure>
      </div>
      <div className="client-carousel-slide-item">
        <figure className="client-carousel-asset">
          <img
            src={clientcarouselImagePath("brego.png")}
            alt="websitedevelopment"
          />
        </figure>
      </div>
      <div className="client-carousel-slide-item">
        <figure className="client-carousel-asset">
          <img
            src={clientcarouselImagePath("dentsu.png")}
            alt="websitedevelopment"
          />
        </figure>
      </div>
      <div className="client-carousel-slide-item">
        <figure className="client-carousel-asset">
          <img
            src={clientcarouselImagePath("edtimes.png")}
            alt="websitedevelopment"
          />
        </figure>
      </div>
      <div className="client-carousel-slide-item">
        <figure className="client-carousel-asset">
          <img
            src={clientcarouselImagePath("findcreative.png")}
            alt="websitedevelopment"
          />
        </figure>
      </div>
      <div className="client-carousel-slide-item">
        <figure className="client-carousel-asset">
          <img
            src={clientcarouselImagePath("mindshift-interactive.png")}
            alt="websitedevelopment"
          />
        </figure>
      </div>
      <div className="client-carousel-slide-item">
        <figure className="client-carousel-asset">
          <img
            src={clientcarouselImagePath("sous.png")}
            alt="websitedevelopment"
          />
        </figure>
      </div>
      <div className="client-carousel-slide-item">
        <figure className="client-carousel-asset">
          <img
            src={clientcarouselImagePath("xppen.png")}
            alt="websitedevelopment"
          />
        </figure>
      </div>
    </Slider>
  );
}
