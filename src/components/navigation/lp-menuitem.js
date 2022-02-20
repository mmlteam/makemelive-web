import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Hamburger from "./hamburger";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function LpMenuItem() {
  const [hamburger, setHamburger] = useState(false);
  const showHamburger = () => setHamburger(!hamburger);

  return (
    <>
      <div className="hamburger-wrap">
        <Hamburger status={hamburger} onChildClick={setHamburger} />
      </div>
      <nav
        className={
          hamburger
            ? "main-menu lp-main-menu menu-open"
            : "main-menu menu-close"
        }
      >
        <ul className="navbar-wrap">
          <li className="list-item-wrap" onClick={showHamburger}>
            <NavLink exact to="/" activeClassName="active">
              <span className="list-item">01 - Landing page</span>
            </NavLink>
          </li>
          <li className="list-item-wrap" onClick={showHamburger}>
            <NavLink to="/services/" activeClassName="active">
              <span className="list-item">02 - Services</span>
            </NavLink>
          </li>
          <li className="list-item-wrap" onClick={showHamburger}>
            <NavLink to="/upgrade/" activeClassName="active">
              <span className="list-item">03 - Upgrade</span>
            </NavLink>
          </li>
          <li className="list-item-wrap" onClick={showHamburger}>
            <NavLink to="/work/" activeClassName="active">
              <span className="list-item">04 - Work</span>
            </NavLink>
          </li>
          <li className="list-item-wrap" onClick={showHamburger}>
            <NavLink to="/about-us/" activeClassName="active">
              <span className="list-item">05 - About Us</span>
            </NavLink>
          </li>
          <li className="list-item-wrap" onClick={showHamburger}>
            <NavLink to="/contact-us/" activeClassName="active">
              <span className="list-item">06 - Contact</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="header-social-icon">
        <ul className="header-social-icon-wrap">
          <li className="header-social-list-item">
            <a href="https://www.facebook.com/makemelivetech/" target="_blank">
              <FaFacebookF />
            </a>
          </li>
          <li className="header-social-list-item">
            <a
              href="https://www.linkedin.com/company/makemelive-technologies"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li className="header-social-list-item">
            <a href="https://twitter.com/makemelivetech" target="_blank">
              <FaTwitter />
            </a>
          </li>
          <li className="header-social-list-item">
            <a
              href="https://www.youtube.com/channel/UC1GAWHUiTSF3en8LINDmv2A"
              target="_blank"
            >
              <FaYoutube />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
