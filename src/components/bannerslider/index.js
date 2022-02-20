import React, { useEffect } from "react";
import { gsap, Expo } from "gsap";
import { imagePath } from "../../utils/assetUtils";
import "./bannerslider.scss";

export default function HomeBannerSlider() {
  useEffect(() => {
    gsap.to(".head-slide-1, .head-slide-2, .head-slide-3, .head-slide-4", {
      opacity: 1
    });
    const tl = new gsap.timeline({ paused: true, repeat: -1 });
    const titleTimeline = new gsap.timeline();
    titleTimeline

      .fromTo(
        ".head-slide-1 .slide-content-item h1",
        { opacity: 0, y: 50, delay: 1 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: { amount: 0 },
          ease: Expo.easeOut
        },
        "+=.5"
      )
      .to(
        ".head-slide-1 .slide-content-item h1",
        {
          opacity: 0,
          y: -50,
          duration: 0.5,
          stagger: { amount: 0.25 },
          ease: Expo.easeIn
        },
        "+=.5"
      )

      .fromTo(
        ".head-slide-2 .slide-content-item h1",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: { amount: 0.5 },
          ease: Expo.easeOut
        },
        "+=.5"
      )
      .to(
        ".head-slide-2 .slide-content-item h1",
        {
          opacity: 0,
          y: -50,
          duration: 0.5,
          stagger: { amount: 0.25 },
          ease: Expo.easeIn
        },
        "+=.5"
      )

      .fromTo(
        ".head-slide-3 .slide-content-item h1",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,

          duration: 0.5,
          stagger: { amount: 0.5 },
          ease: Expo.easeOut
        },
        "+=.5"
      )
      .to(
        ".head-slide-3 .slide-content-item h1",
        {
          opacity: 0,
          y: -50,

          duration: 0.5,
          stagger: { amount: 0.25 },
          ease: Expo.easeIn
        },
        "+=.5"
      )

      .fromTo(
        ".head-slide-4 .slide-content-item h1",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,

          duration: 0.5,
          stagger: { amount: 0.5 },
          ease: Expo.easeOut
        },
        "+=.5"
      )
      .to(
        ".head-slide-4 .slide-content-item h1",
        {
          opacity: 0,
          y: -50,

          duration: 0.5,
          stagger: { amount: 0.25 },
          ease: Expo.easeIn
        },
        "+=1"
      );

    tl.add(titleTimeline);
    gsap.delayedCall(
      0,
      function(tl) {
        tl.restart();
      },
      [tl]
    );
  });
  return (
    <div className="home-banner-slide-wrapper">
      <div className="home-banner-bg">
        <img src={imagePath("dot-dark.svg")} alt="dotbg" />
      </div>
      <div className="home-banner-head-title">
        <div className="animation-slide-head">
          <div className="slide-main-wrap">
            <div className="home-slide-wrap head-slide-1">
              <div className="slide-content-item">
                <h1>Human Centric</h1>
              </div>
            </div>
            <div className="home-slide-wrap head-slide-2">
              <div className="slide-content-item">
                <h1>Expert</h1>
              </div>
            </div>
            <div className="home-slide-wrap head-slide-3">
              <div className="slide-content-item">
                <h1>Proficient</h1>
              </div>
            </div>
            <div className="home-slide-wrap head-slide-4">
              <div className="slide-content-item">
                <h1>Ingenious</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
