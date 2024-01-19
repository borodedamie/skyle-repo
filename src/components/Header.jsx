import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ContactForm from './ContactForm';
import Seeplans from './Seeplans';
import herogif from '../assets/gif/Landingpage .gif'
const Header = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleSeePlansClick = () => {
    setActiveComponent('seePlans');
  };

  const handleStartProjectClick = () => {
    setActiveComponent('contactForm');
  };
  return (
    <div className="relative">
      <img className="absolute w-fit md:w-[100vw] flex -top-8" src={herogif}/>
    <div className="px-[20px] md:px-[80px] pt-[4rem] pb-[4rem] md:pt-[6rem] md:pb-[8rem]">
      <h2 className="uppercase relative font-AtypDisplay pt-[6rem] md:pt-[8rem] text-[47px] md:text-[70px] xl:text-[120px] leading-[44.4px] md:leading-[100.2px] xl:leading-[124.2px] font-[700] text-[white]">
        from a <br /> creative point
      </h2>
      <div className="flex relative flex-col max-w-[100%] w-[100%] md:flex-row justify-between items-start md:items-center py-[1rem] md:py-[2rem]">
        <h2 className="text-[white] w-[100%] md:w-[50vw] xl:w-[38vw] font-[Inter] font-[400] text-[19px] md:text-[18px] leading-[24.75px]">
          Skyle® is a graphic and digital design agency, we help established
          brands and ambitious start-ups achieve their full potential with
          scalable design subscription.
        </h2>

        
        <div className="flex w-[100%] md:w-fit flex-row gap-3 md:gap-5 mt-[2rem] md:mt-0 z-10 ">
        <NavLink to="/contacts">
        <button
          onClick={handleSeePlansClick}
          className={`border-2 order-first md:order-last font-[Inter] text-[white] w-[11rem] border-[white] bg-none hover:text-[black] hover:bg-[white] rounded-[15px] h-[54px] md:w-[145px] text-center flex items-center justify-center leading-[19.36px] font-[400] text-[16px] ${
            activeComponent === 'seePlans' ? 'bg-[white] text-[black]' : 'bg-transparent text-[white]'
          }`}
        >
          See plans
        </button>
        {activeComponent === "seePlans" && <Seeplans />}

        </NavLink>
        <NavLink to="/contact">
        <button
          onClick={handleStartProjectClick}
          className={`border-2 font-[Inter] text-[black] w-[11rem] hover:text-[white] hover:bg-transparent border-[white] bg-[white] rounded-[15px] h-[54px] md:w-[145px] text-center flex items-center justify-center leading-[19.36px] font-[400] text-[16px] ${
            activeComponent === 'contactForm' ? 'bg-[white] text-[black]' : 'bg-transparent text-[white]'
          }`}
        >
          Start a project
        </button>
        {activeComponent === "contactForm" && <ContactForm />}
        </NavLink>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Header;
