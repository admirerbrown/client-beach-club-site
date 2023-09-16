import { IoIosPeople } from "react-icons/io";
import { FaDollarSign, FaSun, FaCocktail } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

const Offerings = () => {
  const data = [
    {
      imageUrl:
        "https://img.freepik.com/free-photo/swimming-pool_74190-2108.jpg?size=626&ext=jpg&ga=GA1.1.865150467.1694076383&semt=sph",
      title: "Velvet Waves Lounge",
      description:
        "Lounge est un endroit enchanteur où l'élégance rencontre le confort.",
      peopleData: [{ text1: "4-6 Person" }, { text2: "$100 Min Spend" }],
    },
    {
      imageUrl:
        "https://img.freepik.com/free-photo/beautiful-water-villas-tropical-maldives-island-sunset-time_1232-4499.jpg?size=626&ext=jpg&ga=GA1.2.865150467.1694076383&semt=sph",
      title: "Blissful Haven 360",
      description: "Quis autem vel eum iure reprehenderit qui voluptatares.",
      peopleData: [{ text1: "5-8 Person" }, { text2: "$180 Min Spend" }],
    },
    {
      imageUrl:
        "https://img.freepik.com/free-photo/umbrellas-deck-chairs-around-outdoor-swimming-pool_74190-9995.jpg?size=626&ext=jpg&ga=GA1.2.865150467.1694076383&semt=sph",
      title: "The Tranquil Retreat",
      description: "Quis autem vel eum iure reprehenderit qui voluptatares.",
      peopleData: [{ text1: "5-10 Person" }, { text2: "$250 Min Spend" }],
    },
  ];
  return (
    <div className="flex flex-col gap-6 mt-24">
      <div className="w-full px-5 font-Cormorant-Garamond flex flex-col gap-5">
        <h3 className="capitalize text-2xl tracking-widest font-medium text-[#315779]">
          let's pamper yourself
        </h3>
        <h1 className="text-3xl font-semibold text-[#315779] text-left leading-10 mb-6">
          Find Your Perfect Escape by the Enchanting SeaSide
        </h1>
      </div>

      {data.map((item, index) => (
        <div className="flex flex-col gap-7 border mx-5 p-5 shadow-sm">
          <div key={index}>
            <img src={item.imageUrl} alt="" />
          </div>
          <div key={index + 1}>
            <h2 className="capitalize text-3xl tracking-wide font-semibold font-Cormorant-Garamond text-[#315779] leading-10">
              {item.title}
            </h2>
            <p className="font-IBM-Plex-Sans text-[#315779] text-sm">
              {item.description}
            </p>
          </div>
          <div key={index + 2}>
            <ul className="font-IBM-Plex-Sans font-semibold text-sm">
              <li className="border h-12 flex justify-center items-center text-[#315779] gap-3">
                <IoIosPeople className="text-xl text-[#A7D6FF]" />
                <p>{item.peopleData[0].text1}</p>
              </li>
              <li className="border h-12 flex justify-center items-center text-[#315779] gap-3">
                <FaDollarSign className="text-xl text-[#A7D6FF]" />
                <p>{item.peopleData[1].text2}</p>
              </li>
              <li className="border h-12 flex justify-center items-center text-[#315779] gap-3">
                <FaSun className="text-xl text-[#A7D6FF]" />
                <p>Sunset View</p>
              </li>
              <li className="border h-12 flex justify-center items-center text-[#315779] gap-3">
                <FaCocktail className="text-xl text-[#A7D6FF]" />
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

          <div className="bg-transparent px-1.5 mt-4 border-[#315779] border btn-breathe hover:border-[#A7D6FF]">
            <button className="w-full h-11 btn-sm bg-[#315779] my-1.5 rounded-none text-base text-white font-IBM-Plex-Sans tracking-widest hover:bg-[#A7D6FF] hover:text-[#315779]">
              BOOK NOW
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Offerings;


//TODO: MAKE THIS FEATURE RESPONSIVE