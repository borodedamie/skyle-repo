import React, { useState } from "react";
import ContactForm1 from "./ContactForm1";
import Seeplans1 from "./Seeplans1";
const Step = () => {
  const [activeComponent, setActiveComponent] = useState("contactForm1");

  const handleStartProjectClick = () => {
    setActiveComponent("contactForm1");
  };

  const handleSeePlansClick = () => {
    setActiveComponent("seePlans1");
  };
  return (
    <div>
      <div className="px-[20px] md:px-[80px] mx-auto relative z-[10] mt-[10rem] md:mt-[15rem]">
        <h2 className="text-[#FFFFFF] uppercase font-Grifter font-[700] text-[30px] md:text-[50px] lg:text-[70px] leading-[32.01px]  md:leading-[62.01px] text-center">
          You are one step to <br />
          your dream designs
        </h2>
        <div className="flex w-[100%] md:w-fit flex-row gap-3 md:gap-5 mt-[3rem] justify-center items-center z-10 mx-auto">
          <button
            onClick={handleStartProjectClick}
            className={`border-2  font-[Inter]  w-[11rem] border-[white] bg-none rounded-[15px] h-[54px] md:w-[145px] text-center flex items-center justify-center leading-[19.36px] font-[400] text-[16px] ${activeComponent === "contactForm1" ? 'bg-[white] text-[black]' : 'bg-transparent text-[white]'}`}
          >
            Start a project
          </button>
          <button
            onClick={handleSeePlansClick}
            className={`border-2  font-[Inter] w-[11rem] border-[white] bg-none rounded-[15px] h-[54px] md:w-[145px] text-center flex items-center justify-center leading-[19.36px] font-[400] text-[16px] ${activeComponent === "seePlans1" ? 'bg-[white] text-[black]' : 'bg-transparent text-[white]'}`}
          >
            See plans
          </button>
        </div>
      </div>
      {activeComponent === "contactForm1" && <ContactForm1 />}
      {activeComponent === "seePlans1" && <Seeplans1 />}
    </div>
  );
};

export default Step;
