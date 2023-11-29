import { foodList, menu } from "../db/menuItems";

const RenderMenu = () => {
  return (
    <div className=" pt-10 xl:mt-20 flex flex-col justify-center items-center">
      <div className="font-Cormorant-Garamond  justify-center flex flex-col p-5 capitalize gap-7 w-full items-center">
        <h2 className=" text-base md:text-[16px] mt-8 font-IBM-Plex-Sans tracking-[5px] uppercase font-medium text-[#315779] xl:pl-5 2xl:pl-0">
          check our menu
        </h2>
        <h1 className="text-[28px] font-medium xl:font-medium xl:leading-[60px] md:text-4xl xl:text-[43px] 2xl:text-[38px] xl:w-[62%] 2xl:w-1/2 xl:mx-0 xl:text-center md:mx-20 lg:mx-32 text-[#315779] leading-10 md:leading-[50px] mb-6 tracking-widest 2xl:ml-0">
          Savor the Coastal Delights, Bask in Sunshine with a Wave of Beach
          Vibes.
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-5 mt-4 xl:gap-5 mb-4 2xl:mt-7">
        {menu.map((item, index) => (
          <div
            key={index + 1}
            className="flex items-center flex-col gap-4 text-2xl text-[#315779]"
          >
            <div className="rounded-full overflow-hidden border w-[9.5rem] h-[9.5rem] xl:h-[10.5rem] xl:w-[10.5rem] md:h-[15rem] md:w-[15rem] lg:w-[16rem] lg:h-[16rem] p-2.5 btn-breathe hover:border-[#A7D6FF]">
              <img
                src={item.image}
                alt=""
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h1 className="text-center font-Cormorant-Garamond ">
              {item.name}
            </h1>
          </div>
        ))}
      </div>
      <div className="mt-16 flex w-full flex-col md:flex-row flex-wrap items-center justify-center px-5 md:px-0 gap-5 md:gap-8 xl:flex-nowrap xl:px-14 2xl:w-[68%]">
        <MenuItems></MenuItems>
      </div>
    </div>
  );
};

const MenuItems = () => {
  return (
    <>
      {Object.keys(foodList).map((category) => (
        <div key={category} className=" border w-full md:w-[46%] xl:w-full">
          <div
            className={`${
              foodList[category][0].title === "Delicious Food"
                ? "bg-[#315779] text-white"
                : "bg-[#E9F5FF]  text-[#315779]"
            } h-16 flex justify-center items-center border-b mb-3 `}
          >
            <h2 className=" font-Cormorant-Garamond text-xl md:text-2xl xl:text-[26px] font-semibold">
              {foodList[category][0].title}
            </h2>
          </div>
          {foodList[category].slice(1).map((item, index) => (
            <div
              key={index}
              className={`${
                index === foodList[category].length - 2 ? "border-none" : ""
              } h-24 border-b-2 border-[#E9F5FF] justify-center flex  text-[#315779] flex-col mx-7 border-dotted font-Cormorant-Garamond`}
            >
              <h4 className="flex justify-between w-full text-xl md:text-[22px] font-medium">
                {item.name} <span>{item.price}</span>
              </h4>
              <p className="text-left text-sm md:text-[15px] md:leading-6 font-thin font-IBM-Plex-Sans text-[#89949f]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default RenderMenu;
