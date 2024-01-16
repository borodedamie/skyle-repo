import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { carousel } from "../assets/utils/data";
import Glide from "@glidejs/glide";
import "../css/glide.core.css";
import "../css/glide.theme.css";

const Carousel = () => {
  useEffect(() => {
    new Glide(".frontpage-ads", {
      type: "carousel",
      perView: 4,
      breakpoints: {
        420: {
          perView: 1.5,
        },
        768: {
          perView: 2,
        },
        1024: {
          perView: 4,
        },
        1280: {
          perView: 5,
        },
      },
      gap: 20,
      autoplay: 3000,
    }).mount();
  }, []);

  return (
    <div className="frontpage-ads" style={{ backgroundColor: "#0C0C0C" }}>
      <div className="glide__track" data-glide-el="track">
        <div className="glide__slides">
          {carousel.map((item, index) => (
            <div key={index} className="glide__slide">
              <img
                className="px-0 mx-0"
                src={item.carousel1}
                alt={`Slide ${index + 1}`}
                style={{ height: '500px', objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;