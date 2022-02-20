import React, {useState, useEffect, useRef} from "react";
import PageAnimWrapper from "../../components/pagetransition";
import { imagePath } from "../../utils/assetUtils";
import Portfolio from "../../components/portfolio/";
import ClientLogosCarousel from "../../components/client-logos-carousel";
import Head from "../Head";
import "./work.scss";

export default function Work() {
  return (
    <PageAnimWrapper>
      <Head 
         title="Work | Makemelive Technologies"
         ogdescription="Work All Our Work Enjoy our handmade work with love for every detail. AllWeb APP/Android ApplicationWebsite Makemelive TechnologiesXP-PEN Makemelive TechnologiesED Times Makemelive TechnologiesFINDCreative | React Website Makemelive TechnologiesBrego Makemelive TechnologiesMindShift Interactive Makemelive TechnologiesSOUS Online | Fashion Ecommerce Makemelive TechnologiesKarma Bites Makemelive&hellip;"
         description="Website Design and Development Company"
         url="https://makemelive.in/work/"
         type="website"
         site_name="Makemelive Technologies"
         />
      <div className="work-page-wrapper">
        <section
          className="work-fold1"
          style={{ backgroundImage: `url(${imagePath("ut-dot-dark.svg")})` }}
        >
          <div className="work-banner-content-wrap">
            <div className="work-banner-title">
              <h1>All Our Work</h1>
            </div>
            <div className="work-banner-subtitle">
              <h2>Enjoy our handmade work with love for every detail.</h2>
            </div>
          </div>
        </section>

        <section className="work-fold2">
          <Portfolio />
        </section>
        <section className="work-fold3">
          <ClientLogosCarousel />
        </section>
      </div>
    </PageAnimWrapper>
  );
}
