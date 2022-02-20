import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="topbar-wrapper">
      <div className="left-topbar">
        <p>ISO 9001 Certified | MSME Certified Company</p>
      </div>
      <div className="right-topbar">
        <ul className="right-tobar-listwrap">
          <li className="lp-list-item">
            <a href="mailto:support@makemelive.in">
              <FaEnvelope className="topbar-icon" />
              <span className="topbar-info">support@makemlive.in</span>
            </a>
          </li>
          <li className="lp-list-item">
            <a href="tel:+919167352347">
              <FaPhoneAlt className="topbar-icon" />
              <span className="topbar-info">+91 91673 52347</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
