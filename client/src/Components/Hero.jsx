import React from "react";
import bgVideo from "../assets/backgroundvideo.mp4";
import { BsArrowDown } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";

import NavBar from "./NavBar";

const Hero = () => {
  return (
    <div className="flex flex-col w-full min-h-full ">
      <video
        className="w-screen h-[750px] md:h-screen object-cover "
        src={bgVideo}
        autoPlay
        muted
        loop
        playbackRate={0.5}
      ></video>

      <div className="absolute top-0 left-0 w-full h-[750px] md:h-screen bg-[rgb(22,36,63,0.5)] text-white flex flex-col md:justify-end md:pb-24 md:items-center ">
        <div className=" text-start w-full flex justify-between px-4 lg:mx-0 mb-3 font-Cormorant-Garamond mt-52 md:mt-60 md:px-5 xl:px-12 2xl:w-[69%]">
          <p className="flex tracking-[0.2rem] text-[16px] xl:text-[19px] font-IBM-Plex-Sans">KUTA BALI,</p>
          <div className="flex gap-2 items-center">
            <p className="w-full flex tracking-[0.2rem] font-IBM-Plex-Sans text-[13px] xl:text-[14px]">DIRECT ME</p>
            <FaArrowRight className="text-stone-400"></FaArrowRight>
          </div>
        </div>
        <hr className="md:w-[95%] 2xl:w-[65%] h-5 mx-4 xl:w-[93%] lg:m-0 lg:ms-0" />

        <div className=" w-full flex lg:pl-0 xl:mt-5 2xl:w-[68%]">
          <div className="flex w-full items-start 2xl:gap-20 lg:gap-14 ml-4 md:ml-0 mt-5 2xl:mt-0 ">
            <h1 className=" mt-4 text-[75px] md:pl-5 leading-[80px] md:text-[99px] 2xl:mt-0 text-left font-thin antialiased 2xl:text-9xl xl:text-[135px] xl:ml-5 2xl:text-[145px] mb-6 2xl:mb-0 font-Cormorant-Garamond">
              Escape To Paradise
            </h1>
            <div className="2xl:mt-10 2xl:ml-0 lg:ml-10 xl:ml-10  hidden xl:mt-5 xl:flex">
              <div class="outer">
                <div class="circle"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full 2xl:w-[68%] flex-col lg:flex xl:flex-row-reverse justify-between px-5 lg:px-0 xl:pr-6 2xl:pr-5">
          <p className=" xl:mt-4 md:pl-3 lg:ml-3 xl:ml-0 xl:pr-10 2xl:pr-0 leading-[45px] md:text-7xl xl:pt-5 2x:pt-0 mt-0 text-start 2xl:text-7xl 2xl:mt-0 text-[42px] xl:text-[60px] 2xl:text-[67px] antialiased tracking-wider font-Cormorant-Garamond">
            At Malibu Beach Club
          </p>
          <div className="gap-2 md:mt-5 lg:ml-4 md:flex items-center xl:pl-5">
            <BsArrowDown className="text-[60px] mt-1 hidden md:flex  "></BsArrowDown>
            <p className="flex text-left text-[16px] mt-4  2xl:mt-0 md:px-3 md:w-[450px] xl:w-[500px] md:text-[19px] xl:text-[20px] lg:text-lg text-[rgba(255,255,255,0.8)] font-IBM-Plex-Sans antialiased tracking-wider font-thin">
              Discover a world of elegance and beachfront enchantment at our
              esteemed beach club.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute w-full">
        <NavBar></NavBar>
      </div>
    </div>
  );
};
export default Hero;


