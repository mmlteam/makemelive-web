import React from "react";
import { Link } from "react-router-dom";
import Head from "./Head";
import HomeBannerSlider from "../components/bannerslider";
import HomeCarousel from "../components/homecarousel";
import HomeCarouselMobile from "../components/homecarouselmobile";
import { imagePath } from "../utils/assetUtils";
import ClientTestimonials from "../components/client-testimonials";
import "./home.scss";
// import { motion } from "framer-motion";
import PageAnimWrapper from "../components/pagetransition";
import { FaAngleRight } from "react-icons/fa";

const Home = () => {
  return (
    <PageAnimWrapper>
      <div className="home-page-wrapper">
        <Head 
         title="Makemelive Technologies"
         ogdescription="The world is going digital, why not you? Expert Join us and groove into the world of possibilities! 01 Featured, Website 02 Featured, Website 03 Featured, Website 04 Featured, Web APP/Android Application 05 Featured, Website 06 Featured, Website 07 Featured"
         description="Website Design and Development Company"
         url="https://makemelive.in/"
         type="website"
         site_name="Makemelive Technologies"
         />
        {/* section Banner start */}
        <section className="fold1">
          <div className="slide-upper-title">
            <h4>The world is going digital, why not you?</h4>
          </div>
          <HomeBannerSlider />
          <div className="slide-bottom-title">
            <h3>Join us and groove into the world of possibilities!</h3>
          </div>
        </section>
        {/* section Banner end */}

        {/* section Home Carousel start */}
        <section className="fold2 fluid-container">
          <HomeCarousel />
          <HomeCarouselMobile />
        </section>
        {/* section Home Carousel end */}

        {/* section we are digital marketing start */}
        <section className="fold3">
          <div className="container">
            <div className="row justify-content-center no-gutters">
              <div className="home-portfolio-title-wrapper">
                <div className="home-portfolio-title">
                  <h3>We’ve Got More</h3>
                </div>
                <div className="home-portfolio-subtitle">
                  <Link to="/work/">
                    Take a look at our portfolio
                    <span className="angle-right">
                      <FaAngleRight />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="row justify-content-center we-are-digital-marketing-wrapper">
              <div className="col-md-6 col-xs-12">
                <div
                  className="we-are-digital-marketing-leftside-wrap"
                  style={{
                    backgroundImage: `url(${imagePath("dot-dark.svg")})`
                  }}
                >
                  <div className="we-are-digital-marketing-title">
                    <h1>WE ARE A DIGITAL MARKETING AGENCY IN MUMBAI</h1>
                  </div>
                  <div className="we-are-digital-marketing-desc">
                    <p>
                      Looking for a Digital marketing agency in Mumbai to grow
                      your business with proficient Web developers in Mumbai?
                      Your quest ends here!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xs-12">
                <div className="we-are-digital-marketing-rightside-wrap">
                  <div className="we-are-digital-marketing-rightdesc para1">
                    <p>
                      Makemelive Technologies is a Top digital marketing agency
                      in Mumbai dedicated to delivering precise result oriented
                      Digital Marketing services in Mumbai. We at Makemelive
                      Technologies comprehend your business essentials,
                      tendencies, delineations, and planning. With outstanding
                      working experience of more than 10 years in this industry,
                      we are here to help you envisage your stature in the
                      digital world and advance your business to expand and
                      thrive online.
                    </p>
                  </div>
                  <div className="we-are-digital-marketing-rightdesc para2">
                    <p>
                      We ensure you to deliver incomparable web development
                      solutions based on your requirements. We solely pool the
                      power of innovation, novel technology, target-oriented
                      marketing, digital marketing services, and outcome metrics
                      to create unique digital makeovers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* section we are digital marketing end */}

        {/* section do what is great banner start */}
        <section className="fold4">
          <div
            className="do-whatis-great-banner"
            style={{
              backgroundImage: `url(${imagePath("do-what-great-banner.jpeg")})`
            }}
          ></div>
        </section>
        {/* section do what is great banner end */}

        {/* section our services start */}
        <section className="fold5">
          <div className="container">
            {/* <div className="row justify-content-center no-gutters"> */}
            <div className="our-services-title-desc-wrap">
              <div className="our-services-title">
                <h2>OUR SERVICES</h2>
              </div>
              <div className="our-services-desc">
                <p>
                  For us, digital marketing services aren’t just about consumer
                  involvement; we focus more on delivering our clients something
                  exceptional to look at. Our digital experts work day and night
                  to create more innovative, ingenious, and expressive
                  techniques to expand your business in the digital marketing
                  industry. We provide our superior core services for:
                </p>
              </div>
            </div>
            {/* </div> */}
            <div className="row justify-content-center no-gutters our-services-row-wrap">
              <div className="col-md-3 col-xs-12 web-design-col-wrap">
                <div className="web-design-column">
                  <figure className="services-column-icon">
                    <img
                      src={imagePath("website-development.png")}
                      alt="websitedevelopment"
                    />
                  </figure>
                  <div className="our-services-contentwrap">
                    <div className="our-service-column-title">
                      <h3>Website Design and Development</h3>
                    </div>
                    <div className="our-services-column-desc">
                      <p>
                        Your website still needs to be designed in ultimate
                        space where you can dive into digitally world and
                        strength your business. At Makemelive, the experienced
                        developers are developing the top-notch website
                        according to your requirements.
                      </p>
                      <Link to="/services/" className="our-services-learn-more">
                        Learn More
                        <span className="angle-right">
                          <FaAngleRight />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-xs-12 web-design-col-wrap">
                <div className="web-design-column">
                  <figure className="services-column-icon">
                    <img
                      src={imagePath("mobile-application-development.png")}
                      alt="websitedevelopment"
                    />
                  </figure>
                  <div className="our-services-contentwrap">
                    <div className="our-service-column-title">
                      <h3>Mobile App Development</h3>
                    </div>
                    <div className="our-services-column-desc">
                      <p>
                        The app is your business’s face, so it needs to be
                        designed accordingly to build your trust and loyalty
                        among the customers. Reach out to us to create colorful
                        and powerful apps, make the app that your business needs
                        to succeed at Makemelive.
                      </p>
                      <Link to="/services/" className="our-services-learn-more">
                        Learn More
                        <span className="angle-right">
                          <FaAngleRight />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-xs-12 web-design-col-wrap">
                <div className="web-design-column">
                  <figure className="services-column-icon">
                    <img
                      src={imagePath("search-engine-optimization.png")}
                      alt="websitedevelopment"
                    />
                  </figure>
                  <div className="our-services-contentwrap">
                    <div className="our-service-column-title">
                      <h3>Search Engine Optimization</h3>
                    </div>
                    <div className="our-services-column-desc">
                      <p>
                        Search engine optimization is the process in which your
                        website ranks on the Google pages to attract your
                        targeted customer. At Makemelive, you get in touch with
                        best and experienced technical executives who make your
                        website ranks on the 1st page of Google, increasing the
                        traffic on your website and bringing valuable leads.
                      </p>
                      <Link to="/services/" className="our-services-learn-more">
                        Learn More
                        <span className="angle-right">
                          <FaAngleRight />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-xs-12 web-design-col-wrap">
                <div className="web-design-column">
                  <figure className="services-column-icon">
                    <img
                      src={imagePath("ecommerce-solutions.png")}
                      alt="websitedevelopment"
                    />
                  </figure>
                  <div className="our-services-contentwrap">
                    <div className="our-service-column-title">
                      <h3>E-Commerce Solutions</h3>
                    </div>
                    <div className="our-services-column-desc">
                      <p>
                        Enjoy rich, out-of-the-box features, unrestricted
                        customization, and integrated third-party integrations
                        that meet the particular needs of your company in every
                        sector. With Makemelive you can carry your business
                        vision to life and we deliver e-Commerce.
                      </p>
                      <Link to="/services/" className="our-services-learn-more">
                        Learn More
                        <span className="angle-right">
                          <FaAngleRight />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* section our services end */}

        {/* section upgrate start */}
        <section className="fold6">
          <div className="container">
            <div className="row justify-content-center no-gutters">
              <div className="col-md-6 col-xs-12">
                <div
                  className="upgrade-top-section-left-col"
                  style={{
                    backgroundImage: `url(${imagePath("dot-dark.svg")})`
                  }}
                >
                  <div className="upgrade-title">
                    <h2>UPGRADE</h2>
                  </div>
                  <div className="upgrade-desc">
                    <p>
                      Help your business evolve with our premium services!
                      Cutting-edge solutions that help you enhance your user
                      experience & cultivate brand loyalty.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xs-12">
                <div className="upgrade-top-section-right-col">
                  <div className="upgrad-img-wrap">
                    <div className="upgrade-right-sideimg">
                      <img
                        src={imagePath("upgrade-premium-bg.jpeg")}
                        alt="upgrade-premium"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center no-gutters upgrade-btm-section-wrap">
              <div className="col-md-4 col-xs-12">
                <div className="upgrade-btm-section-column">
                  <div className="upgrade-btm-column-img">
                    <img src={imagePath("aws.png")} alt="aws" />
                  </div>
                  <div className="upgrade-btm-column-content-wrap">
                    <div className="upgrade-btm-col-title">
                      <h3>AWS Architecture Setup</h3>
                    </div>
                    <div className="upgrade-btm-col-desc">
                      <p>
                        At Makemelive, we build a Virtual Private Network (VPC)
                        ecosystem with public and private sub-networks where AWS
                        networks and other technology can be launched.
                      </p>
                      <Link to="/upgrade/" className="our-services-learn-more">
                        Learn More
                        <span className="angle-right">
                          <FaAngleRight />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-xs-12">
                <div className="upgrade-btm-section-column">
                  <div className="upgrade-btm-column-img">
                    <img
                      src={imagePath("website-recovery.png")}
                      alt="websiterecovery"
                    />
                  </div>
                  <div className="upgrade-btm-column-content-wrap">
                    <div className="upgrade-btm-col-title">
                      <h3>Website Recovery</h3>
                    </div>
                    <div className="upgrade-btm-col-desc">
                      <p>
                        Archive, restore with Makemelive, yes you heard it
                        right. You can now quickly recover your website just by
                        scheduling a call with us. Our experts are working
                        dedicatedly to get your website back on Google and give
                        you the digital presence again.
                      </p>
                      <Link to="/upgrade/" className="our-services-learn-more">
                        Learn More
                        <span className="angle-right">
                          <FaAngleRight />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-xs-12">
                <div className="upgrade-btm-section-column">
                  <div className="upgrade-btm-column-img">
                    <img
                      src={imagePath("website-speed-optimization.png")}
                      alt="webspeed"
                    />
                  </div>
                  <div className="upgrade-btm-column-content-wrap">
                    <div className="upgrade-btm-col-title">
                      <h3>Website Speed Optimization</h3>
                    </div>
                    <div className="upgrade-btm-col-desc">
                      <p>
                        Do you have to wait for your website to open? Now you
                        don’t have to hustle to load your website! Our
                        developers will optimize your website speed and give
                        your audience a speedy experience while browsing through
                        your website.
                      </p>
                      <Link to="/upgrade/" className="our-services-learn-more">
                        Learn More
                        <span className="angle-right">
                          <FaAngleRight />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-xs-12">
                <div className="upgrade-btm-section-column">
                  <div className="upgrade-btm-column-img">
                    <img
                      src={imagePath("website-migration.png")}
                      alt="webmigrate"
                    />
                  </div>
                  <div className="upgrade-btm-column-content-wrap">
                    <div className="upgrade-btm-col-title">
                      <h3>Website Migration</h3>
                    </div>
                    <div className="upgrade-btm-col-desc">
                      <p>
                        It is one of the most special and prominent services
                        that Makemelive brings to your website. Website
                        migration directly affects your ranking on the engines
                        as it is done by our SEO professionals and gives the
                        website the best possible rank!
                      </p>
                      <Link to="/upgrade/" className="our-services-learn-more">
                        Learn More
                        <span className="angle-right">
                          <FaAngleRight />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-xs-12">
                <div className="upgrade-btm-section-column">
                  <div className="upgrade-btm-column-img">
                    <img src={imagePath("email-migration.png")} alt="email" />
                  </div>
                  <div className="upgrade-btm-column-content-wrap">
                    <div className="upgrade-btm-col-title">
                      <h3>Email Migration</h3>
                    </div>
                    <div className="upgrade-btm-col-desc">
                      <p>
                        You are just minutes away from the cloud-based
                        conversion that transforms the Email from every
                        provider. We will move the schedule, addresses, files,
                        assignments, journals, and notes from one device to
                        another. As a full eMail Transfer solution (as supported
                        by each system)!
                      </p>
                      <Link to="/upgrade/" className="our-services-learn-more">
                        Learn More
                        <span className="angle-right">
                          <FaAngleRight />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-xs-12">
                <div className="upgrade-btm-section-column">
                  <div className="upgrade-btm-column-img">
                    <img
                      src={imagePath("wordpress-expert.png")}
                      alt="wpexpert"
                    />
                  </div>
                  <div className="upgrade-btm-column-content-wrap">
                    <div className="upgrade-btm-col-title">
                      <h3>WordPress Expert Solutions</h3>
                    </div>
                    <div className="upgrade-btm-col-desc">
                      <p>
                        Are you planning to launch a website? Consult with team
                        Makemelive, and your WordPress website will be ready.
                        With the latest interface and design, we bring you the
                        best WordPress expert solutions.
                      </p>
                      <Link to="/upgrade/" className="our-services-learn-more">
                        Learn More
                        <span className="angle-right">
                          <FaAngleRight />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* section upgrate end */}

        {/* section we have dont it for brands big and small start */}
        <section className="fold7">
          <div className="container">
            <div className="row justify-content-center no-gutters v-align">
              <div className="col-md-6 col-xs-12">
                <div className="big-small-brand-leftside-wrap">
                  <div className="big-small-brand-title">
                    <h2>WE'VE DONE IT FOR BRANDS BIG AND SMALL</h2>
                  </div>
                  <div className="big-small-brand-desc">
                    <p>
                      Proven in the Digital Space for over 10+ years, more than
                      200+ customers already trust MAKEMELIVE TECHNOLOGIES. We
                      have created an incredible amount of over 500+ websites.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xs-12">
                <div
                  className="big-small-brand-rightside-wrap"
                  style={{
                    backgroundImage: `url(${imagePath("dot-dark.svg")})`
                  }}
                >
                  <img
                    className="happy-client-image"
                    src={imagePath("happy-clients.jpeg")}
                    alt="happyclients"
                  />
                </div>
              </div>
            </div>
            <div className="big-small-section-border"></div>
          </div>
        </section>
        {/* section we have dont it for brands big and small end */}

        {/* our awesome clients start */}
        <section className="fol8">
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
        {/* Client Testimonials start */}
        <section className="fold9">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-xs-12">
                <div className="client-testimonial-title">
                  <h2>Our Clients Say.</h2>
                </div>
                <div className="client-testimonial-data">
                  {/* <p>
                    The comments below are just a sample of the 30.000 clients
                    worldwide who transformed their business website with
                    Makemelive
                  </p> */}
                </div>
                <ClientTestimonials />
              </div>
            </div>
          </div>
        </section>
        {/* Client Testimonials end */}
      </div>
    </PageAnimWrapper>
  );
};

export default Home;
