import React from "react";
import PageAnimWrapper from "../../components/pagetransition";
import { imagePath } from "../../utils/assetUtils";
import { aboutImagePath } from "../../utils/assetUtils";
import Head from "../Head";
import "./about.scss";

const AboutUs = () => {
  return (
    <PageAnimWrapper>
      <Head 
         title="About Us | Makemelive Technologies"
         ogdescription="About Us Makemelive Technologies is a well-known digital agency in Mumbai We are a team of young professionals who understand the significance and necessity of interaction for your business. And offer the right services to help you experience an impeccable brand value.&hellip;" 
         description="Website Design and Development Company"
         url="https://makemelive.in/about-us/"
         type="website"
         site_name="Makemelive Technologies"
         />
      <div className="about-page-wrapper">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-md-8 col-xs-12"
              style={{
                backgroundImage: `url(${imagePath("ut-dot-dark.svg")})`
              }}
            >
              <div className="about-page-header">
                <h2>
                  Makemelive Technologies <br />
                  is a well-known digital <br />
                  agency in Mumbai{" "}
                </h2>
                <p className="about-content-item">
                  We are a team of young professionals who understand the
                  significance and necessity of interaction for your business.
                  And offer the right services to help you experience an
                  impeccable brand value. We provide custom website with a
                  better user experience. Our consistency and growth in the
                  industry give us more power to deliver everything to our happy
                  customers, designing and developing websites and mobile app
                  development, digital marketing, SEO, etc.
                </p>
                <p className="about-content-item">
                  With a strategic approach, our experts work and chalk out the
                  right strategies to ensure your company’s sustainability. To
                  get the right results, our experts do it with integrity. To
                  guarantee the website’s top spot in the SERP, we introduce the
                  new search engine optimization practices and help your company
                  achieve full growth potential by making its online presence
                  powerful.
                </p>
                <p className="about-content-item">
                  We have significant experience integrating skills with
                  creativity and technology to deliver innovative and
                  imaginative engagement to clients. Our experts develop
                  innovative solutions that provide various devices with a
                  smooth user interface and keep the target audience intact. We
                  help you achieve your company goal and do it quickly.
                </p>
                <p className="about-content-item">
                  We at Makemelive, as a web development agency in Mumbai, are
                  the correct option for a company that never loses consistency
                  when recruiting any of the services we offer and want to keep
                  our patrons ahead on the horizon.
                </p>
              </div>
            </div>

            <div className="col-md-8 col-xs-12">
              <h2 className="our-star-team">Our All-Star Team</h2>
              <p className="about-content-item">
                We take inspiration from all things and trust in working hard to
                fulfill the customer’s demand. We have a creative and
                experienced team of designers, developers, and many others. At
                Makemelive, a website designing company in Mumbai. Our whole
                team ticks all your boxes and understands that it is more
                worthwhile for your business. We are specialized in providing
                more sales and profits and esteemed clients. We take your site
                to a completely different stage to speed up.
              </p>
            </div>
          </div>

          <div className="team-wrapper">
            <div className="row">
              <div className="col-md-3 col-xs-12">
                <div className="profile-box">
                  <div className="profile-img">
                    <img
                      src={aboutImagePath("sharik-shaikh.jpeg")}
                      alt="Sharik Shaikh CEO/Founder"
                    />
                  </div>
                  <div className="profile-pose">
                    <h3>Sharik Shaikh</h3>
                    <span>CEO/Founder</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-xs-12">
                <div className="profile-box">
                  <div className="profile-img">
                    <img
                      src={aboutImagePath("rupesh-mayekar.jpeg")}
                      alt="Rupesh Mayekar Chief UI/UX Strategist/Founder"
                    />
                  </div>
                  <div className="profile-pose">
                    <h3>Rupesh Mayekar</h3>
                    <span>Chief UI/UX Strategist/Founder</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-xs-12">
                <div className="profile-box">
                  <div className="profile-img">
                    <img
                      src={aboutImagePath("hitesh-singh.jpeg")}
                      alt="Hitesh Singh Digital Marketing Head"
                    />
                  </div>
                  <div className="profile-pose">
                    <h3>Hitesh Singh</h3>
                    <span>Digital Marketing Head</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-xs-12">
                <div className="profile-box">
                  <div className="profile-img">
                    <img
                      src={aboutImagePath("mujahid-shaikh.jpeg")}
                      alt="Mujahid Shaikh Sr. Front End Developer"
                    />
                  </div>
                  <div className="profile-pose">
                    <h3>Mujahid Shaikh</h3>
                    <span>Sr. Front End Developer</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-xs-12">
                <div className="profile-box">
                  <div className="profile-img">
                    <img
                      src={aboutImagePath("junaid-sayyed.jpeg")}
                      alt="Juned Sayyed Project Manager"
                    />
                  </div>
                  <div className="profile-pose">
                    <h3>Juned Sayyed</h3>
                    <span>Project Manager</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-xs-12">
                <div className="profile-box">
                  <div className="profile-img">
                    <img
                      src={aboutImagePath("kamal.jpeg")}
                      alt="Kamal Vishwakarma Sr. Web developer"
                    />
                  </div>
                  <div className="profile-pose">
                    <h3>Kamal Vishwakarma</h3>
                    <span>Sr. Web developer</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-xs-12">
                <div className="profile-box">
                  <div className="profile-img">
                    <img
                      src={aboutImagePath("riyaz.jpeg")}
                      alt="Riyaz Khan Mobile app developer"
                    />
                  </div>
                  <div className="profile-pose">
                    <h3>Riyaz Khan</h3>
                    <span>Mobile app developer</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-xs-12">
                <div className="profile-box">
                  <div className="profile-img">
                    <img
                      src={aboutImagePath("mahesh.jpeg")}
                      alt="Mahesh Kahar Web developer"
                    />
                  </div>
                  <div className="profile-pose">
                    <h3>Mahesh Kahar</h3>
                    <span>Web developer</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-xs-12">
                <div className="profile-box">
                  <div className="profile-img">
                    <img
                      src={aboutImagePath("aziz.jpeg")}
                      alt="Aziz Shaikh Digital Marketing Executive"
                    />
                  </div>
                  <div className="profile-pose">
                    <h3>Aziz Shaikh</h3>
                    <span>Digital Marketing Executive</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-xs-12">
                <div className="profile-box">
                  <div className="profile-img">
                    <img
                      src={aboutImagePath("Shoaib.jpg")}
                      alt="Shoaib Sayed Jr web developer"
                    />
                  </div>
                  <div className="profile-pose">
                    <h3>Shoaib Sayed</h3>
                    <span>Jr. Web Developer</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-xs-12">
                <div className="profile-box">
                  <div className="profile-img">
                    <img
                      src={aboutImagePath("adil.jpg")}
                      alt="Adil momin"
                    />
                  </div>
                  <div className="profile-pose">
                      <h3>Adil momin</h3>
                      <span>Jr. Web Developer</span>
                    </div>
                </div>
              </div>
              <div className="col-md-3 col-xs-12">
                <div className="profile-box">
                  <div className="profile-img">
                    <img
                      src={aboutImagePath("ankit.jpg")}
                      alt="Sharik Shaikh"
                    />
                  </div>
                  <div className="profile-pose">
                    <h3>Ankit Shinde</h3>
                    <span>Jr. Web Developer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageAnimWrapper>
  );
};

export default AboutUs;
