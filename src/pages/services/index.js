import React from "react";
import { Link } from "react-router-dom";
import PageAnimWrapper from "../../components/pagetransition";
import { servicesImagePath } from "../../utils/assetUtils";
import { imagePath } from "../../utils/assetUtils";
import Head from "../Head";
import "./services.scss";

export default function Services() {
  return (
    <PageAnimWrapper>
      <Head 
         title="Services | Makemelive Technologies"
         ogdescription="SERVICES Enjoy our handmade work with love for every detail. Website Design and DevelopmentYour website still needs to be designed in ultimate space where you can dive into digitally world and strength your business. At Makemelive, the experienced developers are developing&hellip;"
         description="Website Design and Development Company"
         url="https://makemelive.in/services/"
         type="website"
         site_name="Makemelive Technologies"
         />
      <div className="services-page-wrapper">
        <div className="container">
          <div className="row">
            <div
              className="col-md-12 col-xs-12 dotted-bg"
              style={{
                backgroundImage: `url(${imagePath("ut-dot-dark.svg")})`
              }}
            >
              <div className="page-header">
                <h1>Services</h1>
                <h2 className="subtitle">
                  Enjoy our handmade work with love for every detail.
                </h2>
                <span className="separator">
                  <img
                    src={servicesImagePath("brush-seperator-1.jpg")}
                    alt="separator"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="service-tiles">
          <div className="fluid-container">
            <div className="row">
              <div className="col-md-6 col-xs-12">
                <div className="service-content">
                  <h3>Website Design and Development</h3>
                  <p>
                    Your website still needs to be designed in ultimate space
                    where you can dive into digitally world and strength your
                    business. At Makemelive, the experienced developers are
                    developing the top-notch website according to your
                    requirements.{" "}
                  </p>
                  <Link to="/contact-us" className="cybr-btn cybr-btn--sm ">
                    Get Started
                    <span aria-hidden className="cybr-btn__glitch">Get Started</span>
                  </Link>
                </div>
              </div>
              <div className="col-md-6 col-xs-12 side-img">
                <div
                  className="bg-tile"
                  style={{
                    backgroundImage: `url(${servicesImagePath(
                      "hal-gatewood-tZc3vjPCk-Q-unsplash-1.jpg"
                    )})`
                  }}
                >
                  <div className="bg-tile-overlay"></div>
                </div>
              </div>
            </div>

            <div className="row mob-col-reverse">
              <div className="col-md-6 col-xs-12 side-img">
                <div
                  className="bg-tile"
                  style={{
                    backgroundImage: `url(${servicesImagePath(
                      "mobile-application-development.jpeg"
                    )})`
                  }}
                >
                  <div className="bg-tile-overlay"></div>
                </div>
              </div>
              <div className="col-md-6 col-xs-12">
                <div className="service-content">
                  <h3>Mobile App Development</h3>
                  <p>
                    The app is your business’s face, so it needs to be designed
                    accordingly to build your trust and loyalty among the
                    customers. Reach out to us to create colorful and powerful
                    apps, make the app that your business needs to succeed at
                    Makemelive.
                  </p>
                  <Link to="/contact-us" className="cybr-btn cybr-btn--sm ">
                    Get Started
                    <span aria-hidden className="cybr-btn__glitch">Get Started</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 col-xs-12">
                <div className="service-content">
                  <h3>Search Engine Optimization</h3>
                  <p>
                    Search engine optimization is the process in which your
                    website ranks on the Google pages to attract your targeted
                    customer. At Makemelive, you get in touch with best and
                    experienced technical executives who make your website ranks
                    on the 1st page of Google, increasing the traffic on your
                    website and bringing valuable leads.
                  </p>
                  <Link to="/contact-us" className="cybr-btn cybr-btn--sm ">
                    Get Started
                    <span aria-hidden className="cybr-btn__glitch">Get Started</span>
                  </Link>
                </div>
              </div>
              <div className="col-md-6 col-xs-12 side-img">
                <div
                  className="bg-tile"
                  style={{
                    backgroundImage: `url(${servicesImagePath(
                      "search-engine-optimization.jpeg"
                    )})`
                  }}
                >
                  <div className="bg-tile-overlay"></div>
                </div>
              </div>
            </div>

            <div className="row mob-col-reverse">
              <div className="col-md-6 col-xs-12 side-img">
                <div
                  className="bg-tile"
                  style={{
                    backgroundImage: `url(${servicesImagePath(
                      "ecommerce-solutions.jpeg"
                    )})`
                  }}
                >
                  <div className="bg-tile-overlay"></div>
                </div>
              </div>
              <div className="col-md-6 col-xs-12">
                <div className="service-content">
                  <h3>E-Commerce Solutions</h3>
                  <p>
                    Enjoy rich, out-of-the-box features, unrestricted
                    customization, and integrated third-party integrations that
                    meet the particular needs of your company in every sector.
                    With Makemelive you can carry your business vision to life
                    and we deliver e-Commerce.
                  </p>
                  <Link to="/contact-us" className="cybr-btn cybr-btn--sm ">
                    Get Started
                    <span aria-hidden className="cybr-btn__glitch">Get Started</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageAnimWrapper>
  );
}
