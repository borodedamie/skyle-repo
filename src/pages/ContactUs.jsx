import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Creativegif from "../assets/gif/creative.gif";
import { NavLink } from "react-router-dom";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
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
  
    fetch("https://formsubmit.co/ajax/olatunjitolulope4@gmail.com", {
      method: "POST",
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log("Response Data:", data);
      // Display success toast notification
      toast.success('Form submitted successfully!');
      // Clear form data after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    })
    .catch(error => {
      console.error('Error during form submission:', error);
      // Display error toast notification
      toast.error('Failed to submit form. Please try again later.');
    });
  };
  return (
    <div className="contact-us">
      <svg
        className="absolute flex top-0 right-0 md:right-0 pb-[1rem] w-[50rem] md:w-[100rem] h-[30vh] md:h-[50vh] pl-[30rem] md:pl-[30rem]"
        width="1124"
        height="260"
        viewBox="0 0 1124 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.3">
          <path
            d="M1659.12 -93.9698C1426.31 -44.3934 1300.81 20.9918 1228.43 74.4816C1168.1 119.076 1169.17 137.319 1105.1 170.59C966.07 242.787 699.742 292.574 570.664 230.53C507.08 199.967 530.6 161.236 500.187 87.915C472.826 21.958 402.085 -68.7561 204.583 -167.344"
            stroke="#303032"
            stroke-width="0.903173"
            stroke-miterlimit="10"
          />
          <path
            d="M1658.66 -77.9774C1432.21 -35.3703 1307.96 26.1414 1235.62 76.2008C1174.76 118.334 1169.81 135.182 1101.76 167.881C959.002 236.477 708.886 284.234 579.627 226.344C513.046 196.527 528.192 158.459 492.557 85.3529C461.183 20.9914 388.997 -68.1716 194.9 -165.875"
            stroke="#303032"
            stroke-width="0.903173"
            stroke-miterlimit="10"
          />
          <path
            d="M1658.2 -61.9829C1438.11 -26.343 1315.03 31.3107 1242.8 77.9243C1181.28 117.635 1170.56 133.052 1098.4 165.177C952.237 230.252 717.631 276.01 588.57 222.164C518.849 193.072 525.88 155.724 484.909 82.7972C449.648 20.0468 375.893 -67.5761 185.187 -164.391"
            stroke="#303032"
            stroke-width="0.903173"
            stroke-miterlimit="10"
          />
          <path
            d="M1657.73 -45.9868C1444.01 -17.314 1321.96 36.4949 1249.98 79.6603C1187.71 116.978 1171.42 130.936 1095.02 162.47C945.74 224.115 725.994 267.909 597.5 217.981C524.492 189.616 523.669 153.019 477.246 80.2387C438.261 19.1148 362.772 -66.9812 175.488 -162.914"
            stroke="#303032"
            stroke-width="0.903173"
            stroke-miterlimit="10"
          />
          <path
            d="M1657.26 -29.9965C1449.89 -8.29526 1328.76 41.6755 1257.16 81.3685C1194.04 116.352 1172.36 128.837 1091.69 159.762C939.547 218.065 734.057 259.938 606.47 213.794C530.028 186.15 521.62 150.328 469.622 77.6767C427.039 18.1837 349.687 -66.3921 165.815 -161.43"
            stroke="#303032"
            stroke-width="0.903173"
            stroke-miterlimit="10"
          />
          <path
            d="M1656.79 -13.9997C1455.81 0.734493 1335.4 46.8649 1264.34 83.0943C1200.24 115.771 1173.45 126.776 1088.33 157.058C933.562 212.121 741.791 252.109 615.42 209.617C535.406 182.71 519.711 147.657 461.979 75.1211C415.942 17.257 336.587 -65.7943 156.12 -159.961"
            stroke="#303032"
            stroke-width="0.903173"
            stroke-miterlimit="10"
          />
          <path
            d="M1656.33 1.99167C1461.71 9.74767 1341.86 52.0267 1271.51 84.8147C1206.29 115.216 1174.62 124.745 1084.98 154.351C927.768 206.269 749.245 244.415 624.369 205.432C540.653 179.296 517.888 144.981 454.334 72.5624C404.972 16.3159 323.468 -65.2019 146.426 -158.484"
            stroke="#303032"
            stroke-width="0.903173"
            stroke-miterlimit="10"
          />
          <path
            d="M1655.85 17.9875C1467.6 18.783 1348.1 57.1663 1278.68 86.5372C1212.16 114.68 1175.83 122.76 1081.61 151.645C922.133 200.519 756.434 236.864 633.304 201.248C545.755 175.926 516.215 142.303 446.675 70.0036C394.14 15.3659 310.385 -64.6006 136.731 -157.008"
            stroke="#303032"
            stroke-width="0.903173"
            stroke-miterlimit="10"
          />
          <path
            d="M1655.4 33.981C1473.52 27.8095 1354.15 62.2572 1285.87 88.2619C1217.87 114.154 1177.18 120.837 1078.27 148.938C916.651 194.867 763.431 229.454 642.271 197.068C550.759 172.612 514.713 139.602 439.047 67.4448C383.418 14.396 297.284 -64.0149 127.013 -155.531"
            stroke="#303032"
            stroke-width="0.903173"
            stroke-miterlimit="10"
          />
          <path
            d="M1654.93 49.9668C1479.41 36.8282 1359.96 67.2738 1293.05 89.9767C1223.39 113.608 1178.57 118.935 1074.91 146.225C911.289 189.3 770.252 222.172 651.22 192.877C555.657 169.358 513.327 136.867 431.402 64.8783C372.81 13.394 284.178 -63.4281 117.341 -154.062"
            stroke="#303032"
            stroke-width="0.903173"
            stroke-miterlimit="10"
          />
          <path
            d="M1654.46 65.9659C1485.29 45.858 1365.55 72.2173 1300.22 91.7026C1228.7 113.038 1180 117.113 1071.55 143.521C905.999 183.835 776.913 215.036 660.169 188.699C560.442 166.2 512.079 134.106 423.758 62.3228C362.306 12.3764 271.076 -62.8302 107.643 -152.578"
            stroke="#303032"
            stroke-width="0.903173"
            stroke-miterlimit="10"
          />
          <path
            d="M1654 81.9617C1491.22 54.8844 1370.92 77.0533 1307.4 93.4273C1233.81 112.401 1181.47 115.352 1068.2 140.819C900.774 178.455 783.454 208.026 669.119 184.518C565.136 163.14 510.959 131.299 416.114 59.7685C351.888 11.3267 257.975 -62.2356 97.9513 -151.102"
            stroke="#303032"
            stroke-width="0.903173"
            stroke-miterlimit="10"
          />
          <path
            d="M1653.53 97.9575C1497.12 63.9109 1376.11 81.763 1314.58 95.1521C1238.72 111.659 1183 113.649 1064.84 138.114C895.589 173.155 789.91 201.137 678.064 180.335C569.761 160.192 509.959 128.439 408.469 57.2097C341.548 10.2416 244.873 -61.641 88.2536 -149.625"
            stroke="#303032"
            stroke-width="0.903173"
            stroke-miterlimit="10"
          />
          <path
            d="M1653.07 113.945C1503.02 72.9308 1381.14 86.3287 1321.76 96.868C1243.46 110.765 1184.55 112.003 1061.5 135.4C890.444 167.922 796.317 194.345 687.023 176.148C574.3 157.367 509.087 125.51 400.835 54.6444C331.273 9.11221 231.773 -61.0596 78.5623 -148.148"
            stroke="#303032"
            stroke-width="0.903173"
            stroke-miterlimit="10"
          />
          <path
            d="M1652.6 129.944C1508.92 81.9605 1386.08 90.758 1328.95 98.596C1248.09 109.689 1186.13 110.432 1058.14 132.7C885.301 162.774 802.696 187.697 695.98 171.97C578.799 154.701 508.314 122.529 393.198 52.0844C321.072 7.95055 218.684 -60.4618 68.8813 -146.68"
            stroke="#303032"
            stroke-width="0.903173"
            stroke-miterlimit="10"
          />
          <path
            d="M1652.14 145.938C1514.8 90.9859 1390.97 95.0301 1336.11 100.317C1252.62 108.366 1187.69 108.918 1054.77 129.992C880.147 157.692 809.053 181.135 704.914 167.788C583.241 152.19 507.618 119.479 385.538 49.5334C310.876 6.75577 205.566 -59.8616 59.1727 -145.195"
            stroke="#303032"
            stroke-width="0.903173"
            stroke-miterlimit="10"
          />
          <path
            d="M1651.65 161.931C1520.7 100.011 1395.29 107.169 1343.27 102.041C1258.19 93.6512 1189.24 107.468 1051.39 127.286C874.961 152.657 815.449 174.67 713.863 163.604C587.681 149.864 507.017 116.339 377.893 46.9733C300.733 5.52086 192.464 -59.2683 49.4748 -143.711"
            stroke="#303032"
            stroke-width="0.903173"
            stroke-miterlimit="10"
          />
          <path
            d="M1651.2 177.922C1526.62 109.036 1399.71 109.76 1350.47 103.761C1264.16 93.2487 1190.83 106.077 1048.06 124.579C869.76 147.691 821.922 168.3 722.812 159.418C592.135 147.722 506.487 113.131 370.248 44.4081C290.608 4.23866 179.362 -58.6824 39.7816 -142.25"
            stroke="#303032"
            stroke-width="0.903173"
            stroke-miterlimit="10"
          />
          <path
            d="M1650.74 193.918C1532.52 118.06 1404.72 112.099 1357.65 105.484C1269.78 93.1387 1192.4 104.751 1044.7 121.882C864.531 142.77 828.476 162.005 731.763 155.249C596.623 145.806 506.018 109.856 362.605 41.8649C280.501 2.94087 166.258 -58.0767 30.0859 -140.758"
            stroke="#303032"
            stroke-width="0.903173"
            stroke-miterlimit="10"
          />
          <path
            d="M1650.27 209.907C1538.43 127.082 1411.82 110.852 1364.82 107.202C1272.26 100.029 1193.94 103.475 1041.35 119.168C859.246 137.887 835.143 155.77 740.709 151.057C601.183 144.085 505.6 106.471 354.954 39.2905C270.385 1.57422 153.149 -57.4933 20.3899 -139.297"
            stroke="#303032"
            stroke-width="0.903173"
            stroke-miterlimit="10"
          />
          <path
            d="M1649.8 225.902C1544.33 136.109 1417.67 114.616 1372 108.928C1278.12 97.2341 1195.47 102.262 1037.99 116.462C853.925 133.054 841.957 149.609 749.661 146.875C605.84 142.616 505.211 103.042 347.315 36.7396C260.278 0.191079 140.054 -56.8931 10.6946 -137.812"
            stroke="#303032"
            stroke-width="0.903173"
            stroke-miterlimit="10"
          />
          <path
            d="M1649.34 241.894C1550.23 145.132 1423.92 118.381 1379.18 110.647C1284.52 94.2753 1196.97 101.098 1034.64 113.749C848.545 128.251 848.935 143.493 758.607 142.686C610.635 141.356 504.855 99.5161 339.668 34.1752C250.158 -1.22764 126.953 -56.3085 0.998559 -136.344"
            stroke="#303032"
            stroke-width="0.903173"
            stroke-miterlimit="10"
          />
        </g>
      </svg>

      <div className="z-[100] relative">
        <div className="creative-gif">
          <img src={Creativegif} alt="creative-gif" />
        </div>

        <h1>Contact Us</h1>
      </div>
      <div className="boxes">
        <div className="box">
          <div>
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1115_3867)">
                <path
                  d="M17 3.06133C21.5422 3.06133 22.0801 3.08125 23.8664 3.16094C25.5266 3.23398 26.423 3.51289 27.0207 3.74531C27.8109 4.05078 28.382 4.42266 28.973 5.01367C29.5707 5.61133 29.9359 6.17578 30.2414 6.96602C30.4738 7.56367 30.7527 8.4668 30.8258 10.1203C30.9055 11.9133 30.9254 12.4512 30.9254 16.9867C30.9254 21.5289 30.9055 22.0668 30.8258 23.8531C30.7527 25.5133 30.4738 26.4098 30.2414 27.0074C29.9359 27.7977 29.5641 28.3687 28.973 28.9598C28.3754 29.5574 27.8109 29.9227 27.0207 30.2281C26.423 30.4605 25.5199 30.7395 23.8664 30.8125C22.0734 30.8922 21.5355 30.9121 17 30.9121C12.4578 30.9121 11.9199 30.8922 10.1336 30.8125C8.47344 30.7395 7.57695 30.4605 6.9793 30.2281C6.18906 29.9227 5.61797 29.5508 5.02695 28.9598C4.4293 28.3621 4.06406 27.7977 3.75859 27.0074C3.52617 26.4098 3.24727 25.5066 3.17422 23.8531C3.09453 22.0602 3.07461 21.5223 3.07461 16.9867C3.07461 12.4445 3.09453 11.9066 3.17422 10.1203C3.24727 8.46016 3.52617 7.56367 3.75859 6.96602C4.06406 6.17578 4.43594 5.60469 5.02695 5.01367C5.62461 4.41602 6.18906 4.05078 6.9793 3.74531C7.57695 3.51289 8.48008 3.23398 10.1336 3.16094C11.9199 3.08125 12.4578 3.06133 17 3.06133ZM17 0C12.3848 0 11.807 0.0199219 9.99414 0.0996094C8.18789 0.179297 6.94609 0.471484 5.87031 0.889844C4.74805 1.32812 3.79844 1.90586 2.85547 2.85547C1.90586 3.79844 1.32812 4.74805 0.889844 5.86367C0.471484 6.94609 0.179297 8.18125 0.0996094 9.9875C0.0199219 11.807 0 12.3848 0 17C0 21.6152 0.0199219 22.193 0.0996094 24.0059C0.179297 25.8121 0.471484 27.0539 0.889844 28.1297C1.32812 29.252 1.90586 30.2016 2.85547 31.1445C3.79844 32.0875 4.74805 32.6719 5.86367 33.1035C6.94609 33.5219 8.18125 33.8141 9.9875 33.8937C11.8004 33.9734 12.3781 33.9934 16.9934 33.9934C21.6086 33.9934 22.1863 33.9734 23.9992 33.8937C25.8055 33.8141 27.0473 33.5219 28.123 33.1035C29.2387 32.6719 30.1883 32.0875 31.1313 31.1445C32.0742 30.2016 32.6586 29.252 33.0902 28.1363C33.5086 27.0539 33.8008 25.8188 33.8805 24.0125C33.9602 22.1996 33.9801 21.6219 33.9801 17.0066C33.9801 12.3914 33.9602 11.8137 33.8805 10.0008C33.8008 8.19453 33.5086 6.95273 33.0902 5.87695C32.6719 4.74805 32.0941 3.79844 31.1445 2.85547C30.2016 1.9125 29.252 1.32812 28.1363 0.896484C27.0539 0.478125 25.8188 0.185938 24.0125 0.10625C22.193 0.0199219 21.6152 0 17 0Z"
                  fill="white"
                />
                <path
                  d="M17 8.26758C12.1789 8.26758 8.26758 12.1789 8.26758 17C8.26758 21.8211 12.1789 25.7324 17 25.7324C21.8211 25.7324 25.7324 21.8211 25.7324 17C25.7324 12.1789 21.8211 8.26758 17 8.26758ZM17 22.6645C13.8723 22.6645 11.3355 20.1277 11.3355 17C11.3355 13.8723 13.8723 11.3355 17 11.3355C20.1277 11.3355 22.6645 13.8723 22.6645 17C22.6645 20.1277 20.1277 22.6645 17 22.6645Z"
                  fill="white"
                />
                <path
                  d="M28.1164 7.92198C28.1164 9.05088 27.2 9.96065 26.0777 9.96065C24.9488 9.96065 24.0391 9.04424 24.0391 7.92198C24.0391 6.79307 24.9555 5.8833 26.0777 5.8833C27.2 5.8833 28.1164 6.79971 28.1164 7.92198Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1115_3867">
                  <rect width="34" height="34" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <h6>Instagram</h6>
          <a href="https://www.instagram.com/designwithskyle/" target="_blank">
            designwithskyle
          </a>
        </div>
        <div className="box">
          <div>
            <svg
              width={34}
              height={34}
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.9036 8.50016C21.2873 8.77013 22.559 9.44686 23.5559 10.4437C24.5527 11.4406 25.2295 12.7123 25.4994 14.096M19.9036 2.8335C22.7784 3.15286 25.4592 4.44024 27.5058 6.48426C29.5524 8.52827 30.8431 11.2074 31.1661 14.0818M14.4877 19.6395C12.7854 17.9373 11.4413 16.0125 10.4553 13.9589C10.3705 13.7823 10.3281 13.6939 10.2955 13.5822C10.1797 13.185 10.2629 12.6973 10.5037 12.3609C10.5715 12.2663 10.6525 12.1853 10.8144 12.0234C11.3097 11.5281 11.5573 11.2805 11.7193 11.0315C12.3298 10.0924 12.3298 8.8817 11.7193 7.94261C11.5573 7.69359 11.3097 7.44595 10.8144 6.95068L10.5384 6.67461C9.78549 5.92173 9.40906 5.5453 9.00477 5.34081C8.20072 4.93412 7.25118 4.93412 6.44713 5.34081C6.04285 5.5453 5.66641 5.92173 4.91353 6.67461L4.69021 6.89793C3.93992 7.64823 3.56477 8.02338 3.27825 8.53342C2.96032 9.09939 2.73172 9.97842 2.73365 10.6276C2.73539 11.2126 2.84888 11.6124 3.07584 12.412C4.29554 16.7093 6.59688 20.7643 9.97985 24.1473C13.3628 27.5303 17.4178 29.8316 21.7151 31.0513C22.5148 31.2783 22.9146 31.3918 23.4996 31.3935C24.1488 31.3954 25.0278 31.1669 25.5937 30.8489C26.1038 30.5624 26.4789 30.1873 27.2292 29.437L27.4526 29.2136C28.2054 28.4608 28.5819 28.0843 28.7864 27.68C29.193 26.876 29.193 25.9264 28.7864 25.1224C28.5819 24.7181 28.2054 24.3417 27.4526 23.5888L27.1765 23.3127C26.6812 22.8175 26.4336 22.5698 26.1846 22.4079C25.2455 21.7973 24.0348 21.7973 23.0957 22.4079C22.8467 22.5698 22.5991 22.8175 22.1038 23.3127C21.9418 23.4747 21.8609 23.5556 21.7662 23.6234C21.4299 23.8643 20.9422 23.9474 20.545 23.8317C20.4332 23.7991 20.3449 23.7567 20.1683 23.6719C18.1146 22.6859 16.1899 21.3417 14.4877 19.6395Z"
                stroke="white"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h6>Call Us</h6>
          <a href="tel:+2348163705876">+234 816 370 5876</a>
          <a href="tel:+447398847224">+44 739 884 7224</a>
        </div>
        <div className="box">
          <div>
            <svg
              width={37}
              height={37}
              viewBox="0 0 37 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.08337 10.7915L15.671 19.6028C16.6903 20.3163 17.1999 20.6731 17.7543 20.8113C18.244 20.9333 18.7561 20.9333 19.2458 20.8113C19.8002 20.6731 20.3098 20.3163 21.3291 19.6028L33.9167 10.7915M10.4834 30.8332H26.5167C29.107 30.8332 30.4021 30.8332 31.3914 30.3291C32.2617 29.8857 32.9692 29.1781 33.4126 28.3079C33.9167 27.3185 33.9167 26.0234 33.9167 23.4332V13.5665C33.9167 10.9763 33.9167 9.68114 33.4126 8.6918C32.9692 7.82155 32.2617 7.11401 31.3914 6.6706C30.4021 6.1665 29.107 6.1665 26.5167 6.1665H10.4834C7.89313 6.1665 6.59801 6.1665 5.60867 6.6706C4.73842 7.11401 4.03088 7.82155 3.58747 8.6918C3.08337 9.68114 3.08337 10.9763 3.08337 13.5665V23.4332C3.08337 26.0234 3.08337 27.3185 3.58747 28.3079C4.03088 29.1781 4.73842 29.8857 5.60867 30.3291C6.59801 30.8332 7.89313 30.8332 10.4834 30.8332Z"
                stroke="white"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h6>Email Us</h6>
          <a href="mailto:info@designwithskyle.com">info@designwithskyle.com</a>
        </div>
      </div>
      <div className="contact-us-form">
        <h1>Send a message</h1>
        <form  onSubmit={handleSubmit}>
          <div className="input-group-grid">
            <div className="input-group">
              <input
                type="text"
                id="first-name"
                name="firstName"
                required=""
                value={formData.firstName}
                onChange={handleInputChange}
              />
              <label htmlFor="first-name">First name*</label>
            </div>
            <div className="input-group">
              <input
                value={formData.lastName}
                onChange={handleInputChange}
                type="text"
                id="last-name"
                name="lastName"
                required=""
              />
              <label htmlFor="last-name">Last name*</label>
            </div>
          </div>
          <div className="input-group-grid">
            <div className="input-group">
              <input
                value={formData.email}
                onChange={handleInputChange}
                type="email"
                id="email"
                name="email"
              />
              <label htmlFor="_replyto">Email</label>
            </div>
            <div className="input-group">
              <input
                value={formData.phone}
                onChange={handleInputChange}
                type="tel"
                id="phone"
                name="phone"
              />
              <label htmlFor="phone_number">Phone no*</label>
            </div>
          </div>
          <div className="input-group">
            <textarea
              value={formData.message}
              onChange={handleInputChange}
              id="message"
              name="message"
              defaultValue={""}
            />
            <label htmlFor="message">Message*</label>
          </div>
          <div className="contact-us-buttons">
            <input type="submit" id="submit-button" defaultValue="Submit" />
            <NavLink to="/">
              <p>Back to home</p>
            </NavLink>
          </div>
          <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>

        </form>
      </div>
    </div>
  );
};

export default ContactUs;
