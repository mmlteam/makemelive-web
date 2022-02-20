import React from "react";
import Slider from "react-slick";
import { homesliderImagePath } from "../../utils/assetUtils";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import "./homecarousel.scss";

export default function HomeCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    centerMode: true,
    // focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <FaChevronRight />,
    prevArrow: <FaChevronLeft />
  };
  return (
    <Slider {...settings} className="home-carousel-wrap slick-center">
      <div className="bg-txt-wrap">
        <div className="bg-txt">XP-PEN</div>
        <div className="slideitem">
          <figure className="slide-assets">
            <span className="home-carousel-number">01</span>
            {/* <Link to="https://xp-pen.co.in" title="xp-pen"> */}
            <div className="carousel-img">
              <img src={homesliderImagePath("xppen.jpeg")} alt="xp-pen" />
            </div>
            <figcaption className="home-carousel-caption caption-font">
              Xp-Pen
            </figcaption>
            {/* </Link> */}
          </figure>
        </div>
      </div>
      <div className="bg-txt-wrap">
        <div className="bg-txt">Ed Times</div>
        <div className="slideitem">
          <figure className="slide-assets">
            <span className="home-carousel-number">02</span>
            {/* <Link to="https://edtimes.in" title="EdTimes"> */}
            <div className="carousel-img">
              <img src={homesliderImagePath("edtimes.jpeg")} alt="edtimes" />
            </div>
            <figcaption className="home-carousel-caption caption-font">
              Ed Times
            </figcaption>
            {/* </Link> */}
          </figure>
        </div>
      </div>
      <div className="bg-txt-wrap">
        <div className="bg-txt">Findcreative React Website</div>
        <div className="slideitem">
          <figure className="slide-assets">
            <span className="home-carousel-number">03</span>
            {/* <Link to="https://findcreative.in" title="findcreative"> */}
            <div className="carousel-img">
              <img
                src={homesliderImagePath("findcreative.jpeg")}
                alt="findcreative"
              />
            </div>
            <figcaption className="home-carousel-caption">
              Findcreative React Website
            </figcaption>
            {/* </Link> */}
          </figure>
        </div>
      </div>
      <div className="bg-txt-wrap">
        <div className="bg-txt">Brego</div>
        <div className="slideitem">
          <figure className="slide-assets">
            <span className="home-carousel-number">04</span>
            {/* <Link to="https://brego.com" title="brego"> */}
            <div className="carousel-img">
              <img src={homesliderImagePath("brego.jpeg")} alt="brego" />
            </div>
            <figcaption className="home-carousel-caption caption-font">
              Brego
            </figcaption>
            {/* </Link> */}
          </figure>
        </div>
      </div>
      <div className="bg-txt-wrap">
        <div className="bg-txt">Mindshift Interactive</div>
        <div className="slideitem">
          <figure className="slide-assets">
            <span className="home-carousel-number">05</span>
            {/* <Link to="https://mindshifinteractive.com" title="mindshift"> */}
            <div className="carousel-img">
              <img
                src={homesliderImagePath("mindshift.jpeg")}
                alt="mindshift"
              />
            </div>
            <figcaption className="home-carousel-caption">
              Mindshift Interactive
            </figcaption>
            {/* </Link> */}
          </figure>
        </div>
      </div>
      <div className="bg-txt-wrap">
        <div className="bg-txt">Sous Online Fashion Ecommerce</div>
        <div className="slideitem">
          <figure className="slide-assets">
            <span className="home-carousel-number">06</span>
            {/* <Link to="https://sous.com" title="Sous"> */}
            <div className="carousel-img">
              <img src={homesliderImagePath("sous-home.jpeg")} alt="sous" />
            </div>
            <figcaption className="home-carousel-caption">
              Sous Online Fashion Ecommerce
            </figcaption>
            {/* </Link> */}
          </figure>
        </div>
      </div>
      <div className="bg-txt-wrap">
        <div className="bg-txt">Smittenondesign</div>
        <div className="slideitem">
          <figure className="slide-assets">
            <span className="home-carousel-number">07</span>
            {/* <Link to="https://smittenondesign.com" title="smittenondesign"> */}
            <div className="carousel-img">
              <img
                src={homesliderImagePath("smittenondesign.jpeg")}
                alt="smittenondesign"
              />
            </div>
            <figcaption className="home-carousel-caption">
              Smittenondesign
            </figcaption>
            {/* </Link> */}
          </figure>
        </div>
      </div>
      <div className="bg-txt-wrap">
        <div className="bg-txt">The Moneta Design Ecommerce</div>
        <div className="slideitem">
          <figure className="slide-assets">
            <span className="home-carousel-number">08</span>
            {/* <Link to="https://monetadesign.com" title="Monetadesign"> */}
            <div className="carousel-img">
              <img
                src={homesliderImagePath("themonetadesign.jpeg")}
                alt="moneta"
              />
            </div>
            <figcaption className="home-carousel-caption">
              The Moneta Design Ecommerce
            </figcaption>
            {/* </Link> */}
          </figure>
        </div>
      </div>
    </Slider>
  );
}
