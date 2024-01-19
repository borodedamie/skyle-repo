import React from "react";
import { whatwedo } from "../assets/utils/data";
import creative from '../assets/gif/creative.gif'
const Whatwedo = () => {
  return (
    <div className="bg-[#0C0C0C] px-[20px] md:px-[80px]  flex flex-col md:flex-row justify-between items-start pt-[5rem] pb-[0rem] md:pt-[8rem] md:pb-[8rem] gap-[15vw] md:gap-[10vw] lg:gap-[20vw] max-w-[100%] w-[100%]">
      <div className="flex flex-col justify-between gap-y-[7vw] items-start max-w-[100%] md:max-w-[33%]">
        <div className="border-b border-[#595959] pb-[1rem] md:pb-[2rem]">
          <h2 className="pb-[20px] font-[700] font-AtypDisplay text-[40px] leading-[38.6px] text-[white]">
            What We Do
          </h2>
          <p className="font-[400] font-[Inter] text-[14px] leading-[19.88px] text-[white]">
            We build personalities through clever branding, bring ideas to life
            through our love for print and develop engaging experiences with
            web/mobile design and digital marketing.
          </p>
        </div>
        <img className="w-[15rem] hidden md:flex order-last md:order-2 " src={creative}/>

      </div>
    
      <div className="grid grid-cols-1 order-2 md:order-last md:grid-cols-2 gap-x-[5vw] md:gap-x-[10vw] max-w-[100%] md:max-w-[66%] gap-y-[15vw] md:gap-y-[7vw] ">
        
        {whatwedo.map((whatwedodata, a) => {
          return (
            <div
              className={`border-b border-[#595959] pb-[1rem] md:pb-[2rem] flex flex-col items-start order-${whatwedodata.order}`}
              key={a}
            >
              <h2 className="font-[400] pb-[10px] text-[22px] leading-[31.25px] text-[white]">
                {whatwedodata.header}
              </h2>
              <p className="font-[400] font-[Inter] text-[14px] leading-[19.88px] text-[white]">
                {whatwedodata.text}
              </p>
            </div>
          );
        })}
      </div>
      <img className="flex md:hidden order-last md:order-2 " src={creative}/>

    </div>
  );
};

export default Whatwedo;
