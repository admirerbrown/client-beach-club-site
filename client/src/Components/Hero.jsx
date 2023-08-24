import React from "react";
import bgVideo from "../assets/backgroundvideo.mp4";

const HeroSection = () => {
  return (
    <div className="w-full h-full">
      <div className="absolute top-0 left-0 w-full h-full bg-[rgb(71,70,76,0.7)]"></div>
      <video
        className="w-screen h-screen object-cover "
        src={bgVideo}
        autoPlay
        muted
        loop
        playbackRate = {0.5}
      ></video>
      <div className="absolute top-0 flex flex-col text-white">
        <h1>this is a video text overlay</h1>
      </div>
    </div>
  );
};

export default HeroSection;
