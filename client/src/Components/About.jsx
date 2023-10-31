import React from "react";
import { info } from "../db/offerData";
import girlies from "../assets/girlies.jpg";

const About = () => {
  return (
    <div>
      <div className="h-[550px] md:h-[420px] xl:h-[550px] bg-[#E9F5FF] w-full flex justify-center items-center flex-col ">
        <p className=" 2xl:w-[52%] xl:w-[80%] md:px-5 text-[30px] md:text-[31px] mx-6 lg:text-[32px] xl:text-[36px] text-[#315779] mb-10 italic font-Cormorant-Garamond">
          A beach club is a place where sunsets paint the sky with extraordinary
          colors and the sound of waves lulls you into blissful tranquility.
          Where dreams meet reality, and every moment feels like a vacation.
        </p>
        <p className="font-Dr-Sugiyama text-4xl">ThomasHienfiedCook</p>
        <p className="font-IBM-Plex-Sans font-semibold text-[#315779] text-xl mb-2">
          Thomas H. Cook
        </p>
        <p className="font-IBM-Plex-Sans text-xs tracking-[3px] uppercase text-[#315779]">
          co. Founder
        </p>
      </div>

      <div>
        <RenderAttractions info={info}></RenderAttractions>
      </div>
    </div>
  );
};

const InfoBadge = ({ item, index }) => (
  <div className="border border-[rgb(209 213 219)] btn-breathe image-hover">
    <div
      className={`font-Cormorant-Garamond ${index === 0 ? "bg-white" : "bg-[#E9F5FF]"
        } shadow-[0_1px_2px_-1px_rgba(255,255,255,0.3)] m-2 pr-10 py-4 pl-5 flex flex-col items-start gap-1 hover:bg-[#A7D6FF]`}
    >
      <img
        className={`h-14 ${index === 0 ? "bg-[#A7D6FF]" : "bg-white"
          }  p-2 shadow hover:bg-white`}
        src={item.icon}
        alt="sunset badge"
      />
      <h2 className="capitalize mt-3 text-xl xl:text-[26px] md:text-[22px] font-semibold md:font-medium text-[#315779]">
        {item.title}
      </h2>
      <p className="text-sm md:text-base lg:text-[15px] font-IBM-Plex-Sans text-gray-400 text-start leading-5">
        {item.summary}
      </p>
    </div>
  </div>
);

const RenderAttractions = ({ info }) => (
  <div className="w-full flex 2xl:justify-center">
    <div className="w-full flex flex-col xl:flex-row xl:items-center xl:pt-20 2xl:w-3/4">
      <div className="flex flex-col gap-5 mt-14 m-6 md:gap-7 xl:ml-[50px]">
        <div className="img1 h-52 object-cover md:h-[470px]">
          <img
            className="h-full w-full"
            src={girlies}
            alt="people with drinks"
          />
        </div>
        <div className="flex flex-col gap-5 md:flex-row md:gap-7">
          <div className="h-52 object-cover md:w-1/2 md:h-80">
            <img
              className="h-full w-full"
              src="https://img.freepik.com/free-photo/medium-shot-smiley-people-taking-selfie_23-2149480694.jpg?size=626&ext=jpg&ga=GA1.1.865150467.1694076383&semt=ais"
              alt="people with drinks"
            />
          </div>
          <div className="h-52 object-cover md:w-1/2 md:h-80">
            <img
              className="h-full w-full"
              src="https://img.freepik.com/free-photo/young-hipster-company-friends-vacation-beach-drinking-mojito-cocktail_285396-402.jpg?size=626&ext=jpg&ga=GA1.1.865150467.1694076383&semt=ais"
              alt="people with drinks"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col items-start m-6 gap-7 text-[#315779] ">
          <h2 className="font-IBM-Plex-Sans text-lg font-medium md:text-[16px] md:tracking-[0.2rem] ">
            WHY CHOOSE MALIBU
          </h2>
          <h1 className="font-Cormorant-Garamond capitalize font-medium text-[34px] md:text-[38px] lg:text-[41px] xl:text-[50px] text-start pr-6 mb-2 leading-10 xl:leading-tight xl:font-medium">
            elevate your beach experience at malibu beach club
          </h1>
        </div>

        <div className="xl:flex flex-col gap-5">
          <div className="flex flex-col-reverse mx-6 gap-6 md:gap-8 md:flex-row-reverse xl:pr-6 2xl:mr-32">
            {info.slice(0, 2).map((item, index) => (
              <InfoBadge key={index} item={item} index={index} />
            ))}
          </div>

          <div className="flex flex-col mx-6  gap-6 md:gap-8 md:flex-row mt-5 xl:mt-0 xl:pr-6 2xl:mr-32">
            {info.slice(2, 4).map((item, index) => (
              <InfoBadge key={index} item={item} index={index} />
            ))}
          </div>

          <div className="ml-5 w-[40%] xl:w-[25%] 2xl:w-[22%] md:w-[170px] mb-10 lg:mb-8 lg:bg-transparent px-1 mt-10 xl:mt-5 xl:mb-4 border-[#315779] border btn-breathe hover:border-[#A7D6FF]">
            <button className="w-full h-10 btn-sm tracking-[0.2rem] md:btn-md md:w-[160px] xl:w-[164px] 2xl:w-[160px] lg:h-12 bg-[#315779] my-1 rounded-none lg:text-sm text-xs md:text-xs text-white font-IBM-Plex-Sans hover:bg-[#A7D6FF] hover:text-[#315779]">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
