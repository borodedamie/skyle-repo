import { brands } from "../assets/utils/data";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Brands = () => {

  return (
    <div className="flex flex-col items-center justify-center pt-[5rem] md:pt-[10rem] gap-[5rem]">
      <h2 className="text-[20px] md:text-[40px] text-center relative z-[10] font-AtypDisplay capitalize font-[500] leading-[41.8px] text-[white]">
        Brands that love what we do
      </h2>
      <div className="grid grid-cols-4 place-items-center mx-auto justify-center w-[100%] gap-x-[10rem] gap-y-[3rem]">
        {brands.map((brands1, b) => {
          return (
            <img
              key={b}
              src={brands1.brandname}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Brands;
