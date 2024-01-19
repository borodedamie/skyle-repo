import React, { useEffect, useState } from "react";
import { more, moremobile } from "../assets/utils/data";
const More = () => {
  const useScreenWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setWidth(window.innerWidth);
      };

      // Event listener for window resize
      window.addEventListener("resize", handleResize);

      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []); // Empty dependency array ensures this effect runs once after the initial render

    return width;
  };
  const screenWidth = useScreenWidth();

  return (
    <div className="bg-[#0C0C0C] border-[0.5px] z-[10] md:h-[420px] bg-transparent   text-[white] flex justify-center mx-auto flex-col border-[white] bg-none rounded-[41px]  relative">
      <p className="text-[#FFFFFF] text-center text-[30px] pt-[2rem] md:text-[40px] px-[2rem] md:px-[1rem] lg:px-0 leading-[31.8px] md:leading-[42.4px] font-[700] font-AtypDisplay">
        Apps, Websites, Logos & More.
      </p>

      {screenWidth <= 767 ? (
        <div className="text-left justify-center flex">
          <div className="grid grid-cols-2 place-items-start text-left px-[1rem] py-[5rem] gap-x-[3rem] gap-y-10 justify-center leading-[16.96px] font-[400] text-[16px]">
            {moremobile.map((moremobiles, s) => {
              return (
                <div className="text-left relative z-[10] capitalize" key={s}>
                  <p className="w-[11rem] text-[16px] font-[Inter] leading-[16.96px] font-[400]">
                    {moremobiles.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
          <div className="flex flex-row text-left md:py-[4rem] gap-y-10 justify-around">
            <div>
              <p className="font-[Inter] px-[1rem] py-[1rem]  text-left leading-[16.96px] font-[400] text-[16px] relative z-[10] capitalize">
                Websites
              </p>
              <p className="font-[Inter] px-[1rem] py-[1rem]  text-left leading-[16.96px] font-[400] text-[16px] relative z-[10] capitalize">
                Signage
              </p>
              <p className="font-[Inter] text-left px-[1rem] py-[1rem]  leading-[16.96px] font-[400] text-[16px] relative z-[10] capitalize">
                Packaging
              </p>
            </div>
            <div>
              <p className="font-[Inter] text-left leading-[16.96px] px-[1rem] py-[1rem] font-[400] text-[16px] relative z-[10] capitalize">
                Slide Decks
              </p>
              <p className="font-[Inter] text-left leading-[16.96px] px-[1rem] py-[1rem] font-[400] text-[16px] relative z-[10] capitalize">
                Infographics
              </p>
              <p className="font-[Inter] text-left leading-[16.96px] px-[1rem] py-[1rem] font-[400] text-[16px] relative z-[10] capitalize">
                Brand Guides
              </p>
            </div>
            <div>
              <p className="font-[Inter] text-left leading-[16.96px] px-[1rem] py-[1rem] font-[400] text-[16px] relative z-[10] capitalize">
                Motion Graphics
              </p>
              <p className="font-[Inter] text-left leading-[16.96px] px-[1rem] py-[1rem] font-[400] text-[16px] relative z-[10] capitalize">
                Social Media Graphics
              </p>
              <p className="font-[Inter] text-left leading-[16.96px] px-[1rem] py-[1rem] font-[400] text-[16px] relative z-[10] capitalize">
                Wireframes
              </p>
            </div>
            <div>
              <p className="font-[Inter] text-left leading-[16.96px] px-[1rem] py-[1rem] font-[400] text-[16px] relative z-[10] capitalize">
                Mobile Apps
              </p>
              <p className="font-[Inter] text-left leading-[16.96px] px-[1rem] py-[1rem] font-[400] text-[16px] relative z-[10] capitalize">
                Brochures
              </p>
              <p className="font-[Inter] text-left leading-[16.96px] px-[1rem] py-[1rem] font-[400] text-[16px] relative z-[10] capitalize">
                Pitch Decks
              </p>
            </div>
            <div>
              <p className="font-[Inter] text-left leading-[16.96px] px-[1rem] py-[1rem] font-[400] text-[16px] relative z-[10] capitalize">
                Email Graphics
              </p>
              <p className="font-[Inter] text-left leading-[16.96px] px-[1rem] py-[1rem] font-[400] text-[16px] relative z-[10] capitalize">
                Blog Graphics
              </p>
              <p className="font-[Inter] text-left leading-[16.96px] px-[1rem] py-[1rem] font-[400] text-[16px] relative z-[10] capitalize">
                Billboards
              </p>
            </div>
           
          </div>
      )}
    </div>
  );
};

export default More;
