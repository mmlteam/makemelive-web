import React from "react";
import Slider from "react-slick";
import { clienttestimonialsImagePath } from "../../utils/assetUtils";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import "./client-testimonials.scss";

export default function ClientTestimonials() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    nextArrow: <FaChevronRight />,
    prevArrow: <FaChevronLeft />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <Slider {...settings} className="client-testimonials-wrapper">
      <div className="main-testimonial-client-wrap">
        <div className="client-testimonials-item-wrap">
          <div className="client-testimonial-pic">
            <img
              src={clienttestimonialsImagePath("mindshift.png")}
              alt="websitedevelopment"
            />
          </div>
          <div className="client-testimonials-quote">
            <div className="client-testimonials-desc">
              <p>
                “Working with the MakeMeLive Technologies team has been a dream!
                We have worked with them on various projects over the past 7
                years, and they keep getting better. Their sound understanding
                of the space, response time, and ability to deliver great work
                with passion has kept us and our partners extremely happy. I
                wish them all the best for the future!”
              </p>
            </div>
            <div className="testimonials-author">
              <h3>Zafar Rais</h3>
            </div>
            <div className="client-testimonial-origin">
              <h4>CEO, Mindshift Interactive</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="main-testimonial-client-wrap">
        <div className="client-testimonials-item-wrap">
          <div className="client-testimonial-pic">
            <img
              src={clienttestimonialsImagePath("edtimes.png")}
              alt="websitedevelopment"
            />
          </div>
          <div className="client-testimonials-quote">
            <div className="client-testimonials-desc">
              <p>
                “Sharik & Makemelive technologies is a delight to work with.
                Their approach to issues is very hands on and positive. And
                their turn around time is impressive. They should be your first
                tech choice as a startup. Wish them all the best, always.”
              </p>
            </div>
            <div className="testimonials-author">
              <h3>Juhi Garg</h3>
            </div>
            <div className="client-testimonial-origin">
              <h4>Co-Founder, ED Times</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="main-testimonial-client-wrap">
        <div className="client-testimonials-item-wrap">
          <div className="client-testimonial-pic">
            <img
              src={clienttestimonialsImagePath("carat.png")}
              alt="websitedevelopment"
            />
          </div>
          <div className="client-testimonials-quote">
            <div className="client-testimonials-desc">
              <p>
                “Sharik & Team are Superstar & they take up all challenges
                thrown at them with great passion. They keep client’s priorities
                at the top & are agile to work around the clock to meet tough
                timelines & ensure quality of work is never affected. We have
                worked with them for over 2 years now on multiple projects & we
                have seen some amazing work delivered. They are the “Go To Team”
                for any website & tech support required.”
              </p>
            </div>
            <div className="testimonials-author">
              <h3>Sagar Patil</h3>
            </div>
            <div className="client-testimonial-origin">
              <h4>Media Director, Carat India( Dentsu International)</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="main-testimonial-client-wrap">
        <div className="client-testimonials-item-wrap">
          <div className="client-testimonial-pic">
            <img
              src={clienttestimonialsImagePath("xppen.png")}
              alt="websitedevelopment"
            />
          </div>
          <div className="client-testimonials-quote">
            <div className="client-testimonials-desc">
              <p>
                “Sharik and the MakeMeLive team helped us bring to life the
                XP-Pen ecommerce store. They understood our requirements,
                explained the complexities involved and delivered a complete
                solution in the least possible time (just as we envisaged it).
                They're a competent and determined group - one that we hope to
                work together with over the next phase of our business growth!”
              </p>
            </div>
            <div className="testimonials-author">
              <h3>Nishit Shah</h3>
            </div>
            <div className="client-testimonial-origin">
              <h4>Country Manager, Xp Pen</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="main-testimonial-client-wrap">
        <div className="client-testimonials-item-wrap">
          <div className="client-testimonial-pic">
            <img
              src={clienttestimonialsImagePath("fca-logo.png")}
              alt="websitedevelopment"
            />
          </div>
          <div className="client-testimonials-quote">
            <div className="client-testimonials-desc">
              <p>
                “MakeMeLive has been a partner who has consistently delivered on
                all of our website requirements. They are very meticulous with
                details and have always been flexible and accommodative with our
                various requirements. Their strict adherence to timelines makes
                them our go-to partner for anything website related.”
              </p>
            </div>
            <div className="testimonials-author">
              <h3>Colin Myers</h3>
            </div>
            <div className="client-testimonial-origin">
              <h4>Co-Founder, Findcreative</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="main-testimonial-client-wrap">
        <div className="client-testimonials-item-wrap">
          <div className="client-testimonial-pic">
            <img
              src={clienttestimonialsImagePath("smitten-grey-logo.png")}
              alt="websitedevelopment"
            />
          </div>
          <div className="client-testimonials-quote">
            <div className="client-testimonials-desc">
              <p>
                “It’s been a pleasure working with Sharik and his team. After
                having had lots of bad experiences with my website development
                when I started working with MML I was so pleasantly surprised
                with the professionalism, promptness and always there to help
                attitude. They are always ready to help find a solution that
                would be in the clients best interest which I honestly had
                struggled to find in this industry prior to this. Really happy
                to be working with them and the timely responses and happy
                attitude with which all our work is so smoothly run.”
              </p>
            </div>
            <div className="testimonials-author">
              <h3>Vinita Shah</h3>
            </div>
            <div className="client-testimonial-origin">
              <h4>Founder, SmittenOnDesign</h4>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
}
