import React from "react";
import { NavLink } from "react-router-dom";
import page from '../assets/gif/page.gif'

const AboutHero = () => {
  return (
    <div className="relative h-fit md:h-[30rem] justify-center mx-auto flex flex-col items-center">
            <img className="w-[100%] md:w-[1500px] md:mt-[10rem] flex text-center place-content-center items-center mx-auto absolute" src={page}/>

      <h2 className="flex pt-[4rem] md:pt-[2rem] z-[100] flex-col text-center font-AtypDisplay items-center text-[white] text-[30px] md:text-[80px] leading-[33px] md:leading-[82.8px] uppercase font-[800]">
        ABOUT US
      </h2>
      <h2 className="text-[#FFFFFF] w-[651px] px-[2rem] mx-auto pb-[1rem] text-center z-[100] font-Inter font-[400] pt-[1rem] md:px-0 text-[14px] md:text-[16px] leading-[22px]">
        Welcome to Skyle Designs, a visionary creative and ads agency based in
        the UK. For the past three years, we have been at the forefront of
        delivering innovative and captivating marketing solutions to businesses
        across various industries.
      </h2>
      <NavLink to="/contact-us">
        <button className="border-2 mb-[5rem] md:mb-0 font-Inter w-[140px] hover:text-[black] hover:bg-[white] border-[white] rounded-[15px] h-[54px]  md:w-[145px] text-center flex items-center justify-center leading-[19.36px] font-[400] text-[16px] bg-[white] text-[black]">
          Start a project
        </button>
      </NavLink>
    </div>
  );
};

export default AboutHero;
