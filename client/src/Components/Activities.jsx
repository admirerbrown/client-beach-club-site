import Carousel from "./carousel";
const Activities = () => {
  return (
    <div className="h-[2100px] md:h-[1500px] lg:h-[1000px] xl:h-[800px] bg-[#E9F5FF] w-full mt-16 mb-[350px] md:mb-[430px] lg:mb-[330px] xl:mb-[420px] 2xl:mb-[400px]">
      <div className="flex flex-col gap-8 font-Cormorant-Garamond mx-5 mb-6 pt-14">
        <h3 className="font-IBM-Plex-Sans mt-11 text-normal tracking-[0.2rem] text-[#315779] ">
          TAKE A LOOK
        </h3>
        <h1 className=" capitalize font-medium text-4xl text-[#315779] md:text-[42px]">
          luxury at our bar &amp; beach club
        </h1>
        <p className="text-base font-IBM-Plex-Sans xl:font-thin text-[#89949f] md:px-[150px] md:mb-6 lg:text-sm xl:text-[18px] leading-[20px] lg:px-[210px] xl:px-[350px]">
          Hoy amaneció un día radiante y soleado. El cielo azul se extiende
          fin, rayos del sol calientan la piel al caminar.
          
        </p>
      </div>
      <div className=""><Carousel></Carousel></div>
    </div>
  );
};

//TODO:FIX MINOR HOVER GLITCH IN CAROUSEL ON SM TO LG SCREENS 

export default Activities;
