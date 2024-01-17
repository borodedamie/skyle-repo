import React, { useState } from "react";
import ContactForm from "./ContactForm";
import Seeplans from "./Seeplans";
const Steps = () => {
  const [activeComponent, setActiveComponent] = useState("seePlans");

  const handleStartProjectClick = () => {
    setActiveComponent("contactForm");
  };

  const handleSeePlansClick = () => {
    setActiveComponent("seePlans");
  };
  return (
    <div>
      <div className="px-[20px] md:px-[80px] mx-auto mt-[10rem]">
        <h2 className="text-[#FFFFFF] relative z-[100] uppercase font-Grifter font-[700] text-[30px] md:text-[50px] lg:text-[70px] leading-[32.01px]  md:leading-[62.01px] text-center">
          You are one step to <br />
          your dream designs
        </h2>
        <div className="flex w-[100%] relative z-[10] md:w-fit flex-row gap-3 md:gap-5 mt-[3rem] justify-center items-center mx-auto">
          <button
            onClick={handleStartProjectClick}
            className={`border-2  font-[Inter]  w-[11rem] border-[white] bg-none rounded-[15px] h-[54px] md:w-[145px] text-center flex items-center justify-center leading-[19.36px] font-[400] text-[16px] ${activeComponent === "contactForm" ? 'bg-[white] text-[black]' : 'bg-transparent text-[white]'}`}
          >
            Start a project
          </button>
          <button
            onClick={handleSeePlansClick}
            className={`border-2  font-[Inter] w-[11rem] border-[white] bg-none rounded-[15px] h-[54px] md:w-[145px] text-center flex items-center justify-center leading-[19.36px] font-[400] text-[16px] ${activeComponent === "seePlans" ? 'bg-[white] text-[black]' : 'bg-transparent text-[white]'}`}
          >
            See plans
          </button>
        </div>
      </div>
      {activeComponent === "contactForm" && <ContactForm />}
      {activeComponent === "seePlans" && <Seeplans/>}
    </div>
  );
};

export default Steps;
