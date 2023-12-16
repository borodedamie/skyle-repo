import React from "react";
import bank from "../assets/banks.svg";
import arrowdown from "../assets/arrowdown.svg";
import arrowwhite from "../assets/arrowwhite.svg";
const PaymentDetails = () => {
  return (
    <div className="bg-[#2B2B2B] h-[60rem] md:h-[100vh] my-auto flex mx-auto flex-col items-center justify-center">
      <div className="mx-auto flex flex-col w-[80vw] md:w-[40rem] justify-center ">
        <h2 className="font-Grifter mb-[5rem] text-[40px] font-[700] text-[white] uppercase leading-[35px] md:leading-[31.81px] text-center">
          Payment details
        </h2>
        <form>
          <div className="flex flex-col relative">
            <label
              className="font-Inter mb-[10px] text-[#4F5B76] font-[600] text-[13px] leading-[15.51px]"
              htmlFor="number"
            >
              Card number
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="1234 1234 1234 1234"
              className="w-[80vw] relative md:w-[40rem] placeholder:font-Inter placeholder:text-[13px] placeholder:font-[600] placeholder:leading-[15.73px] text-[black] placeholder:text-[#A5ACB8]  pl-[20px] focus:outline-none bg-[white] rounded-[6px] border border-white h-[60px]"
            />
            <img
              className="absolute w-[7rem] md:w-[10rem] right-2 md:right-4 top-11"
              src={bank}
              alt=""
            />
          </div>
          <div className="flex flex-col md:flex-row my-[1rem] gap-[1rem]">
            <div className="flex flex-col">
              <label
                className="font-Inter mb-[10px] text-[#4F5B76] font-[600] text-[13px] leading-[15.51px]"
                htmlFor="number"
              >
                Expiry
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="MM/YY"
                className="w-[80vw]  md:w-[19.5rem] placeholder:font-Inter placeholder:text-[13px] placeholder:font-[600] placeholder:leading-[15.73px] text-[black] placeholder:text-[#A5ACB8]  pl-[20px] focus:outline-none bg-[white] rounded-[6px] border border-white h-[60px]"
              />
            </div>
            <div className="flex flex-col ">
              <label
                className="font-Inter mb-[10px] text-[#4F5B76] font-[600] text-[13px] leading-[15.51px]"
                htmlFor="number"
              >
                CVC
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="CVC"
                className="w-[80vw] md:w-[19.5rem] placeholder:font-Inter placeholder:text-[13px] placeholder:font-[600] placeholder:leading-[15.73px] text-[black] placeholder:text-[#A5ACB8]  pl-[20px] focus:outline-none bg-[white] rounded-[6px] border border-white h-[60px]"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row mt-[1rem] mb-[2rem] gap-[1rem]">
            <div className="flex flex-col relative">
              <label
                className="font-Inter mb-[10px] text-[#4F5B76] font-[600] text-[13px] leading-[15.51px]"
                htmlFor="number"
              >
                Country
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="United States"
                className="w-[80vw] relative md:w-[19.5rem] placeholder:text-[black]  pl-[20px] focus:outline-none bg-[white] rounded-[6px] border border-white h-[60px]"
              />
              <img
                className="absolute right-4 md:right-4 bottom-7"
                src={arrowdown}
                alt="arrow-down"
              />
            </div>
            <div className="flex flex-col ">
              <label
                className="font-Inter mb-[10px] text-[#4F5B76] font-[600] text-[13px] leading-[15.51px]"
                htmlFor="number"
              >
                Postal code
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="90210"
                className="w-[80vw] md:w-[19.5rem] placeholder:text-[#A5ACB8] placeholder:font-Inter placeholder:text-[13px] placeholder:font-[600] placeholder:leading-[15.73px] text-[black] pl-[20px] focus:outline-none bg-[white] rounded-[6px] border border-white h-[60px]"
              />
            </div>
          </div>
          <div className="text-[#000000] relative font-[600] font-Inter text-[13px] leading-[15.73px]">
            <input
              type="text"
              name="firstName"
              placeholder="Total"
              className="w-[80vw] placeholder:font-Inter placeholder:text-[13px] placeholder:font-[600] placeholder:leading-[15.73px] relative md:w-[40rem] placeholder:text-[#000000] font-[600] font-Inter text-[13px] leading-[15.73px]  pl-[20px] focus:outline-none bg-[white] rounded-[6px] border border-white h-[60px]"
            />
            <p className="absolute text-[black] top-6 right-3">$100 </p>
          </div>
          <button className="border rounded-[15px] h-[54px] w-[80vw]  md:w-[40rem] flex flex-row items-center  mt-[2rem] justify-center border-[#FFFFFF] gap-[20px]">
            <p className="text-[white] font-[400] font-Inter text-[16px] leading-[19.36px]">
              Pay now
            </p>
            <img src={arrowwhite} alt="arrow" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentDetails;
