import React from "react";
import bgVideo from "../assets/backgroundvideo.mp4";

const HeroSection = () => {
  return (
    <div className=" flex w-full h-full justify-end items-end">
      <video
        className="w-screen h-screen object-cover "
        src={bgVideo}
        autoPlay
        muted
        loop
        playbackRate={0.5}
      ></video>
      <div className="absolute top-0 left-0 w-full h-full bg-[rgb(22,36,63,0.5)] text-white flex flex-col justify-end pb-32 items-center ">
        <div className="flex justify-between w-3/5  mb-5 font-serif font-family:Cormorant Garamond">
          <p className="flex tracking-wider text-xl">KUTI BALI,</p>
          <p className="flex tracking-wider">DIRECT ME</p>
        </div>
        <hr className="w-3/5 h-5" />

        <div className=" text-start w-3/5">
          <h1 className="text-start font-light antialiased tracking-wider text-9xl mb-6 font-serif font-family:Cormorant Garamond">
            Escape To Paradise
          </h1>
          <div className="flex gap-10">
            <p className="text-start text-xl text-[rgba(255,255,255,0.8)]">
              Discover a world of elegance and beachfront<br></br>enchantment at
              our esteemed beach club.
            </p>
            <p className="text-5xl antialiased tracking-wider font-serif font-family:Cormorant Garamond">AT MALIBU BEACH CLUB</p>
          </div>
        </div>
      </div>

      {/* <div className="absolute top-0 flex flex-col text-white ">
        <div className="flex justify-between">
          <p>KUTI BALI,</p>
          <p>DIRECT ME</p>
        </div>
        <hr />

        <div className="">
          <h1 className="text-start">Escape to Paradise</h1>
          <div className="flex">
            <p className="text-start">
              Discover a world of elegance and beachfront<br></br>enchantment at
              our esteemed beach club.
            </p>
            <p>AT MALIBU BEACH CLUB</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default HeroSection;
