import { IoIosPeople } from "react-icons/io";
import { FaDollarSign, FaSun, FaCocktail } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

const Offerings = () => {
  return (
    <div className="flex flex-col gap-6 mt-24">
      <div className="w-full px-5 font-Cormorant-Garamond flex flex-col gap-5">
        <h3 className="capitalize text-2xl tracking-widest font-medium text-[#315779]">
          let's pamper yourself
        </h3>
        <h1 className="text-3xl font-semibold text-[#315779] text-left leading-10">
          Find Your Perfect Escape by the Enchanting SeaSide
        </h1>
      </div>
      <div className=" border m-3 p-5 flex flex-col gap-7 shadow-sm">
        <div>
          <img
            src="https://img.freepik.com/free-photo/swimming-pool_74190-2108.jpg?size=626&ext=jpg&ga=GA1.1.865150467.1694076383&semt=sph"
            alt=""
          />
        </div>
        <div>
          <h2 className="capitalize text-3xl tracking-wide font-semibold font-Cormorant-Garamond text-[#315779] leading-10">
            velvet waves lounge
          </h2>
          <p className="font-IBM-Plex-Sans text-[#315779] text-sm">
            Lounge est un endroit enchanteur où l'élégance rencontre le confort.
          </p>
        </div>
        <div>
          <ul className="font-IBM-Plex-Sans font-semibold text-sm">
            <li className=" border h-12 flex  justify-center items-center  text-[#315779] gap-3">
              <IoIosPeople className="text-xl text-[#A7D6FF]"></IoIosPeople>
              <p>4-6 Person</p>
            </li>
            <li className=" border h-12 flex justify-center items-center  text-[#315779] gap-3">
              <FaDollarSign className="text-xl text-[#A7D6FF]"></FaDollarSign>
              <p>$100 Min Spend</p>
            </li>
            <li className=" border h-12 flex justify-center items-center  text-[#315779] gap-3">
              <FaSun className="text-xl text-[#A7D6FF]"></FaSun>
              <p>Sunset View</p>
            </li>
            <li className=" border h-12 flex justify-center items-center  text-[#315779] gap-3">
              <FaCocktail className="text-xl text-[#A7D6FF]"></FaCocktail>
              <p>Free soft Drinks</p>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-Cormorant-Garamond capitalize text-2xl  mb-5 font-semibold text-[#315779]">
            additional benefits
          </h2>
          <ul className="capitalize font-IBM-Plex-Sans flex flex-col gap-2 text-sm">
            <li className="  flex justify-center items-center font-light text-[#315779] gap-2 ">
              <FaCheck className="text-lg text-[#A7D6FF]"></FaCheck>
              <p>cold face towel</p>
            </li>

            <li className="   flex justify-center items-center font-light text-[#315779] gap-2 ">
              <FaCheck className="text-lg text-[#A7D6FF]"></FaCheck>
              <p>free flow water</p>
            </li>

            <li className="   flex justify-center items-center font-light text-[#315779] gap-2 ">
              <FaCheck className="text-lg text-[#A7D6FF]"></FaCheck>
              <p>live music or DJs</p>
            </li>

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

        <div className="bg-transparent px-1.5 mt-5 border-[#315779] border btn-breathe hover:border-[#A7D6FF]">
          <button className=" w-full h-11 btn-sm bg-[#315779] my-1.5 rounded-none text-base text-white font-IBM-Plex-Sans tracking-widest hover:bg-[#A7D6FF] hover:text-[#315779] ">
            BOOKING NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offerings;
