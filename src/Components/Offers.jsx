import { IoIosPeople } from "react-icons/io";
import { FaDollarSign, FaSun, FaCocktail } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { offers } from "../db/offerData";

const Offerings = () => {
  const data = offers;
  return (
    <div className="w-full flex flex-col gap-6 mt-24 2xl:items-center ">
      <div className="w-full px-5 font-Cormorant-Garamond flex flex-col gap-5 2xl:w-2/3 2xl:px-0 ">
        <h3 className="uppercase font-IBM-Plex-Sans text-[16px] md:text-lg xl:text-lg xl:mb-3 tracking-[0.2rem] font-medium text-[#315779] xl:text-start xl:pl-5 2xl:pl-0">
          let's pamper yourself
        </h3>
        <h1 className="text-[33px] font-medium md:text-[40px] lg:text-center lg:text-[41px] xl:text-[48px] md:ml-5 text-[#315779] text-left xl:text-left leading-10 mb-6 2xl:ml-0">
          Find Your Perfect Escape by the Enthralling Seaside
        </h1>
      </div>

      {data.map((item, index) => (
        <div className="xl:sticky xl:top-0 xl:bg-white flex flex-col gap-7 border  lg:mb-5 mx-5 p-5 shadow-sm xl:flex-row xl:gap-12 xl:mx-10 2xl:w-2/3 2xl:gap-20 ">
          <div className="object-cover ">
            <img
              className="w-full md:h-96 xl:h-full"
              src={item.imageUrl}
              alt="offer thumbnail"
            />
          </div>
          <div>
            <div key={index + 1}>
              <h2 className="capitalize text-[28px] tracking-wide font-semibold font-Cormorant-Garamond xl:text-left text-[#315779] leading-10">
                {item.title}
              </h2>
              <p className="font-IBM-Plex-Sans text-stone-400 text-[16px] xl:text-[16px] xl:text-start mt-2">
                {item.description}
              </p>
            </div>
            <div
              key={index + 2}
              className="flex flex-col md:flex-row w-full mt-7"
            >
              <ul className=" font-IBM-Plex-Sans font-semibold text-sm w-full">
                <li className="border h-12 flex justify-center items-center text-[#315779] gap-3">
                  <IoIosPeople className="text-xl text-[#A7D6FF]" />
                  <p>{item.peopleData[0].text1}</p>
                </li>
                <li className="border h-12 flex justify-center items-center text-[#315779] gap-2 md:pl-6">
                  <FaDollarSign className="text-xl text-[#A7D6FF]" />
                  <p>{item.peopleData[1].text2}</p>
                </li>
              </ul>
              <ul className="font-IBM-Plex-Sans font-semibold text-sm w-full md:items-center justify-center">
                <li className="border h-12 flex justify-center items-center text-[#315779] gap-3 ">
                  <FaSun className="text-xl text-[#A7D6FF]" />
                  <p>Sunset View</p>
                </li>
                <li className="border h-12 flex justify-center items-center text-[#315779] gap-3 md:pl-6">
                  <FaCocktail className="text-xl text-[#A7D6FF]" />
                  <p>Free soft Drinks</p>
                </li>
              </ul>
            </div>
            <div className="mt-7">
              <h2 className="font-Cormorant-Garamond capitalize text-2xl  mb-5 font-medium text-[#315779] ">
                additional benefits
              </h2>
              <div className="flex flex-col gap-2  md:flex-row md:gap-40 justify-center ">
                <ul className="capitalize font-IBM-Plex-Sans flex flex-col gap-2 text-sm ">
                  <li className="  flex justify-center items-center font-light text-[#315779] gap-2 ">
                    <FaCheck className="text-lg text-[#A7D6FF]"></FaCheck>
                    <p className="">cold face towel</p>
                  </li>

                  <li className="flex justify-center items-center font-light text-[#315779] gap-2 ">
                    <FaCheck className="text-lg text-[#A7D6FF]"></FaCheck>
                    <p>free flow water</p>
                  </li>

                  <li className="   flex justify-center items-center font-light text-[#315779] gap-2 ">
                    <FaCheck className="text-lg text-[#A7D6FF]"></FaCheck>
                    <p>live music or DJs</p>
                  </li>
                </ul>
                <ul className="capitalize font-IBM-Plex-Sans flex flex-col gap-2 text-sm ">
                  <li className="  flex justify-center items-center font-light text-[#315779] gap-2 ">
                    <FaCheck className="text-lg text-[#A7D6FF]"></FaCheck>
                    <p>crystal clear lagoon</p>
                  </li>

                  <li className="   flex justify-center items-center font-light text-[#315779] gap-2 ">
                    <FaCheck className="text-lg text-[#A7D6FF]"></FaCheck>
                    <p>amazing views areas</p>
                  </li>
                  <li className="   flex justify-center items-center font-light text-[#315779] gap-2 ">
                    <FaCheck className="text-lg text-[#A7D6FF]"></FaCheck>
                    <p>beachfront location</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-transparent px-1.5 mt-7 border-[#315779] border btn-breathe hover:border-[#A7D6FF]">
              <button className="w-full h-11 btn-sm bg-[#315779] my-1.5 rounded-none text-sm text-white font-IBM-Plex-Sans tracking-widest hover:bg-[#A7D6FF] hover:text-[#315779]">
                BOOKING NOW
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Offerings;
