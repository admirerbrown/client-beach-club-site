import React from "react";
import bgVideo from "../assets/backgroundvideo.mp4";
import { BsArrowDown } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";

import NavBar from "./NavBar";

const Hero = () => {
  return (
    <div className="flex flex-col w-full min-h-full ">
      <video
        className="w-screen h-[750px] object-cover "
        src={bgVideo}
        autoPlay
        muted
        loop
        playbackRate={0.5}
      ></video>

      <div className="absolute top-0 left-0 w-full h-[750px] bg-[rgb(22,36,63,0.5)] text-white flex flex-col lg:justify-end md:justify-center lg:pb-12 md:items-center">
        <div className=" text-start flex justify-between mx-4 lg:mx-0 mb-3 font-Cormorant-Garamond mt-52 lg:mt-0 md:mt-60">
          <p className="flex tracking-[0.2rem] text-[16px] font-IBM-Plex-Sans">KUTI BALI,</p>
          <div className="flex gap-2 items-center">
          <p className="flex tracking-[0.2rem] font-IBM-Plex-Sans text-[13px]">DIRECT ME</p>
          <FaArrowRight className="text-stone-400"></FaArrowRight>
          </div>
        </div>
        <hr className="lg:w-4/6 md:w-5/6 h-5 mx-4 lg:m-0 lg:ms-0" />

        <div className="lg:w-4/6 w-5/6 flex lg:pl-0">
          <div className="flex items-start 2xl:gap-20 lg:gap-14 ml-4 mt-5">
            <h1 className=" mt-4 text-[75px] leading-[80px] lg:ml-3 md:text-7xl 2xl:mt-0 text-start font-thin antialiased lg:text-6xl 2xl:text-9xl xl:text-7xl mb-6 font-Cormorant-Garamond">
              Escape To Paradise
            </h1>
            <div className="2xl:mt-6 2xl:ml-12 lg:ml-10 xl:ml-24 hidden lg:visible">
              <div class="outer">
                <div class="circle"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex xl:flex-row-reverse justify-between lg:w-4/6 px-5 lg:px-0">
          <p className="md:ml-20 xl:mt-4 lg:ml-3 xl:ml-0 leading-[45px] md:text-6xl text-start 2xl:text-7xl 2xl:mt-3 text-[42px] xl:text-5xl antialiased tracking-wider font-Cormorant-Garamond">
            At Malibu Beach Club
          </p>
          <div className="gap-2 md:mt-5  md:ml-16 lg:ml-0 md:flex ">
            <BsArrowDown className="text-5xl mt-1 hidden md:visible "></BsArrowDown>
            <p className="flex text-[16px] mt-4 text-start md:text-2xl xl:text-base xl:w-80 2xl:w-96 lg:text-lg text-[rgba(255,255,255,0.8)] font-IBM-Plex-Sans antialiased tracking-wider font-thin">
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


