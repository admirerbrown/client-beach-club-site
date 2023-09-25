import friends from "../assets/friends-fun.jpg";
import party from "../assets/having-a-beach-party-e1689671741453.jpg";

import teens from "../assets/teenagers-friends-have-fun-at-holi-festival-beach-party-celebrating-traditional-indian-holiday--e1689672733652.jpg";
import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";
import React, { useState } from "react";

const Reservation = () => {
  return (
    <div className="bg-[#E9F5FF] xl:flex items-center">
      <div className="mt-20 mx-5 mb-5 md:px-6">
        <h1 className="text-4xl md:text-[40px] pt-14 font-Cormorant-Garamond font-semibold xl:text-5xl  text-[#315779] text-left md:leading-[50px] mb-6 2xl:ml-0">
          Secure Your Reservation For a Remarkable Experience
        </h1>
        <form className="flex flex-col  gap-5 font-Cormorant-Garamond text-base">
          <div className="flex flex-col gap-4 md:flex-row w-full justify-center">
            <input
              type="text"
              placeholder="Your Name "
              className="h-14 border-none shadow-md focus:ring-[#315779] w-full"
            />
            <input
              type="email"
              placeholder="Email"
              className="h-14 border-none shadow-md focus:ring-[#315779] w-full"
            />
            <input
              type="tel"
              placeholder="Telephone"
              className="h-14 border-none shadow-md focus:ring-[#315779] w-full"
            />
          </div>
          <div className="flex flex-col gap-4 md:flex-row w-full justify-center">
            <select className="h-14 border-none shadow-md appearance-none focus:ring-[#315779] md:w-11/12">
              <option disabled selected>
                Many Person
              </option>
              <option className="hover:bg-transparent ">1 Person</option>
              <option>2 Person</option>
              <option>3 Person</option>
              <option>4 Person</option>
              <option>5 Person</option>
              <option>More...</option>
            </select>
            <input
              type="time"
              className="h-14 border-none shadow-md focus:ring-[#315779] w-full"
            />
            <input
              type="date"
              className="h-14 border-none shadow-md focus:ring-[#315779] w-full"
            />
          </div>

          <textarea
            placeholder="Your Request"
            className="h-32 lg:h-36 border-none shadow-md focus:ring-[#315779]"
          />
        </form>

        <div className="w-1/2 md:w-3/12 lg:w-[170px] mb-14 bg-transparent px-1.5 mt-7 border-[#315779] border btn-breathe hover:border-[#A7D6FF]">
          <button className="w-full h-9 btn-sm md:btn-md lg:btn-sm lg:h-10 bg-[#315779]  my-1.5 rounded-none md:text-base lg:text-sm text-sm text-white font-IBM-Plex-Sans tracking-widest hover:bg-[#A7D6FF] hover:text-[#315779]">
            RESERVE NOW
          </button>
        </div>
      </div>

      <ImageSlider></ImageSlider>
    </div>
  );
};

const ImageSlider = () => {
  const [isMainHovered, setIsMainHovered] = useState(false);
  const images = [friends, teens, party];

  return (
    <div className="bg-white w-full ">
      <div className="carousel w-full ">
        {images.map((image, index) => (
          <div
            key={index}
            id={`slide${index + 1}`}
            className="carousel-item relative w-full h-96 md:h-[550px] lg:h-[500px]"
          >
            <img
              src={image}
              className="w-full h-full"
              alt=""
              onMouseEnter={() => setIsMainHovered(true)}
              onMouseLeave={() => setIsMainHovered(false)}
            />
            <div className="main absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href={`#slide${index}`}
                className={`btn btn-sm w-16 glass rounded-none  flex justify-center items-center ${
                  isMainHovered ? "bg-white" : "hover:bg-[#A7D6FF]"
                }`}
              >
                <HiArrowLongLeft className="text-2xl text-[#315779]" />
              </a>
              <a
                href={`#slide${index === 0 ? images.length : index - 1}`}
                className={`btn-sm w-16 flex glass justify-center items-center ${
                  isMainHovered ? "bg-white" : "hover:bg-[#A7D6FF]"
                }`}
              >
                <HiArrowLongRight className="text-2xl text-[#315779]" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reservation;
