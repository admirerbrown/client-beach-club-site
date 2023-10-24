import React from "react";
import bgVideo from "../assets/backgroundvideo.mp4";
import { BsArrowDown } from "react-icons/bs";
import NavBar from "./NavBar";

const Hero = () => {
  return (
    <div className="flex flex-col w-full h-full ">
      <video
        className="w-screen h-screen object-cover "
        src={bgVideo}
        autoPlay
        muted
        loop
        playbackRate={0.5}
      ></video>

      <div className="absolute top-0 left-0 w-full h-full bg-[rgb(22,36,63,0.5)] text-white flex flex-col lg:justify-end md:justify-center pb-24 lg:pb-12 md:items-center">
        <div className="text-start flex  justify-between lg:w-4/6 md:w-5/6 mx-4 lg:mx-0 mb-5 pl-4 font-Cormorant-Garamond mt-52 lg:mt-0 md:mt-60">
          <p className="flex tracking-wider text-xl">KUTI BALI,</p>
          <p className="flex tracking-wider">DIRECT ME</p>
        </div>
        <hr className="lg:w-4/6 md:w-5/6 h-5 mx-4 lg:m-0 lg:ms-0" />

        <div className="lg:w-4/6 w-5/6 flex pl-3 lg:pl-0">
          <div className="flex items-start 2xl:gap-20 lg:gap-14">
            <h1 className=" mt-4 text-6xl lg:ml-3 md:text-7xl 2xl:mt-0 text-start font-light antialiased tracking-wider lg:text-6xl 2xl:text-9xl xl:text-7xl mb-6 font-Cormorant-Garamond">
              Escape To Paradise
            </h1>
            <div className="2xl:mt-6 2xl:ml-12 lg:ml-10 xl:ml-24 invisible lg:visible">
              <div class="outer">
                <div class="circle"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex xl:flex-row-reverse justify-between lg:w-4/6 px-3 lg:px-0">
          <p className="md:ml-20 xl:mt-4 lg:ml-3 xl:ml-0 md:text-6xl text-start 2xl:text-7xl 2xl:mt-3 text-4xl xl:text-5xl antialiased tracking-wider font-Cormorant-Garamond">
            At Malibu Beach Club
          </p>
          <div className="gap-2 md:mt-5  md:ml-16 lg:ml-0 md:flex ">
            <BsArrowDown className="text-5xl mt-1 invisible md:visible "></BsArrowDown>
            <p className="flex text-lg text-start md:text-2xl xl:text-base xl:w-80 2xl:w-96 lg:text-lg text-[rgba(255,255,255,0.8)] font-IBM-Plex-Sans antialiased tracking-wider font-thin">
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


