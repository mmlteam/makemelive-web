import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import PageAnimWrapper from "../../components/pagetransition";
import ContactForm from "../../components/contactform";
import { FaHome } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { useLocation } from "react-router-dom";

import Head from "../Head";
import "./contact.scss";
const googleMap = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15077.143510691256!2d72.8429551!3d19.1389596!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7091d6dc03d29549!2sMakemelive%20Technologies%20LLP!5e0!3m2!1sen!2sin!4v1640329132232!5m2!1sen!2sin"
      width="100%"
      height="100%"
      frameBorder="0"
      style={{ border: 0 }}
      allowFullScreen=""
      aria-hidden="false"
      tabIndex="0"
      className="gmap_iframe"
    />
  );
};
export default function Contact() {
  const location = useLocation();
  const [isTestpage, setTestpage] = useState(false);
  useEffect(() => {
    if (location.pathname === "/test-contact-us") {
      setTestpage(true);
    } else {
      setTestpage(false);
    }
  }, [location]);
  return (
    <PageAnimWrapper>
      <Head
        title="Contact | Makemelive Technologies"
        ogdescription="Contact Get in touch We welcome you to contact us for more information about any of our products or services. Diamond SEA CHS LTD, Plot No 134, C Wing , Office No 9, Near Markaz Hotel, Jogeshwari West, Mumbai &#8211; 400102,&hellip;"
        description="Website Design and Development Company"
        url="https://makemelive.in/contact/"
        type="website"
        site_name="Makemelive Technologies"
      />
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
                            Diamond SEA CHS LTD, Plot No 134, C Wing , Office No
                            9,
                            <br /> Near Markaz Hotel, Jogeshwari West, Mumbai -
                            400102, Maharashtra, India
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
                <ContactForm />
                {/* {googleMap()} */}
                {/* {isTestpage ? <ContactForm />  : googleMap()} */}
              </div>
            </div>
          </div>
        </section>
        {/* <section className="contact-fold2">
          <div className="col-md-12 col-xs-12">
            {googleMap()}
            </div>
        </section> */}
      </div>
    </PageAnimWrapper>
  );
}
