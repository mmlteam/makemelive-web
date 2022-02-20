import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { imagePath } from "../../utils/assetUtils";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import LpFooter from "../lp-footer";
import "./footer.scss";

export default function Footer() {
  const location = useLocation();
  const currentYear = new Date().getFullYear();
  const [isLandingPage, setLandingPage] = useState(false);
  useEffect(() => {
    if (location.pathname === "/mmllanding") {
      setLandingPage(true);
    } else {
      setLandingPage(false);
    }
  }, [location]);

  return (
    <>
      {isLandingPage ? (
        <LpFooter />
      ) : (
        <footer id="footer">
          <div className="footer-top-img">
            <div className="bg-img" style={{
              backgroundImage: `url(${imagePath("footer-top-banner.jpg")})`
            }}></div>
            <div className="footer-overlay"></div>
            <div className="footer-bg-title">
              <div className="patterns">
                <svg className="animated-text" width="100%" height="100%">
                {/* <defs>
                  <pattern id="polka-dots" x="0" y="0"                    width="80" height="80"
                          patternUnits="userSpaceOnUse">
                    <circle fill="#be9ddf" cx="15" cy="15" r="2"></circle>
                  </pattern>  
                </defs> */}
                {/* <rect x="0" y="0" width="100%" height="100%" fill="url(#polka-dots)"> </rect> */}
                <text x="50%" y="60%"  textAnchor="middle">LET’S WORK TOGETHER</text>
                </svg>
              </div>
              <div className="mobile-text">
                <h2>LET’S WORK TOGETHER</h2>
              </div>
            </div>
            <div className="footer-bg-desc">
              <p>
                Let’s find out how to work together and create something
                meaningful or valuable
              </p>
              <Link className="cybr-btn cybr-btn--sm" to="/contact-us">
                GET IN TOUCH
                <span aria-hidden className="cybr-btn__glitch">GET IN TOUCH</span>
              </Link>
             
            </div>
          </div>
          <div className="footer-middel-content-wrapper">
            <div className="footer-col column1">
              <div className="footer-title">
                <h3>MAKEMELIVE TECHNOLOGIES</h3>
              </div>
              <div className="footer-desc">
                <p>
                  Looking for a Digital marketing agency in Mumbai to grow your
                  business with proficient Web developers in Mumbai? Your quest
                  ends here!
                </p>
              </div>
              <div className="footer-social-icons">
                <ul className="footer-social-icon-wrap">
                  <li className="footer-social-list-item">
                    <a
                      href="https://www.facebook.com/makemelivetech/"
                      target="_blank"
                    >
                      <FaFacebookF />
                    </a>
                  </li>
                  <li className="footer-social-list-item">
                    <a
                      href="https://www.linkedin.com/company/makemelive-technologies"
                      target="_blank"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="footer-social-list-item">
                    <a
                      href="https://twitter.com/makemelivetech"
                      target="_blank"
                    >
                      <FaTwitter />
                    </a>
                  </li>
                  <li className="footer-social-list-item">
                    <a
                      href="https://www.youtube.com/channel/UC1GAWHUiTSF3en8LINDmv2A"
                      target="_blank"
                    >
                      <FaYoutube />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-col column2">
              <div className="footer-title">
                <h3>QUICK LINKS</h3>
              </div>
              <div className="footer-quick-links">
                <ul className="quick-links-wrap">
                  <li className="quick-link-listitem">
                    <NavLink to="/">
                      <FaAngleRight /> 01 – Home
                    </NavLink>
                  </li>
                  <li className="quick-link-listitem">
                    <NavLink to="/services">
                      <FaAngleRight /> 02 – Services
                    </NavLink>
                  </li>
                  <li className="quick-link-listitem">
                    <NavLink to="/upgrade">
                      <FaAngleRight /> 03 – Upgrade
                    </NavLink>
                  </li>
                  <li className="quick-link-listitem">
                    <NavLink to="/work">
                      <FaAngleRight /> 04 – Work
                    </NavLink>
                  </li>
                  <li className="quick-link-listitem">
                    <NavLink to="/about-us">
                      <FaAngleRight /> 05 – About Us
                    </NavLink>
                  </li>
                  <li className="quick-link-listitem">
                    <NavLink to="/contact-us">
                      <FaAngleRight /> 06 – Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-col column3">
              <div className="footer-title">
                <h3>SERVICES</h3>
              </div>
              <div className="footer-services">
                <ul className="footer-services-wrap">
                  <li className="footer-services-listitem">
                    <Link to="/upgrade">
                      <FaAngleRight /> Upgrade
                    </Link>
                  </li>
                  <li className="footer-services-listitem">
                    <Link to="/services">
                      <FaAngleRight /> Website Design and Development
                    </Link>
                  </li>
                  <li className="footer-services-listitem">
                    <Link to="/services">
                      <FaAngleRight /> Mobile App Development
                    </Link>
                  </li>
                  <li className="footer-services-listitem">
                    <Link to="/services">
                      <FaAngleRight /> Search Engine Optimization
                    </Link>
                  </li>
                  <li className="footer-services-listitem">
                    <Link to="/services">
                      <FaAngleRight /> E-Commerce Solutions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-col column4">
              <div className="footer-title">
                <h3>OUR OFFICE</h3>
              </div>
              <div className="footer-desc">
                <p>
                  Diamond SEA CHS LTD, Plot No 134, C Wing , Office No 9, Near
                  Markaz Hotel, Jogeshwari West, Mumbai - 400102, Maharashtra,
                  India
                </p>
              </div>
            </div>
          </div>
          <div className="footer-bottom-content-wrapper">
            <div className="footer-gridline"></div>
            <div className="footer-bottom-content-item">
              <div className="footer-copyright-text">
                <p>© {currentYear} - MAKEMELIVE TECHNOLOGIES</p>
              </div>
              <div className="footer-bottom-social-icon">
                <ul className="footer-social-icon-wrap">
                  <li className="footer-social-list-item">
                    <a
                      href="https://www.facebook.com/makemelivetech/"
                      target="_blank"
                    >
                      <FaFacebookF />
                    </a>
                  </li>
                  <li className="footer-social-list-item">
                    <a
                      href="https://www.linkedin.com/company/makemelive-technologies"
                      target="_blank"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="footer-social-list-item">
                    <a
                      href="https://twitter.com/makemelivetech"
                      target="_blank"
                    >
                      <FaTwitter />
                    </a>
                  </li>
                  <li className="footer-social-list-item">
                    <a
                      href="https://www.youtube.com/channel/UC1GAWHUiTSF3en8LINDmv2A"
                      target="_blank"
                    >
                      <FaYoutube />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      )}
    </>
  );
}
