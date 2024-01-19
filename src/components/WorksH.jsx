import React from "react";
import portfolio from '../assets/gif/page.gif'
const WorksH = () => {
  return (

    <div className="relative h-fit md:h-[30rem] justify-center mx-auto flex items-center">
      <img className="w-[100%] md:w-[1500px] md:mt-[10rem] flex text-center place-content-center items-center mx-auto absolute" src={portfolio}/>
    <div className=" h-[20rem] md:h-[30rem] flex flex-col px-[3rem] md:px-[20rem] w-[100%] mx-auto justify-center items-center">
      <h2 className="flex relative flex-col z-[100] text-center font-AtypDisplay items-center text-[white] text-[30px] md:text-[50px] leading-[33px] md:leading-[60.01px] uppercase font-[700]">
        We've worked with some amazing businesses
      </h2>
      <h2 className="text-[white] relative z-[100] font-[Inter] font-[400] pt-[1rem] text-[18px] leading-[18.63px]">
        Here are a few of our favourites
      </h2>
    </div>
    </div>
  );
};

export default WorksH;
