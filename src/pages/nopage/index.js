import React from "react";
import { Link } from "react-router-dom";
import Head from "../Head";
import PageAnimWrapper from "../../components/pagetransition";
import { imagePath } from "../../utils/assetUtils";
import {useLocation} from 'react-router-dom'
import "./notfound.scss";

const PageNotFound = () => {
  const location = useLocation();
  

return (
  <PageAnimWrapper>
      <Head 
         title="Makemelive Technologies"
         ogdescription="Contact Get in touch We welcome you to contact us for more information about any of our products or services. Diamond SEA CHS LTD, Plot No 134, C Wing , Office No 9, Near Markaz Hotel, Jogeshwari West, Mumbai &#8211; 400102,&hellip;"
         description="Website Design and Development Company"
         url="https://makemelive.in/contact/"
         type="website"
         site_name="Makemelive Technologies"
         />

      <div className="page-wrapper notfound-page">
        <div className="container">
            <div className="row">
                <div className="col-md-10 col-xs-12 col-offset-md-2">
                    <div className="col-md-10 col-xs-12">
                        <div className="content notfound-wrapper">
                            <div className="title">
                                <div className="subtitle-text">Hey we got 404! </div>
                                <div className="left">
                                    <h2>Lets check</h2>
                                </div>
                                <div className="right">
                                    <h2> below links.</h2>
                                </div>
                            </div>

                            <div className="">
                              <div className="notfound-image-container">
                         
                               <img src={imagePath('4042.png')} alt="makemelive technologies"/> 
                              </div>
                              <p>The page were you looking for, <mark>'{location.pathname}'</mark> could not be found. Use the guide below to find your way again, or <Link to="/contact-us">contact</Link> us, for assitance.</p>
                              <div className="sitemap">
                                <ul className="quick-links-wrap">
                                    <li className="quick-link-listitem">
                                      <Link to="/">
                                        01 – Home
                                      </Link>
                                    </li>
                                    <li className="quick-link-listitem">
                                      <Link to="/services">
                                        02 – Services
                                      </Link>
                                    </li>
                                    <li className="quick-link-listitem">
                                      <Link to="/upgrade">
                                        03 – Upgrade
                                      </Link>
                                    </li>
                                    <li className="quick-link-listitem">
                                      <Link to="/work">
                                        04 – Work
                                      </Link>
                                    </li>
                                    <li className="quick-link-listitem">
                                      <Link to="/about-us">
                                        05 – About Us
                                      </Link>
                                    </li>
                                    <li className="quick-link-listitem">
                                      <Link to="/contact-us">
                                        06 – Contact
                                      </Link>
                                    </li>
                                  </ul>
                              </div>
                          {/* <div className="img-container">
                            <img src={imagePath("4042.png")} alt="404" />
                            <Link to="/" className="link">
                              Take me home
                            </Link>
                          </div>  */}

                        </div>

                      </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

  </PageAnimWrapper>
)

}


export default PageNotFound;
