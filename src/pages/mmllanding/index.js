import React from "react";
// import { Link } from "react-router-dom";
import LandingPortfolio from "../../components/landing-portfolio";
import LPClientTestimonials from "../../components/lp-client-testimonials";
import LandingContactForm from "../../components/landingcontactform";
import { imagePath } from "../../utils/assetUtils";
import { FaArrowRight } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaMapMarked } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { FaHeadphonesAlt } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { GiSandsOfTime } from "react-icons/gi";
import PageAnimWrapper from "../../components/pagetransition";
import Head from "../Head";
import CountUp from "../../components/countup/contup";
import "./mml-landing.scss";

export default function Landingpage() {
  return (
    <PageAnimWrapper>
      <Head title="Makemelive Technologies landing" />
      <div className="landing-page-wrapper">
        {/* fold1 banner section start */}
        <section
          className="banner-wrapper"
          style={{
            backgroundImage: `url(${imagePath("landing-page-banner.jpg")})`
          }}
        >
          <div className="container">
            <div className="row justify-content-center v-align">
              <div className="col-md-6 col-xs-12">
                <div className="banner-left-wrap">
                  <h1>We Create Engaging Innovative Digital Experiences</h1>
                </div>
              </div>
              <div className="col-md-6 col-xs-12">
                <div className="form-wrap-tile">
                  <div className="form-title">
                    <h1>Enquire Now</h1>
                  </div>
                  <LandingContactForm />
                </div>
              </div>
            </div>
          </div>
          {/* seperator */}
          <div className="banner-seprator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              preserveAspectRatio="none"
              viewBox="0 0 100 100"
            >
              <path d="M 0 0 L0 100 L100 100 L100 0 Q 50 200 0 0"></path>
            </svg>
          </div>
          {/* seperator */}
        </section>
        {/* fold1 banner section end */}

        {/* our services fold2 start */}
        <section className="fold2">
          <div className="container">
            {/* <div className="our-services-title align-center">
              <span>
                <h2>Our Services</h2>
              </span>
            </div> */}
            <div className="row justify-content-center">
              <div className="col-md-4 col-xs-12">
                <div className="landing-service-col">
                  <div className="landing-service-icon">
                    <div className="landing-icon-image">
                      <img
                        src={imagePath("lp-icon1.jpg")}
                        alt="websitedevelopment"
                      />
                    </div>
                  </div>
                  <div className="landing-service-details-wrap align-center">
                    <div className="landing-service-title">
                      <h3>Website Design and Development</h3>
                    </div>
                    <div className="landing-service-para">
                      <p>
                        Your website still needs to be designed in ultimate
                        space where you can dive into digitally world and
                        strength your business. At Makemelive, the experienced
                        developers are developing the top-notch website
                        according to your requirements.
                      </p>
                    </div>
                    <div className="landing-service-arrow">
                      <a
                        className="lanidng-button-text"
                        href="https://www.makemelive.in/services/"
                      >
                        Discover now{" "}
                        <span className="lanidng-button-arrow">
                          <FaArrowRight />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-xs-12">
                <div className="landing-service-col">
                  <div className="landing-service-icon">
                    <div className="landing-icon-image">
                      <img
                        src={imagePath("lp-icon1.jpg")}
                        alt="websitedevelopment"
                      />
                    </div>
                  </div>
                  <div className="landing-service-details-wrap align-center">
                    <div className="landing-service-title">
                      <h3>Website Design and Development</h3>
                    </div>
                    <div className="landing-service-para">
                      <p>
                        Your website still needs to be designed in ultimate
                        space where you can dive into digitally world and
                        strength your business. At Makemelive, the experienced
                        developers are developing the top-notch website
                        according to your requirements.
                      </p>
                    </div>
                    <div className="landing-service-arrow">
                      <a
                        className="lanidng-button-text"
                        href="https://www.makemelive.in/services/"
                      >
                        Discover now{" "}
                        <span className="lanidng-button-arrow">
                          <FaArrowRight />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-xs-12">
                <div className="landing-service-col">
                  <div className="landing-service-icon">
                    <div className="landing-icon-image">
                      <img
                        src={imagePath("lp-icon1.jpg")}
                        alt="websitedevelopment"
                      />
                    </div>
                  </div>
                  <div className="landing-service-details-wrap align-center">
                    <div className="landing-service-title">
                      <h3>Website Design and Development</h3>
                    </div>
                    <div className="landing-service-para">
                      <p>
                        Your website still needs to be designed in ultimate
                        space where you can dive into digitally world and
                        strength your business. At Makemelive, the experienced
                        developers are developing the top-notch website
                        according to your requirements.
                      </p>
                    </div>
                    <div className="landing-service-arrow">
                      <a
                        className="lanidng-button-text"
                        href="https://www.makemelive.in/services/"
                      >
                        Discover now{" "}
                        <span className="lanidng-button-arrow">
                          <FaArrowRight />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* our services fold2 end */}

        {/* fold 8 company experience port section start */}
        <section className="fold8 our-experience-wrapper">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-5 col-xs-12">
                <div className="modern-number-year">
                  <div className="company-experience-wrap">
                    <h2>
                      <span className="mark-txt">38</span>
                      Years' Experience in IT
                    </h2>
                  </div>
                  <div className="comapny-success-story">
                    <h3>
                      Learn more about our{" "}
                      <a href="#" className="text-color-secondary">
                        Success Stories
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-md-7 col-xs-12">
                <div className="row justify-content-center">
                  <div className="col-md-6 col-xs-12">
                    <div className="counter align-center">
                      <span className="counter-number">
                        <CountUp end={1790} />
                      </span>
                      <h6 className="counter-details">ACCOUNT NUMBERS</h6>
                    </div>
                  </div>
                  <div className="col-md-6 col-xs-12">
                    <div className="counter align-center">
                      <span className="counter-number">
                        <CountUp end={32} />
                      </span>
                      <h6 className="counter-details">FINISHED PROJECTS</h6>
                    </div>
                  </div>
                  <div className="col-md-6 col-xs-12">
                    <div className="counter align-center">
                      <span className="counter-number">
                        <CountUp end={73} />
                      </span>
                      <h6 className="counter-details">HAPPY CLIENTS</h6>
                    </div>
                  </div>
                  <div className="col-md-6 col-xs-12">
                    <div className="counter align-center">
                      <span className="counter-number">
                        <CountUp end={18} />
                      </span>
                      <h6 className="counter-details">BLOG POSTS</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* fold 8 company experience port section end */}

        {/* our services fold6  start */}
        <section className="fold6">
          <div className="our-services-subtitle align-center">
            <h6>INDUSTRIES WE SERVE</h6>
          </div>
          <div className="our-services-title align-center">
            <h3>For your very specific industry,</h3>
            <h3>
              we have{" "}
              <span className="text-color-primary">
                highly-tailored IT solutions.
              </span>
            </h3>
          </div>

          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-3 col-xs-12">
                <div className="services-icon-box-wrap">
                  <div className="services-icon-item">
                    <FaHeart className="anim" />
                  </div>
                  <div className="service-icon-data-wrap">
                    <div className="service-icon-title">
                      <h5>IT Design</h5>
                    </div>
                    <div className="service-icon-desc">
                      <p>
                        We provide the most responsive and functional IT design
                        for companies and businesses worldwide.
                      </p>
                    </div>
                    <div className="service-icon-btn-wrap">
                      <a
                        className="service-icon-btn-text"
                        href="https://www.makemelive.in/services/"
                      >
                        Discover now{" "}
                        <span className="service-btn-arrow">
                          <FaArrowRight />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-xs-12">
                <div className="services-icon-box-wrap">
                  <div className="services-icon-item">
                    <FaBriefcase className="anim" />
                  </div>
                  <div className="service-icon-data-wrap">
                    <div className="service-icon-title">
                      <h5>IT Management</h5>
                    </div>
                    <div className="service-icon-desc">
                      <p>
                        It’s possible to simultaneously manage and transform
                        information from one server to another.
                      </p>
                    </div>
                    <div className="service-icon-btn-wrap">
                      <a
                        className="service-icon-btn-text"
                        href="https://www.makemelive.in/services/"
                      >
                        Discover now{" "}
                        <span className="service-btn-arrow">
                          <FaArrowRight />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-xs-12">
                <div className="services-icon-box-wrap">
                  <div className="services-icon-item">
                    <FaDatabase className="anim" />
                  </div>
                  <div className="service-icon-data-wrap">
                    <div className="service-icon-title">
                      <h5>Data Security</h5>
                    </div>
                    <div className="service-icon-desc">
                      <p>
                        We provide the most responsive and functional IT design
                        for companies and businesses worldwide.
                      </p>
                    </div>
                    <div className="service-icon-btn-wrap">
                      <a
                        className="service-icon-btn-text"
                        href="https://www.makemelive.in/services/"
                      >
                        Discover now{" "}
                        <span className="service-btn-arrow">
                          <FaArrowRight />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-xs-12">
                <div className="services-icon-box-wrap">
                  <div className="services-icon-item">
                    <FaMapMarked className="anim" />
                  </div>
                  <div className="service-icon-data-wrap">
                    <div className="service-icon-title">
                      <h5>Business Reform</h5>
                    </div>
                    <div className="service-icon-desc">
                      <p>
                        We provide the most responsive and functional IT design
                        for companies and businesses worldwide.
                      </p>
                    </div>
                    <div className="service-icon-btn-wrap">
                      <a
                        className="service-icon-btn-text"
                        href="https://www.makemelive.in/services/"
                      >
                        Discover now{" "}
                        <span className="service-btn-arrow">
                          <FaArrowRight />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-xs-12">
                <div className="services-icon-box-wrap">
                  <div className="services-icon-item">
                    <FaChartPie className="anim" />
                  </div>
                  <div className="service-icon-data-wrap">
                    <div className="service-icon-title">
                      <h5>Infrastructure Plan</h5>
                    </div>
                    <div className="service-icon-desc">
                      <p>
                        We provide the most responsive and functional IT design
                        for companies and businesses worldwide.
                      </p>
                    </div>
                    <div className="service-icon-btn-wrap">
                      <a
                        className="service-icon-btn-text"
                        href="https://www.makemelive.in/services/"
                      >
                        Discover now{" "}
                        <span className="service-btn-arrow">
                          <FaArrowRight />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-xs-12">
                <div className="services-icon-box-wrap">
                  <div className="services-icon-item">
                    <FaBookOpen className="anim" />
                  </div>
                  <div className="service-icon-data-wrap">
                    <div className="service-icon-title">
                      <h5>Firewall Advance</h5>
                    </div>
                    <div className="service-icon-desc">
                      <p>
                        We provide the most responsive and functional IT design
                        for companies and businesses worldwide.
                      </p>
                    </div>
                    <div className="service-icon-btn-wrap">
                      <a
                        className="service-icon-btn-text"
                        href="https://www.makemelive.in/services/"
                      >
                        Discover now{" "}
                        <span className="service-btn-arrow">
                          <FaArrowRight />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-xs-12">
                <div className="services-icon-box-wrap">
                  <div className="services-icon-item">
                    <FaHeadphonesAlt className="anim" />
                  </div>
                  <div className="service-icon-data-wrap">
                    <div className="service-icon-title">
                      <h5>Desktop Computing</h5>
                    </div>
                    <div className="service-icon-desc">
                      <p>
                        We provide the most responsive and functional IT design
                        for companies and businesses worldwide.
                      </p>
                    </div>
                    <div className="service-icon-btn-wrap">
                      <a
                        className="service-icon-btn-text"
                        href="https://www.makemelive.in/services/"
                      >
                        Discover now{" "}
                        <span className="service-btn-arrow">
                          <FaArrowRight />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-xs-12">
                <div className="services-icon-box-wrap">
                  <div className="services-icon-item">
                    <FaCog className="anim" />
                  </div>
                  <div className="service-icon-data-wrap">
                    <div className="service-icon-title">
                      <h5>Software Engineering</h5>
                    </div>
                    <div className="service-icon-desc">
                      <p>
                        We provide the most responsive and functional IT design
                        for companies and businesses worldwide.
                      </p>
                    </div>
                    <div className="service-icon-btn-wrap">
                      <a
                        className="service-icon-btn-text"
                        href="https://www.makemelive.in/services/"
                      >
                        Discover now{" "}
                        <span className="service-btn-arrow">
                          <FaArrowRight />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* our services fold6  end */}

        {/* project counter landing page start */}
        <section className="fold7">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-4 col-xs-12">
                <div className="counter-box-wrap">
                  <div className="counter-wrap-item">
                    <div className="counter-box-icon counter-icon1">
                      <GiSandsOfTime />
                    </div>
                    <div className="counter-box-num">
                      <span class="count percent">
                        <CountUp end={400} />
                      </span>
                    </div>
                  </div>
                  <div className="conter-box-details">
                    <h3>Sleepless Hours</h3>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-xs-12">
                <div className="counter-box-wrap">
                  <div className="counter-wrap-item">
                    <div className="counter-box-icon counter-icon2">
                      <FaRegLightbulb />
                    </div>
                    <div className="counter-box-num">
                      <span class="count percent">
                        <CountUp end={200} />
                      </span>
                    </div>
                  </div>
                  <div className="conter-box-details">
                    <h3>Positive Feedback</h3>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-xs-12">
                <div className="counter-box-wrap">
                  <div className="counter-wrap-item">
                    <div className="counter-box-icon counter-icon3">
                      <HiOutlineSpeakerphone />
                    </div>
                    <div className="counter-box-num">
                      <span class="count percent">
                        <CountUp end={100} />
                      </span>
                    </div>
                  </div>
                  <div className="conter-box-details">
                    <h3>Cups of Coffee</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* project counter landing page end */}

        {/* our portfolio section start */}
        <section className="fold3">
          <LandingPortfolio />
        </section>
        {/* our portfolio section end */}
        {/* our testimonials start */}
        <section className="fold4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-xs-12">
                <div className="client-testimonial-title">
                  <h2>Growing Clients.</h2>
                </div>
                <div className="client-testimonial-data">
                  <p>
                    The comments below are just a sample of the 30.000 clients
                    worldwide who transformed their business website with
                    Makemelive
                  </p>
                </div>
                <LPClientTestimonials />
              </div>
            </div>
          </div>
        </section>
        {/* our testimonials end */}

        {/* our awesome clients start */}
        <section className="fol5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9">
                <div className="col-md-12 col-xs-12">
                  <div className="our-partners align-center">
                    Our Awesome Clients
                  </div>
                  <div className="partner-wrapper">
                    <div className="box-row">
                      <div className="box-cell">
                        <img src={imagePath("dentsu.png")} alt="dentsu" />
                      </div>
                      <div className="box-cell">
                        <img src={imagePath("edtimes.png")} alt="EdTimes" />
                      </div>
                      <div className="box-cell">
                        <img src={imagePath("xppen.png")} alt="XpPen" />
                      </div>
                      <div className="box-cell">
                        <img
                          src={imagePath("mindshift-interactive.png")}
                          alt="MindShift"
                        />
                      </div>
                    </div>
                    <div className="box-row">
                      <div className="box-cell">
                        <img src={imagePath("anitadongre.png")} alt="Anita" />
                      </div>
                      <div className="box-cell">
                        <img src={imagePath("andindia.png")} alt="AndIndia" />
                      </div>
                      <div className="box-cell">
                        <img src={imagePath("brego.png")} alt="brego" />
                      </div>
                      <div className="box-cell">
                        <img src={imagePath("sous.png")} alt="sous" />
                      </div>
                    </div>
                    <div className="box-row">
                      <div className="box-cell"></div>
                      <div className="box-cell">
                        <img
                          src={imagePath("smittenondesign.png")}
                          alt="smitten"
                        />
                      </div>
                      <div className="box-cell">
                        <img src={imagePath("sion-logo.png")} alt="sion" />
                      </div>
                      <div className="box-cell"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* our awesome clients end */}

        {/* contact form section start */}
        <div className="contact-page-wrapper">
          <section className="contact-fold1">
            <div className="container">
              <div className="row justify-content-center no-gutters">
                <div className="col-md-6 col-xs-12">
                  <div className="contact-details-wrap">
                    <div className="contact-details-title">
                      <h2>
                        <span className="font-weightlight">Get</span> in touch.
                      </h2>
                    </div>
                    <div className="contact-details-desc">
                      <p>
                        We welcome you to contact us for more information about
                        any of our products or services.
                      </p>
                    </div>
                    <div className="contact-details-data">
                      <div className="address-data-wrap">
                        <div className="address-icon">
                          <FaHome />
                        </div>
                        <div className="address-details">
                          <p>
                            <a
                              href="https://goo.gl/maps/UVMjSVjQiG8Pn4tE9"
                              target="_blank"
                            >
                              Diamond SEA CHS LTD, Plot No 134, C Wing , Office
                              No 9,
                              <br /> Near Markaz Hotel, Jogeshwari West, Mumbai
                              - 400102, Maharashtra, India
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="email-data-wrap">
                        <div className="email-icon">
                          <FaRegEnvelope />
                        </div>
                        <div className="email-data">
                          <a href="mailto:support@makemelive.in">
                            support@makemelive.in
                          </a>
                        </div>
                      </div>
                      <div className="call-data-wrap">
                        <div className="call-icon">
                          <FaPhoneAlt />
                        </div>
                        <div className="call-data">
                          <a href="tel:+91 9136851479">+91 9136851479</a>
                        </div>
                      </div>
                      <div className="contact-social-icon">
                        <div className="social-title">
                          <h3>Follow us</h3>
                        </div>
                        <ul className="contact-social-icon-wrap">
                          <li className="contact-social-list-item">
                            <a href="https://www.facebook.com/makemelivetech/">
                              <FaFacebookF />
                            </a>
                          </li>
                          <li className="contact-social-list-item">
                            <a href="https://www.linkedin.com/company/makemelive-technologies">
                              <FaLinkedinIn />
                            </a>
                          </li>
                          <li className="contact-social-list-item">
                            <a href="https://twitter.com/makemelivetech">
                              <FaTwitter />
                            </a>
                          </li>
                          <li className="contact-social-list-item">
                            <a href="https://www.youtube.com/channel/UC1GAWHUiTSF3en8LINDmv2A">
                              <FaYoutube />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xs-12">
                  <LandingContactForm />
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* contact form section end */}
      </div>
    </PageAnimWrapper>
  );
}
