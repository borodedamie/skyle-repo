import React, { useState } from "react";
import dropdown from "../assets/dropdown.svg";
import PaymentDetails from "./PaymentDetails";
const ContactForm = () => {
    const [selectedOption, setSelectedOption] = useState("Slack");
    const [isDropdownOpen, setDropdownOpen] = useState(false);
  
    const handleDropdown = () => {
      setDropdownOpen(!isDropdownOpen);
    };
  
    const handleDropdownOptionClick = (selectedOption) => {
      setSelectedOption(selectedOption);
      setDropdownOpen(false); 
    };
  
    const [selectedOption1, setSelectedOption1] = useState("Logo Designs");
    const [isDropdownOpen1, setDropdownOpen1] = useState(false);
  
    const handleDropdown1 = () => {
      setDropdownOpen1(!isDropdownOpen1);
    };
  
    const handleDropdownOptionClick1 = (selectedOption) => {
      setSelectedOption1(selectedOption);
      setDropdownOpen1(false); 
    };

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
        console.log("Type of Project:", selectedOption1);
        console.log("Preferred Communication:", selectedOption);
      };
  return (
    <div>
     
    <div className=" px-[20px] md:px-[80px]  flex flex-col mx-0 md:mx-auto justify-center relative z-[10] items-center my-[7rem]">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row gap-[1rem]">
          <div className="flex flex-col">
            <label
              className="font-Inter mb-[1rem] text-[#FFFFFF] font-[400] text-[14px] leading-[16.94px]"
              htmlFor="name"
            >
              First name*
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
                onChange={handleInputChange}
              className="w-[80vw] md:w-[350px] xl:w-[414px] text-[white]  pl-[20px] focus:outline-none bg-transparent border border-white h-[60px]"
            />
          </div>
          <div className="flex flex-col">
            <label
              className="font-Inter mb-[1rem] text-[#FFFFFF] font-[400] text-[14px] leading-[16.94px]"
              htmlFor="name"
            >
              Last name*
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-[80vw] md:w-[350px] xl:w-[414px] pl-[20px] text-[white]  focus:outline-none bg-transparent border border-white h-[60px]"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row  gap-[1rem]">
          <div className="flex flex-col">
            <label
              className="font-Inter mt-[2rem] mb-[1rem] text-[#FFFFFF] font-[400] text-[14px] leading-[16.94px]"
              htmlFor="email"
            >
              Email*
            </label>
            <input
            name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-[80vw] md:w-[350px] xl:w-[414px] pl-[20px] focus:outline-none text-[white]  bg-transparent border border-white h-[60px]"
            />
          </div>
          <div className="flex flex-col">
            <label
              className="font-Inter   mt-[2rem] mb-[1rem] text-[#FFFFFF] font-[400] text-[14px]  leading-[16.94px]"
              htmlFor="number"
            >
              Phone no:*
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-[80vw] md:w-[350px] xl:w-[414px] pl-[20px] focus:outline-none bg-transparent border border-white text-[white] h-[60px]"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row  gap-[1rem]">
          <div className="flex flex-col">
            <label
              className="font-Inter  mt-[2rem] mb-[1rem] text-[#FFFFFF] font-[400] text-[14px] leading-[16.94px]"
              htmlFor="name"
            >
              Type of project*
            </label>
            <div className="w-[80vw] md:w-[350px] xl:w-[414px] items-center justify-between flex flex-row relative bg-transparent pl-[20px] text-[white] border font-400 text-[14px] leading-[16.94px]  border-white h-[60px]">
              <div onClick={handleDropdown1}>
                <p>{selectedOption1}</p>
                <img className="absolute right-4 bottom-5" src={dropdown} />
              </div>

              {isDropdownOpen1 && (
                <div className="absolute z-[10] top-full overflow-y-auto left-0  w-[80vw] md:w-[350px] xl:w-[414px] bg-white border text-[black] border-gray-500 h-[200px]">
                  <p className="hover:bg-[#ECECEC] flex flex-row justify-between items-center w-full px-[1rem] py-[15px] h-[51px] font-400 font-Inter text-[14px] leading-[16.94px]" onClick={() => handleDropdownOptionClick1("Logo Designs")}>
                  Logo Designs <span>$100</span>
                  </p>
                  <p className="hover:bg-[#ECECEC] flex flex-row justify-between items-center w-full px-[1rem] py-[15px] h-[51px] font-400 font-Inter text-[14px] leading-[16.94px]" onClick={() => handleDropdownOptionClick1("Websites")}>
                  Websites <span>$100</span>
                  </p>
                  <p className="hover:bg-[#ECECEC] flex flex-row justify-between items-center w-full px-[1rem] py-[15px] h-[51px] font-400 font-Inter text-[14px] leading-[16.94px]" onClick={() => handleDropdownOptionClick1("Slide Decks")}>
                  Slide Decks <span>$100</span>
                  </p>
                  <p className="hover:bg-[#ECECEC] flex flex-row justify-between items-center w-full px-[1rem] py-[15px] h-[51px] font-400 font-Inter text-[14px] leading-[16.94px]" onClick={() => handleDropdownOptionClick1("Motion Graphics")}>
                  Motion Graphics <span>$100</span>
                  </p>
                  <p className="hover:bg-[#ECECEC] flex flex-row justify-between items-center w-full px-[1rem] py-[15px] h-[51px] font-400 font-Inter text-[14px] leading-[16.94px]" onClick={() => handleDropdownOptionClick1("Mobile Apps")}>
                  Mobile Apps <span>$100</span>
                  </p>
                  <p className="hover:bg-[#ECECEC] flex flex-row justify-between items-center w-full px-[1rem] py-[15px] h-[51px] font-400 font-Inter text-[14px] leading-[16.94px]" onClick={() => handleDropdownOptionClick1("Email Graphics")}>
                  Email Graphics <span>$100</span>
                  </p>
                  <p className="hover:bg-[#ECECEC] flex flex-row justify-between items-center w-full px-[1rem] py-[15px] h-[51px] font-400 font-Inter text-[14px] leading-[16.94px]" onClick={() => handleDropdownOptionClick1("Signage")}>
                  Signage <span>$100</span>
                  </p>
                  <p className="hover:bg-[#ECECEC] flex flex-row justify-between items-center w-full px-[1rem] py-[15px] h-[51px] font-400 font-Inter text-[14px] leading-[16.94px]" onClick={() => handleDropdownOptionClick1("Infographics")}>
                  Infographics <span>$100</span>
                  </p>
                  <p className="hover:bg-[#ECECEC] flex flex-row justify-between items-center w-full px-[1rem] py-[15px] h-[51px] font-400 font-Inter text-[14px] leading-[16.94px]" onClick={() => handleDropdownOptionClick1("Social Media Graphics")}>
                  Social Media Graphics <span>$100</span>
                  </p>
                  <p className="hover:bg-[#ECECEC] flex flex-row justify-between items-center w-full px-[1rem] py-[15px] h-[51px] font-400 font-Inter text-[14px] leading-[16.94px]" onClick={() => handleDropdownOptionClick1("Brochures")}>
                  Brochures <span>$100</span>
                  </p>
                  <p className="hover:bg-[#ECECEC] flex flex-row justify-between items-center w-full px-[1rem] py-[15px] h-[51px] font-400 font-Inter text-[14px] leading-[16.94px]" onClick={() => handleDropdownOptionClick1("Blog Graphics")}>
                  Blog Graphics <span>$100</span>
                  </p>
                  <p className="hover:bg-[#ECECEC] flex flex-row justify-between items-center w-full px-[1rem] py-[15px] h-[51px] font-400 font-Inter text-[14px] leading-[16.94px]" onClick={() => handleDropdownOptionClick1("Packaging")}>
                  Packaging <span>$100</span>
                  </p>
                  <p className="hover:bg-[#ECECEC] flex flex-row justify-between items-center w-full px-[1rem] py-[15px] h-[51px] font-400 font-Inter text-[14px] leading-[16.94px]" onClick={() => handleDropdownOptionClick1("Brand Guides")}>
                  Brand Guides <span>$100</span>
                  </p>
                  <p className="hover:bg-[#ECECEC] flex flex-row justify-between items-center w-full px-[1rem] py-[15px] h-[51px] font-400 font-Inter text-[14px] leading-[16.94px]" onClick={() => handleDropdownOptionClick1("Wireframes")}>
                  Wireframes <span>$100</span>
                  </p>
                  <p className="hover:bg-[#ECECEC] flex flex-row justify-between items-center w-full px-[1rem] py-[15px] h-[51px] font-400 font-Inter text-[14px] leading-[16.94px]" onClick={() => handleDropdownOptionClick1("Pitch Decks")}>
                  Pitch Decks <span>$100</span>
                  </p>
                  <p className="hover:bg-[#ECECEC] flex flex-row justify-between items-center w-full px-[1rem] py-[15px] h-[51px] font-400 font-Inter text-[14px] leading-[16.94px]" onClick={() => handleDropdownOptionClick1("Billboards")}>
                  Billboards <span>$100</span>
                  </p>
                </div>
              )}
             
            </div>

          
          </div>
          <div className="flex flex-col">
            <label
              className="font-Inter  mt-[2rem] mb-[1rem] text-[#FFFFFF] font-400 text-[14px] leading-[16.94px]"
              htmlFor="name"
            >
              Preferred chat/project mode of communication*
            </label>
            <div className="w-[80vw] md:w-[350px] xl:w-[414px] items-center justify-between flex flex-row relative bg-transparent pl-[20px] text-[white] border font-400 text-[14px] leading-[16.94px]  border-white h-[60px]">
              <div onClick={handleDropdown}>
                <p>{selectedOption}</p>
                <img className="absolute right-4 bottom-5" src={dropdown} />
              </div>

              {isDropdownOpen && (
                <div className="absolute top-full left-0  w-[80vw] md:w-[350px] xl:w-[414px] bg-white border text-[black] border-gray-500">
                  <p className="hover:bg-[#ECECEC] pl-[1rem] py-[15px] h-[51px] font-400 font-Inter text-[14px] leading-[16.94px]" onClick={() => handleDropdownOptionClick("Slack")}>
                    Slack
                  </p>
                  <p className="hover:bg-[#ECECEC] pl-[1rem] py-[15px] h-[51px] font-400 font-Inter text-[14px] leading-[16.94px]" onClick={() => handleDropdownOptionClick("Trello")}>
                    Trello
                  </p>
                  <p className="hover:bg-[#ECECEC] pl-[1rem] py-[15px] h-[51px] font-400 font-Inter text-[14px] leading-[16.94px]" onClick={() => handleDropdownOptionClick("Whatsapp")}>
                    Whatsapp
                  </p>
                  <p className="hover:bg-[#ECECEC] pl-[1rem] py-[15px] h-[51px] font-400 font-Inter text-[14px] leading-[16.94px]" onClick={() => handleDropdownOptionClick("Hubspot")}>
                    Hubspot
                  </p>
                </div>
              )}
             
            </div>
          </div>
        </div>
      </form>
    </div>
    <PaymentDetails/>
    </div>
  );
};

export default ContactForm;
