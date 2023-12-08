import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { carousel } from "../assets/utils/data";
import Glide from "@glidejs/glide";
import "../css/glide.core.css";
import "../css/glide.theme.css";

const Carousel = () => {
  useEffect(() => {
    new Glide(".glide", {
      type: "carousel",
      perView: 4,
      breakpoints: {
        420: {
          perView: 1,
        },
        768: {
          perView: 2.5,
        },
        1024: {
          perView: 4,
        },
        1280: {
          perView: 4,
        },
      },
      gap: 0,
      autoplay: 3000,
    }).mount();
  }, []);

  return (
    <div>
      <div className="glide" style={{ backgroundColor: "#0C0C0C" }}>
        <div className="glide__track" data-glide-el="track">
          <div className="glide__slides h-[310px] md:h-[498px]  ">
            {carousel.map((carouself, index) => {
              return (
                <div key={index} className="glide__slide ">
                  <div className="flex items-center justify-center">
                    <img
                      // className="h-fit"
                      src={carouself.carousel1}
                      alt={`Slide ${index + 1}`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

