import React from 'react';
import manipulation from '../assets/manipulation.webp'
import collage from '../assets/collage.webp'

const Belief = () => {
  return (
    <div className='mt-0 md:mt-[6rem] pb-[6rem] px-[2rem] md:px-0'>
      <div className='flex flex-col md:flex-row mx-auto justify-center items-center gap-[3rem] md:gap-[10rem] py-[3rem]'>
        <div className='flex flex-col justify-center items-left w-[414px]'>
            <h2 className='font-[700] font-Inter text-[40px] leading-[38.6px] text-[#FFFFFF] pb-[1rem]'>Our Belief System</h2>
            <p className='font-[400] font-Inter text-[14px] md:text-[16px] leading-[22px] text-[#FFFFFF]'>At Skyle Designs, we believe in the power of creativity to transform brands and captivate audiences. Our team of talented professionals combines strategic thinking, cutting-edge design, and meticulous execution to craft extraordinary campaigns that make a lasting impact.<br/> 
            <br/>
            With our finger on the pulse of the ever-evolving marketing landscape, we pride ourselves on staying ahead of trends and pushing boundaries. We leverage the latest technologies and industry insights to create immersive brand experiences that resonate with your target audience.</p>
        </div>
        <img src={manipulation}/>

      </div>
      <div className='flex flex-col  md:flex-row mx-auto justify-center items-center py-[3rem] gap-[3rem] md:gap-[10rem]'>
      <img className='order-last md:order-first' src={collage}/>
        <div className='flex flex-col justify-center items-left w-[440px] '>
        <h2 className='font-[700] font-Inter text-[40px] leading-[38.6px] text-[#FFFFFF] pb-[1rem]'>Customer Satisfaction</h2>
            <p className='font-[400] font-Inter text-[14px] md:text-[16px] leading-[22px] text-[#FFFFFF]'>Client satisfaction is our top priority. We value strong and collaborative partnerships, working closely with you to understand your unique vision and objectives. From initial ideation to final execution, we are dedicated to delivering tailored solutions that exceed your expectations.</p>
       
        </div>
      </div>
    </div>
  );
}

export default Belief;
