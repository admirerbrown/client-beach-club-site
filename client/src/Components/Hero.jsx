import React from "react";
import bgVideo from "../assets/backgroundvideo.mp4";
import { BsArrowDown } from "react-icons/bs";
import NavBar from "./NavBar";

const HeroSection = () => {
  return (
    <div className=" flex flex-col w-full h-full ">
      <video
        className="w-screen h-screen object-cover "
        src={bgVideo}
        autoPlay
        muted
        loop
        playbackRate={0.5}
      ></video>
      
      <div className="absolute top-0 left-0 w-full h-full bg-[rgb(22,36,63,0.5)] text-white flex flex-col justify-end pb-32 items-center ">
        <div className="flex justify-between w-4/6  mb-5 font-Cormorant-Garamond">
          <p className="flex tracking-wider text-xl">KUTI BALI,</p>
          <p className="flex tracking-wider">DIRECT ME</p>
        </div>
        <hr className="w-4/6 h-5" />

        <div className="w-4/6 ">
          <div className="flex gap-20 ">
            <h1 className="text-start font-light antialiased tracking-wider text-9xl mb-6 font-Cormorant-Garamond">
              Escape To Paradise
            </h1>
            <div className="mt-6 ml-12">
              <div class="outer">
                <div class="circle"></div>
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex gap-6 mt-3">
              <BsArrowDown className="text-5xl mt-1"></BsArrowDown>
              <p className="text-start text-xl text-[rgba(255,255,255,0.8)] font-Cormorant-Garamond">
                Discover a world of elegance and beachfront<br></br>enchantment
                at our esteemed beach club.
              </p>
            </div>

            <p className="text-7xl antialiased tracking-wider font-Cormorant-Garamond">
              At Malibu Beach Club
            </p>
          </div>
        </div>
      </div>
      <div className="absolute w-full h-24">
        <NavBar></NavBar>
      </div>
    </div>
  );
};

export default HeroSection;
