import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { imagePath } from "../../utils/assetUtils";
import MenuItem from "./menuitem";
import LpMenuItem from "./lp-menuitem";
import { useLocation } from "react-router-dom";
import TopBar from "./topbar";
import "./navigation.scss";

export default function Navigation() {
  const location = useLocation();
  const [isLandingPage, setLandingPage] = useState(false);
  useEffect(() => {
    if (location.pathname === "/mmllanding") {
      setLandingPage(true);
    } else {
      setLandingPage(false);
    }
  }, [location]);
  return (
    <header className="main-head-wrap">
      {isLandingPage && <TopBar />}
      <div className="menu-wrapper">
        <div className="logo-wrapper">
          <Link to="/">
            <img src={imagePath("logo.png")} alt="logo" />
          </Link>
        </div>
        {isLandingPage ? <LpMenuItem /> : <MenuItem />}
      </div>
    </header>
  );
}
