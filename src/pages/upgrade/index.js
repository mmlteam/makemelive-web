import React from "react";
import { Link } from "react-router-dom";
import PageAnimWrapper from "../../components/pagetransition";
import { imagePath } from "../../utils/assetUtils";
import { upgradeImagePath } from "../../utils/assetUtils";
import { FaAngleRight } from "react-icons/fa";
import Head from "../Head";
import "./upgrade.scss";
export default function Upgrade() {
  return (
    <PageAnimWrapper>
       <Head 
         title="Upgrade | Makemelive Technologies"
         ogdescription="UPGRADE Help your business evolve with our premium services! Cutting-edge solutions that help you enhance your user experience &#038; cultivate brand loyalty. UPGRADEHelp your business evolve with our premium services! Cutting-edge solutions that help you enhance your user experience &#038; cultivate&hellip;"
         description="Website Design and Development Company"
         url="https://makemelive.in/upgrade/"
         type="website"
         site_name="Makemelive Technologies"
         />
      <div className="upgrade-page-wrapper">
        <section className="upgrade-fold1">
          <div className="fluid-container">
            <div className="row">
              <div className="col-md-6 col-xs-12">
                <div
                  className="upgrade-banner-left-wrap uprgrade-banner-column"
                  style={{
                    backgroundImage: `url(${imagePath("ut-dot-dark.svg")})`
                  }}
                >
                  <div className="upgrade-banner-content-wrap">
                    <div className="upgrade-banner-title">
                      <h2>upgrade</h2>
                    </div>
                    <div className="upgrade-banner-desc">
                      <p>
                        Help your business evolve with our premium services!
                        Cutting-edge solutions that help you enhance your user
                        experience & cultivate brand loyalty.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xs-12">
                <div className="upgrade-banner-right-wrap">
                  <div className="upgrade-banner-img-wrap">
                    <div className="upgrade-banner-right-img">
                      <img
                        className="upgrade-banner-image"
                        src={upgradeImagePath("upgrade-banner.jpeg")}
                        alt="upgrade-banner"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* section fold 2 start */}
        <section className="upgrade-fold2">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-xs-12">
                <div className="upgrade-btm-section-column">
                  <div className="upgrade-btm-column-img">
                    <img src={upgradeImagePath("aws.png")} alt="aws" />
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
                      <Link
                        to="/contact-us/"
                        className="our-services-learn-more"
                      >
                        Get Started
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
                      src={upgradeImagePath("website-recovery.png")}
                      alt="aws"
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
                      <Link
                        to="/contact-us/"
                        className="our-services-learn-more"
                      >
                        Get Started
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
                      src={upgradeImagePath("website-speed-optimization.png")}
                      alt="aws"
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
                      <Link
                        to="/contact-us/"
                        className="our-services-learn-more"
                      >
                        Get Started
                        <span className="angle-right">
                          <FaAngleRight />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-xs-12">
                <div className="upgrade-btm-section-column">
                  <div className="upgrade-btm-column-img">
                    <img
                      src={upgradeImagePath("website-migration.png")}
                      alt="aws"
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
                      <Link
                        to="/contact-us/"
                        className="our-services-learn-more"
                      >
                        Get Started
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
                      src={upgradeImagePath("email-migration.png")}
                      alt="aws"
                    />
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
                      <Link
                        to="/contact-us/"
                        className="our-services-learn-more"
                      >
                        Get Started
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
                      src={upgradeImagePath("wordpress-expert.png")}
                      alt="aws"
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
                      <Link
                        to="/contact-us/"
                        className="our-services-learn-more"
                      >
                        Get Started
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
        {/* section fold 2 end */}
      </div>
    </PageAnimWrapper>
  );
}
