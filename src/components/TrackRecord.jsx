import React from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";
const TrackRecord = () => {
  return (
    <div className="bg-track h-fit py-[4rem] md:py-0 md:h-[558px] px-[2rem] md:px-0  items-center justify-center text-center flex flex-col gap-[2rem]">
      <h1 className="text-[30px] md:text-[40px] font-[700] text-[white] leading-[38.6px] md:leading-[38.6px] font-[Inter]">Track Record</h1>
      <h2 className="text-[14px] md:text-[16px] font-[400] text-[white] leading-[22px] md:leading-[22px] font-[Inter] w-fit md:w-[774px]">
        Skyle Designs has a proven track record of success, with a diverse
        portfolio of projects that showcase our expertise in branding,
        advertising, digital marketing, and more. We bring your brand story to
        life through compelling visuals, engaging content, and strategic
        campaigns that drive growth and enhance brand reputation.
      </h2>
      <h2 className="text-[14px] md:text-[16px] font-[400] text-[white] leading-[22px] md:leading-[22px] font-[Inter] w-fit md:w-[774px]">
        Join us on a creative journey that will elevate your brand to new
        heights. Experience the Skyle Designs difference and unlock the full
        potential of your brand's impact in the market.{" "}
      </h2>
      <NavLink to="/contact-us">
        <button className='border-2 font-[Inter] text-[white] hover:text-[black]  hover:bg-[white] border-[white] bg-none rounded-[15px] h-[54px] w-[170px] md:w-[196px] text-center flex items-center justify-center leading-[19.36px] font-[400] text-[16px]'>view our projects</button>
      </NavLink>{" "}
    </div>
  );
};

export default TrackRecord;
