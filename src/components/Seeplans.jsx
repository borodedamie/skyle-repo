import React from "react";
import check from "../assets/check.svg";
import checkblack from "../assets/checkblack.svg";
import questionblack from "../assets/questionblack.svg";
import question from "../assets/question.svg";
import warning from "../assets/warning.svg";
const Seeplans = () => {
  return (
    <div>
      <div className="flex flex-col  h-fit mx-auto mt-[5rem] mb-[5rem] md:mb-[10rem] lg:mt-[10rem] lg:flex-row justify-between gap-[1.5rem] items-center w-[100%] max-w-[100%] lg:max-w-[90vw]">
        <div className="w-[100%] py-[2rem] px-[20px] lg:px-[2rem] xl:px-[4rem] max-w-[100%] lg:max-w-[30vw] bg-none border border-[#FFFFFF] rounded-[8.21px] h-fit  md:h-[35rem]">
          <div className="flex flex-col ">
            <div className="text-[white]">
              <p className="font-Inter font-[700] text-[14.41px] pb-[1rem] leading-[20.35px] uppercase">
                Advanced
              </p>
              <p className="font-Inter font-[400] text-[13.13px] pb-[1rem]  leading-[16.28px] ">
                Create your everyday Designs.
              </p>
              <p className="font-Inter font-[700] text-[14.41px] pb-[2rem]  leading-[20.35px] uppercase">
                USD $100/mo
              </p>
            </div>
            <hr className="pt-[2rem]" />

            <div className="flex flex-row items-center pb-[1rem]  gap-[1rem] text-[white]">
              <img src={check} alt="check-icon" />
              <div className="flex flex-row gap-[10px]">
                <p className="font-Inter font-[400] text-[13.13px] leading-[16.28px] ">
                  Daily Output
                </p>
                <img src={question} alt="question-icon" />
              </div>
            </div>
            <div className="flex flex-row items-center pb-[1rem]  gap-[1rem] text-[white]">
              <img src={check} alt="check-icon" />
              <p className="font-Inter font-[400] text-[13.13px] leading-[16.28px] ">
                1-2 Days delivery
              </p>
            </div>
            <div className="flex flex-row items-center pb-[1rem]  gap-[1rem] text-[white]">
              <img src={check} alt="check-icon" />
              <div className="flex flex-row items-center  gap-[10px]">
                <p className="font-Inter font-[400] text-[13.13px] leading-[16.28px] ">
                  All design services
                </p>
                <img src={question} alt="question-icon" />
              </div>
            </div>
          </div>
          <button className="border w-full mt-[11rem] font-Inter font-[400] text-[16px] leading-[19.36px] border[white] h-[44px] text-[black]  rounded-[6.15px] bg-[white]">
            Get Started
          </button>
        </div>
        <div className="w-[100%] py-[2rem] px-[10px] lg:px-[2rem] xl:lg:px-[4rem] max-w-[100%] lg:max-w-[30vw] bg-none border border-[#FFFFFF] rounded-[8.21px] h-fit md:h-[35rem]">
          <div className="flex flex-col ">
            <div className="text-[white]">
              <p className="font-Inter font-[700] text-[14.41px] pb-[1rem] leading-[20.35px] uppercase">
                Business
              </p>
              <p className="font-Inter font-[400] text-[13.13px] pb-[1rem]  leading-[16.28px] ">
                Get Double the output everyday.
              </p>
              <p className="font-Inter font-[700] text-[14.41px] pb-[2rem]  leading-[20.35px] uppercase">
                USD $100/mo
              </p>
            </div>
            <hr className="pt-[2rem]" />

            <div className="flex flex-row items-center pb-[1rem]  gap-[1rem] text-[white]">
              <img src={check} alt="check-icon" />
              <div className="flex flex-row gap-[10px]">
                <p className="font-Inter font-[400] text-[13.13px] leading-[16.28px] ">
                  2 Daily Output
                </p>
                <img src={question} alt="question-icon" />
              </div>
            </div>
            <div className="flex flex-row items-center pb-[1rem]  gap-[1rem] text-[white]">
              <img src={check} alt="check-icon" />
              <p className="font-Inter font-[400] text-[13.13px] leading-[16.28px] ">
                1-2 Days delivery
              </p>
            </div>
            <div className="flex flex-row items-center pb-[1rem]  gap-[1rem] text-[white]">
              <img src={check} alt="check-icon" />
              <div className="flex flex-row items-center  gap-[10px]">
                <p className="font-Inter font-[400] text-[13.13px] leading-[16.28px] ">
                  All design services
                </p>
                <img src={question} alt="question-icon" />
              </div>
            </div>
            <div className="flex flex-row items-center pb-[1rem]  gap-[1rem] text-[white]">
              <img src={check} alt="check-icon" />
              <p className="font-Inter font-[400] text-[13.13px] leading-[16.28px] ">
                Motion graphics Services
              </p>
            </div>
          </div>
          <button className="border w-full mt-[9rem] font-Inter font-[400] text-[16px] leading-[19.36px] border[white] h-[44px] text-[black]  rounded-[6.15px] bg-[white]">
            Get Started
          </button>
        </div>{" "}
        <div className="w-[100%] py-[2rem] px-[10px] lg:px-[2rem] xl:px-[4rem] max-w-[100%] lg:max-w-[30vw] bg-[#FFFFFF] border border-[#FFFFFF] rounded-[8.21px]  h-fit  md:h-[35rem]">
          <div className="flex flex-col ">
            <div className="text-[black]">
              <p className="font-Inter font-[700] text-[14.41px] pb-[1rem] leading-[20.35px] uppercase">
                Designated Designer
              </p>
              <p className="font-Inter font-[400] text-[13.13px] pb-[1rem]  leading-[16.28px] ">
                Collaborate In Real Time With Your Designer.
              </p>
              <p className="font-Inter font-[700] text-[14.41px] pb-[2rem]  leading-[20.35px] uppercase">
                USD $100/mo
              </p>
            </div>
            <hr className="border-[black] pt-[2rem]" />

            <div className="flex flex-row items-center pb-[1rem]  gap-[1rem] text-[black]">
              <img src={checkblack} alt="check-icon" />
              <div className="flex flex-row gap-[10px]">
                <p className="font-Inter font-[400] text-[13.13px] leading-[16.28px] ">
                  Designated Designer
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center pb-[1rem]  gap-[1rem] text-[black]">
              <img src={checkblack} alt="check-icon" />
              <p className="font-Inter font-[400] text-[13.13px] leading-[16.28px] ">
                Same Day Delivery
              </p>
            </div>
            <div className="flex flex-row items-center pb-[1rem]  gap-[1rem] text-[black]">
              <img src={checkblack} alt="check-icon" />
              <div className="flex flex-row items-center  gap-[10px]">
                <p className="font-Inter font-[400] text-[13.13px] leading-[16.28px] ">
                  Real Time Slack Communication
                </p>
                <img src={questionblack} alt="question-icon" />
              </div>
            </div>
            <div className="flex flex-row items-center pb-[1rem]  gap-[1rem] text-[black]">
              <img src={checkblack} alt="check-icon" />
              <div className="flex flex-row items-center  gap-[10px]">
                <p className="font-Inter font-[400] text-[13.13px] leading-[16.28px] ">
                  {" "}
                  All Design Services
                </p>
                <img src={questionblack} alt="question-icon" />
              </div>
            </div>
            <div className="flex flex-row items-center pb-[1rem]  gap-[1rem] text-[black]">
              <img src={checkblack} alt="check-icon" />
              <p className="font-Inter font-[400] text-[13.13px] leading-[16.28px] ">
                Motion Design Services
              </p>
            </div>
            <div className="flex flex-row items-center pb-[1rem]  gap-[1rem] text-[black]">
              <img src={warning} alt="warning-icon" />
              <p className="font-Inter capitalize font-[400] text-[13.08px] leading-[22.1px] ">
                Available for US Eastern, Central European & Indochina time
              </p>
            </div>
          </div>
          <button className="border w-full mt-[5rem] xl:mt-[1rem] 2xl:mt-[5rem] font-Inter font-[400] text-[16px] leading-[19.36px] border-[black] h-[44px] text-[black]  rounded-[6.15px] bg-[white]">
            Get Started
          </button>
        </div>
      </div>
      <hr className="border border-[#FFFFFF] w-full" />
    </div>
  );
};

export default Seeplans;
