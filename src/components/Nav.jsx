import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const Nav = () => {
  const [showNavbar, setShowNavbar] = useState(false);


  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <nav className="relative z-[1000] pt-[2rem] px-[20px] lg:px-[80px] flex flex-row justify-between items-center">
      <NavLink to="/">
        <svg
          width="108"
          height="32"
          viewBox="0 0 108 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M57.0448 4.22443H58.5273H61.1016V15.7325L66.2412 9.79691H72.9633L76.3931 21.3724L79.3795 10.7014L77.645 9.72085H79.6539H81.1234H84.042L78.6244 25.2555C77.5803 28.2481 76.7546 30.1085 76.1457 30.8315C75.5376 31.5486 74.3151 31.9093 72.4897 31.9093C72.1239 31.9093 71.8318 31.9093 71.6095 31.9042C71.3872 31.8991 71.0504 31.8803 70.6097 31.8501V28.5453L71.1292 28.5751C71.535 28.5951 71.9208 28.5802 72.2874 28.5304C72.6583 28.4857 72.9652 28.372 73.2173 28.1995C73.4596 28.036 73.682 27.689 73.8897 27.1699C74.0979 26.6504 74.1818 26.3293 74.1426 26.2156L69.2041 12.154L65.8409 15.8364L71.5797 25.5181H66.598L62.8134 18.7647L61.1016 20.5463V25.5181H57.0448V5.35358L55.0488 4.22521H57.0448V4.22443Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M43.0402 19.9267C43.1853 20.4164 43.3821 20.8116 43.6279 21.1099C44.3556 21.9905 45.5969 22.4308 47.3534 22.4308C48.4072 22.4308 49.2627 22.3163 49.9206 22.0838C51.1678 21.6392 51.7908 20.8127 51.7908 19.6056C51.7908 18.8979 51.4787 18.3541 50.8608 17.9675C50.2425 17.5864 49.2725 17.2555 47.9517 16.9634L45.6906 16.4588C43.4695 15.9593 41.931 15.41 41.0802 14.8207C39.6398 13.8366 38.918 12.293 38.918 10.1955C38.918 8.28021 39.6158 6.69233 41.0057 5.42594C42.3964 4.16466 44.4391 3.53107 47.135 3.53107C49.3862 3.53107 51.3113 4.12506 52.8992 5.31734C54.4867 6.50962 55.323 8.24571 55.3975 10.5166H51.1078V10.5142H48.9675L50.8965 9.42349C50.6358 8.69737 50.1445 8.14731 49.4254 7.77563C48.7276 7.41963 47.867 7.24124 46.8331 7.24124C45.68 7.24124 44.7645 7.47373 44.0776 7.93402C43.3899 8.39863 43.0488 9.04671 43.0488 9.87829C43.0488 10.6401 43.3848 11.209 44.0631 11.5901C44.4979 11.8426 45.4279 12.1347 46.8484 12.4707L50.5291 13.3567C52.1413 13.7425 53.3587 14.2569 54.1801 14.905C55.4563 15.9091 56.0946 17.3637 56.0946 19.2688C56.0946 21.2228 55.3477 22.8401 53.8535 24.132C52.3648 25.4231 50.2574 26.0661 47.5306 26.0661C44.7457 26.0661 42.5587 25.4329 40.9607 24.161C39.3685 22.8895 38.5718 21.1433 38.5718 18.9218H41.3382H42.8312H44.8167L43.0402 19.9259V19.9267Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M88.6429 25.5189H84.5125V5.28883L82.5098 4.15692H84.5125H85.9882H88.6429V25.5189Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M97.4148 12.7049C96.4597 12.7049 95.7179 13.0064 95.1937 13.6051C94.6644 14.2034 94.3323 15.015 94.199 16.0387H100.62C100.551 14.9452 100.22 14.1195 99.6264 13.5553C99.0332 12.986 98.2957 12.7049 97.4152 12.7049H97.4148ZM98.4886 20.8768L99.966 21.712C99.8872 21.8049 99.8048 21.8903 99.7201 21.9664C99.1908 22.451 98.4988 22.6941 97.6473 22.6941C96.8459 22.6941 96.1578 22.4957 95.5897 22.1001C94.6546 21.4618 94.1551 20.3487 94.1002 18.7651H104.91C104.93 17.4051 104.886 16.3614 104.782 15.6337C104.598 14.3971 104.198 13.3087 103.579 12.3736C102.892 11.3099 102.021 10.5332 100.967 10.0385C99.9134 9.54875 98.7309 9.30096 97.4152 9.30096C95.2039 9.30096 93.4074 10.0287 92.0175 11.4879C90.6327 12.9476 89.9399 15.0452 89.9399 17.7807C89.9399 20.6949 90.7068 22.8023 92.2449 24.0985C93.7791 25.3896 95.5501 26.0377 97.5638 26.0377C99.9973 26.0377 101.893 25.2708 103.243 23.7374C104.114 22.7725 104.603 21.8174 104.707 20.8772C102.634 20.8772 100.562 20.8765 98.4886 20.8765V20.8768Z"
            fill="white"
          />
          <path
            d="M85.212 27.8986V30.0766H85.8561C86.1851 30.0766 86.4121 29.9147 86.5419 29.59C86.6113 29.4093 86.6485 29.2007 86.6485 28.9553C86.6485 28.6169 86.5975 28.3531 86.4909 28.1723C86.3843 27.9916 86.1713 27.899 85.8561 27.899H85.212V27.8986ZM85.9718 27.3192C86.1804 27.3239 86.3517 27.347 86.4909 27.3933C86.7226 27.4721 86.9128 27.6113 87.0563 27.8151C87.1723 27.9822 87.2507 28.1629 87.2927 28.3527C87.3342 28.5471 87.3574 28.7326 87.3574 28.9086C87.3574 29.3489 87.2696 29.7241 87.0888 30.0346C86.8477 30.4471 86.4772 30.6557 85.9722 30.6557H84.5356V27.3192H85.9722H85.9718Z"
            fill="white"
          />
          <path
            d="M90.348 27.9124H88.5868V28.6212H90.2041V29.2003H88.5868V30.0578H90.4311V30.6557H87.9058V27.3192H90.348V27.9124Z"
            fill="white"
          />
          <path
            d="M91.4774 29.6275C91.5006 29.7804 91.5422 29.8917 91.6025 29.9706C91.7186 30.105 91.9083 30.1744 92.182 30.1744C92.349 30.1744 92.4831 30.156 92.585 30.1188C92.7795 30.049 92.8768 29.9243 92.8768 29.7341C92.8768 29.6228 92.8305 29.5397 92.7333 29.4793C92.636 29.4189 92.4827 29.3679 92.2745 29.3217L91.9224 29.2429C91.5747 29.1641 91.3387 29.0758 91.2042 28.988C90.9772 28.8351 90.8658 28.5944 90.8658 28.265C90.8658 27.9639 90.9772 27.7185 91.1948 27.5189C91.4128 27.3198 91.7276 27.2221 92.1494 27.2221C92.5015 27.2221 92.8031 27.3151 93.0485 27.5048C93.2939 27.6903 93.4237 27.9588 93.4378 28.3156H92.7705C92.7568 28.1165 92.6686 27.973 92.5063 27.8848C92.3996 27.8291 92.2651 27.8012 92.1032 27.8012C91.9224 27.8012 91.7785 27.8381 91.6723 27.9126C91.5657 27.982 91.51 28.0839 91.51 28.2137C91.51 28.334 91.5657 28.4223 91.6723 28.4823C91.7417 28.5191 91.8856 28.5658 92.1032 28.6214L92.6776 28.7559C92.9324 28.8163 93.1226 28.8998 93.2477 29.0017C93.4468 29.1547 93.5488 29.3817 93.5488 29.6828C93.5488 29.9839 93.4331 30.2387 93.1967 30.4379C92.9649 30.6418 92.636 30.7437 92.2094 30.7437C91.7786 30.7437 91.4355 30.6418 91.1853 30.4426C90.9395 30.2434 90.8145 29.9745 90.8145 29.6271H91.4771L91.4774 29.6275Z"
            fill="white"
          />
          <path
            d="M94.7025 30.6557H94.0073V27.3192H94.7025V30.6557Z"
            fill="white"
          />
          <path
            d="M97.5917 28.3622C97.5407 28.1352 97.4109 27.9729 97.207 27.8847C97.091 27.8337 96.9616 27.8106 96.8224 27.8106C96.5539 27.8106 96.3312 27.9125 96.1598 28.1117C95.9885 28.3156 95.9003 28.6214 95.9003 29.0295C95.9003 29.442 95.9932 29.7294 96.183 29.9007C96.3684 30.072 96.5817 30.1556 96.8224 30.1556C97.0542 30.1556 97.2443 30.0858 97.3972 29.9517C97.5454 29.8172 97.6383 29.6412 97.6705 29.4232H96.9012V28.8672H98.2868V30.6558H97.8281L97.7587 30.2387C97.6242 30.3963 97.5039 30.5072 97.3972 30.5723C97.2118 30.688 96.9848 30.7437 96.7162 30.7437C96.2759 30.7437 95.9144 30.5907 95.6317 30.2849C95.34 29.9744 95.1914 29.5529 95.1914 29.0201C95.1914 28.4826 95.3396 28.0517 95.6364 27.7228C95.9328 27.3981 96.3268 27.2362 96.8134 27.2362C97.2353 27.2362 97.5779 27.3428 97.8375 27.5557C98.0923 27.7737 98.2406 28.0423 98.2778 28.3622H97.5921H97.5917Z"
            fill="white"
          />
          <path
            d="M98.9434 27.3192H99.671L101.001 29.65V27.3192H101.65V30.6557H100.955L99.5922 28.2876V30.6557H98.9434V27.3192Z"
            fill="white"
          />
          <path
            d="M102.805 29.6275C102.828 29.7804 102.869 29.8917 102.93 29.9706C103.046 30.105 103.235 30.1744 103.509 30.1744C103.676 30.1744 103.81 30.156 103.912 30.1188C104.107 30.049 104.204 29.9243 104.204 29.7341C104.204 29.6228 104.158 29.5397 104.06 29.4793C103.963 29.4189 103.81 29.3679 103.602 29.3217L103.25 29.2429C102.902 29.1641 102.666 29.0758 102.531 28.988C102.304 28.8351 102.193 28.5944 102.193 28.265C102.193 27.9639 102.304 27.7185 102.522 27.5189C102.74 27.3198 103.055 27.2221 103.477 27.2221C103.829 27.2221 104.13 27.3151 104.376 27.5048C104.621 27.6903 104.751 27.9588 104.765 28.3156H104.098C104.084 28.1165 103.996 27.973 103.833 27.8848C103.727 27.8291 103.592 27.8012 103.43 27.8012C103.25 27.8012 103.106 27.8381 102.999 27.9126C102.893 27.982 102.837 28.0839 102.837 28.2137C102.837 28.334 102.893 28.4223 102.999 28.4823C103.069 28.5191 103.213 28.5658 103.43 28.6214L104.005 28.7559C104.26 28.8163 104.45 28.8998 104.575 29.0017C104.774 29.1547 104.876 29.3817 104.876 29.6828C104.876 29.9839 104.76 30.2387 104.524 30.4379C104.292 30.6418 103.963 30.7437 103.537 30.7437C103.106 30.7437 102.763 30.6418 102.512 30.4426C102.267 30.2434 102.142 29.9745 102.142 29.6271H102.804L102.805 29.6275Z"
            fill="white"
          />
          <path
            d="M105.79 3.53113V3.89301H105.182V5.56637H104.753V3.89301H104.142V3.53113H105.79Z"
            fill="white"
          />
          <path
            d="M107.387 3.53113H108V5.56637H107.601V4.18982C107.601 4.15022 107.601 4.09375 107.604 4.02279C107.604 3.95221 107.604 3.89851 107.604 3.85891L107.22 5.56599H106.807L106.426 3.85891C106.426 3.89851 106.426 3.95221 106.426 4.02279C106.428 4.09336 106.428 4.14983 106.428 4.18982V5.56637H106.033V3.53113H106.649L107.019 5.13079L107.387 3.53113Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.7509 23.8387L14.0297 14.9972L17.1126 13.8736L18.9618 17.4763L23.1933 10.619L0 18.5753L5.21377 15.7912C5.13915 15.2051 5.09977 14.6078 5.09977 14.0017C5.09977 6.26838 11.3682 0 19.101 0C22.2374 0 25.1327 1.03116 27.466 2.77218L25.4235 3.87006C23.5896 2.72314 21.4228 2.06019 19.101 2.06019C12.5061 2.06019 7.16059 7.40678 7.16059 14.0017C7.16059 14.2498 7.16799 14.496 7.18342 14.7399L32.9915 0.959428L30.1931 5.45607C32.0179 7.82002 33.1033 10.7838 33.1033 14.0017C33.1033 21.7351 26.8349 28.0035 19.101 28.0035C12.8389 28.0035 7.36352 23.8598 5.63567 17.8474L7.57722 17.1416C8.95679 22.2128 13.5925 25.9433 19.1009 25.9433C25.6964 25.9433 31.0429 20.5967 31.0429 14.0017C31.0429 11.5375 30.2967 9.24687 29.017 7.3452L25.8714 12.3993L18.7509 23.8386V23.8387Z"
            fill="white"
          />
        </svg>
      </NavLink>

      {showNavbar ? (
        <div className="flex flex-col bg-[#282828] h-[243px] w-[249px] absolute right-[2rem] top-5 pl-[2rem] pt-[1rem]">
          <svg
            className="absolute right-5 top-5 cursor-pointer"
            onClick={toggleNavbar}
            width="10"
            height="8"
            viewBox="0 0 10 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.76329 0L4.95169 3.32812H5.04831L8.23672 0H10L6.11111 4L10 8H8.23672L5.04831 4.73437H4.95169L1.76329 8H0L3.98551 4L0 0H1.76329Z"
              fill="white"
            />
          </svg>

          <NavLink
            className="text-[white] py-[1rem] font-[400] text-[18px] leading-[21.78px]"
            to="/"
            onClick={toggleNavbar}
          >
            {" "}
            Home
          </NavLink>
          <NavLink
            className="text-[white] py-[1rem]  font-[400] text-[18px] leading-[21.78px]"
            to="/portfolio"
            onClick={toggleNavbar}
          >
            Portfolio
          </NavLink>
          <NavLink
            className="text-[white] py-[1rem]  font-[400] text-[18px] leading-[21.78px]"
            to="/contact"
             onClick={toggleNavbar}
          >
            {" "}
            Contact
          </NavLink>
        </div>
      ) : (
        <svg
          className="cursor-pointer"
          onClick={toggleNavbar}
          width="21"
          height="14"
          viewBox="0 0 21 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.933594"
            width="20.0667"
            height="1.86667"
            rx="0.933333"
            fill="white"
          />
          <rect
            x="0.933594"
            y="6.06668"
            width="20.0667"
            height="1.86667"
            rx="0.933333"
            fill="white"
          />
          <rect
            x="0.933594"
            y="12.1333"
            width="20.0667"
            height="1.86667"
            rx="0.933333"
            fill="white"
          />
        </svg>
      )}
    </nav>
  );
};
export default Nav;
