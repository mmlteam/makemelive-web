import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap, Expo } from "gsap";
import { workImagePath } from "../../utils/assetUtils";
import "./lp-portfolio-gallery.scss";
const PortfolioData = [
  {
    id: 1,
    portfolioimage: "xppen-portfolio.jpeg",
    portfoliotitle: "XP-PEN",
    developedcompanyname: "Makemelive Technologies",
    portlink: "https://xp-pen.co.in/",
    category: "website"
  },
  {
    id: 2,
    portfolioimage: "edtimes-featured.jpeg",
    portfoliotitle: "ED Times",
    developedcompanyname: "Makemelive Technologies",
    portlink: "https://edtimes.in/",
    category: "website"
  },
  {
    id: 3,
    portfolioimage: "fca-featured.jpeg",
    portfoliotitle: "FINDCreative | React Website",
    developedcompanyname: "Makemelive Technologies",
    portlink: "https://www.findcreative.in/",
    category: "website"
  },
  {
    id: 4,
    portfolioimage: "brego-featured.jpeg",
    portfoliotitle: "Brego",
    developedcompanyname: "Makemelive Technologies",
    portlink: "https://brego.ai/",
    category: "webapp/androidapplication"
  },
  {
    id: 5,
    portfolioimage: "mindshift-interactive-featured.jpeg",
    portfoliotitle: "MindShift Interactive",
    developedcompanyname: "Makemelive Technologies",
    portlink: "https://www.mindshiftinteractive.com/",
    category: "website"
  },
  {
    id: 6,
    portfolioimage: "sous-featured.jpeg",
    portfoliotitle: "SOUS Online | Fashion Ecommerce",
    developedcompanyname: "Makemelive Technologies",
    portlink: "https://sousonline.com/",
    category: "website"
  },
  {
    id: 7,
    portfolioimage: "karmabites-featured.jpeg",
    portfoliotitle: "Karma Bites",
    developedcompanyname: "Makemelive Technologies",
    portlink: "https://www.karmabites.co.uk/",
    category: "website"
  },
  {
    id: 8,
    portfolioimage: "smittenondesign-featured.jpeg",
    portfoliotitle: "SmittenOnDesign",
    developedcompanyname: "Makemelive Technologies",
    portlink: "https://smittenondesign.com/",
    category: "website"
  },
  {
    id: 9,
    portfolioimage: "themonetadesign-featured.jpeg",
    portfoliotitle: "The Moneta Design | Ecommerce",
    developedcompanyname: "Makemelive Technologies",
    portlink: "https://www.themonetadesign.com/",
    category: "website"
  },
  {
    id: 10,
    portfolioimage: "the-moneta-featured.jpeg",
    portfoliotitle: "The Moneta",
    developedcompanyname: "Makemelive Technologies",
    portlink: "http://themoneta.in/",
    category: "website"
  },
  {
    id: 11,
    portfolioimage: "pmo-bytes-featured.jpeg",
    portfoliotitle: "PMO Bytes",
    developedcompanyname: "Makemelive Technologies",
    portlink: "https://pmobytes.com/",
    category: "website"
  },
  {
    id: 12,
    portfolioimage: "mayura-analytical-featured.jpeg",
    portfoliotitle: "Mayura Analytical",
    developedcompanyname: "Makemelive Technologies",
    portlink: "https://www.mayuraanalytical.com/",
    category: "website"
  },
  {
    id: 13,
    portfolioimage: "yuzuki-featured-image.jpeg",
    portfoliotitle: "Yuzuki Instruments",
    developedcompanyname: "Makemelive Technologies",
    portlink: "https://www.yuzuki.co.in/",
    category: "website"
  },
  {
    id: 14,
    portfolioimage: "koy-featured.jpeg",
    portfoliotitle: "KOY.STORE",
    developedcompanyname: "Makemelive Technologies",
    portlink: "https://koy.store/",
    category: "website"
  },
  {
    id: 15,
    portfolioimage: "jannat-homes-featured.jpeg",
    portfoliotitle: "Jannat Homes",
    developedcompanyname: "Makemelive Technologies",
    portlink: "https://jannathomes.com/",
    category: "website"
  },
  {
    id: 16,
    portfolioimage: "shivam-autozone-featured-1.jpeg",
    portfoliotitle: "Shivam Autozone",
    developedcompanyname: "Makemelive Technologies",
    portlink: "https://www.shivamautozone.com/",
    category: "website"
  },
  {
    id: 17,
    portfolioimage: "addonskills-featured.jpeg",
    portfoliotitle: "AddOnSkills",
    developedcompanyname: "Makemelive Technologies",
    portlink: "https://www.addonskills.com/",
    category: "website"
  },
  {
    id: 18,
    portfolioimage: "snt-healthcare-arab-emirates-featured.jpeg",
    portfoliotitle: "SNT Healthcare - Arab Emirates",
    developedcompanyname: "Makemelive Technologies",
    portlink: "http://snh.ae/",
    category: "website"
  },
  {
    id: 19,
    portfolioimage: "snt-healthcare-featured.jpeg",
    portfoliotitle: "SNT Healthcare",
    developedcompanyname: "Makemelive Technologies",
    portlink: "http://snt-healthcare.com/",
    category: "website"
  }
];

export default function LandingPortfolio() {
  const [items, setItem] = useState(PortfolioData);
  const [activetab, setActiveTabs] = useState(1);
  const filterItem = portfoliocategory => {
    const updatedcategory = PortfolioData.filter(curElem => {
      return curElem.category === portfoliocategory;
    });

    setItem(updatedcategory);
  };

  const activeTabs = index => {
    setActiveTabs(index);
  };

  useEffect(() => {
    const portTimeline = new gsap.timeline();

    portTimeline
      .from(".portfolio-list-items", {
        opacity: 0,
        duration: 0.5,
        stagger: { amount: 0.25 },
        ease: Expo.easeIn
      })

      .to(".portfolio-list-items", {
        opacity: 1,
        duration: 0.5,
        stagger: { amount: 0.25 },
        ease: Expo.easeIn
      });
  });

  return (
    <div className="container">
      <div className="portfolio-main-wrapper">
        <div className="portfolio-menu-tab-wrapper">
          <ul className="row  justify-content-center portfolio-menu-list-wrap ">
            <li
              className={
                activetab === 1
                  ? "portfolio-menu-list-items active-tabs"
                  : "portfolio-menu-list-items"
              }
              onClick={() => setItem(PortfolioData, activeTabs(1))}
            >
              All
            </li>
            <li
              className={
                activetab === 2
                  ? "portfolio-menu-list-items active-tabs"
                  : "portfolio-menu-list-items"
              }
              onClick={() =>
                filterItem("webapp/androidapplication", activeTabs(2))
              }
            >
              Web App / Android Application
            </li>
            <li
              className={
                activetab === 3
                  ? "portfolio-menu-list-items active-tabs"
                  : "portfolio-menu-list-items"
              }
              onClick={() => filterItem("website", activeTabs(3))}
            >
              Website
            </li>
          </ul>
        </div>
        <div className="row portfolio-list-wrap">
          {items.map(elem => {
            const {
              id,
              portfolioimage,
              portfoliotitle,
              portlink,
              developedcompanyname
            } = elem;
            return (
              <div className="portfolio-list-items col-md-4 col-xs-12" key={id}>
                <Link
                  className="portfolio-list-links"
                  to={portlink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <figure>
                    <div className="portfolio-thumbnail">
                      <div className="developed-company">
                        <p>{developedcompanyname}</p>
                      </div>
                      <img
                        className="portfolio-image"
                        src={workImagePath(portfolioimage)}
                        alt="portfolio-images"
                      />
                    </div>
                    <figcaption className="portfolio-title">
                      <h3>{portfoliotitle}</h3>
                    </figcaption>
                  </figure>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
