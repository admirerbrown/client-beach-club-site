import React from "react";
import logo2 from "../assets/logo2.png";

const About = () => {
  return (
    <div className="new-height bg-[#E9F5FF] w-full flex justify-center items-center flex-col">
      <div className="h-96 w-96 object-cover flex">
        <img src={logo2} alt="beach-club-badge" />
      </div>
      <p className="absolute 2xl:w-1/2 md:w-3/5 text-2xl 2xl:text-3xl text-[rgb(49,87,121,1)] leading-10 font-medium italic font-Cormorant-Garamond">
        A beach club is a place where sunsets paint the sky with extraordinary
        colors and the sound of waves lulls you into blissful tranquility. Where
        dreams meet reality, and every moment feels like a vacation.
      </p>
    </div>
  );
};

export default About;
