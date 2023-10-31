import Carousel from "./carousel";
const Activities = () => {
  return (
    <div className="h-[131.25rem] md:h-[93.75rem] lg:h-[62.5rem] xl:h-[50rem] bg-[#E9F5FF] w-full mt-16 mb-[350px] md:mb-[430px] lg:mb-[330px] xl:mb-[420px] 2xl:mb-[400px]">
      <div className="flex flex-col gap-8 font-Cormorant-Garamond mx-5 mb-6 pt-14">
        <h3 className="font-IBM-Plex-Sans mt-11 text-normal tracking-[0.2rem] text-[#315779] ">
          TAKE A LOOK
        </h3>
        <h1 className=" capitalize font-medium text-4xl text-[#315779] md:text-[42px]">
          luxury at our bar &amp; beach club
        </h1>
        <p className="text-base font-IBM-Plex-Sans xl:font-thin text-[#89949f] md:px-[150px] md:mb-6 lg:text-sm xl:text-[18px] leading-[20px] lg:px-[210px] xl:px-[350px] 2xl:px-[650px]">
          Hoy amaneció un día radiante y soleado. El cielo azul se extiende
          fin, rayos del sol calientan la piel al caminar.
          
        </p>
      </div>
      <div className=""><Carousel></Carousel></div>
    </div>
  );
};



export default Activities;
