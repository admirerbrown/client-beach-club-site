import React, { useState } from "react";
import { carouselItems } from "../db/carouselItems";

function Carousel() {
  const [activeImageIndex, setActiveImageIndex] = useState();
  const [previousImageIndex, setPreviousImageIndex] = useState();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseHover = (index) => {
    if (index !== activeImageIndex) {
      setPreviousImageIndex(activeImageIndex);
      setActiveImageIndex(index);
      setIsHovered(true);
      console.log({ isHovered });
    }
  };

  const handleMouseOut = () => {
    // setActiveImageIndex(); // Not sure if you want to reset activeImageIndex
    // setIsHovered(false);
    // console.log({ activeImageIndex, isHovered });
  };



  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <div className="flex flex-col justify-center items-center w-full h-full gap-20 2xl:mx-10">
        <div className="relative overflow-hidden  w-[92%] md:w-[95%] 2xl:w-[91%] h-[2000px] md:h-[1500px] lg:h-[900px] xl:h-[800px] frame zoomout">
          {carouselItems.map((item, index) => (
            <img
              key={index}
              className="absolute top-0 left-0 h-full w-full"
              src={item.image}
              alt=""
              style={{
                transform: `scale(${index === activeImageIndex ? 1 : 1.5})`,
                zIndex: index === activeImageIndex ? 1 : 0,
                opacity: index === previousImageIndex ? 0 : 1,
              }}
            />
          ))}
        </div>
        <div className=" absolute bg-[rgb(236,246,255,0.2)] z-10 grid grid-cols-1 h-[2000px] md:h-[1500px] md:grid-cols-2 lg:grid-rows-2 xl:grid-cols-4 lg:h-[900px] xl:h-[800px] md:w-[95%] w-[92%] 2xl:w-[91%]  overflow-hidden">
          {carouselItems.map((item, index) => (
            <div key={index} className={` xl:h-[800px] opacity-60 border border-[rgb(236,246,255,0.5)] ${index === activeImageIndex ? ' transform transition-transform duration-700' : ''}`} onMouseEnter={() => handleMouseHover(index)} onMouseOut={handleMouseOut}>
              <div className={` ${index === activeImageIndex ? "overlay absolute inset-0 opacity-40  bg-slate-500" : ''}`}></div>

              <div className={`flex flex-col gap-3 pt-10 text-[#315779] ${index === activeImageIndex ? "bg-[#E9F5FF] h-40" : ""}`}>
                <h3 className="font-IBM-Plex-Sans text-xs tracking-[4px]">
                  {item.title}
                </h3>
                <h1 className="capitalize font-Cormorant-Garamond font-medium text-2xl">{item.description}</h1>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Carousel;
