// import Carousel from "./carousel";
const Activities = () => {
  return (
    <div className=" bg-height  bg-[#E9F5FF] w-full mt-40 p-12">
      <div className="flex flex-col    text-[#315779] gap-8 font-Cormorant-Garamond p-6">
        <h3 className="font-IBM-Plex-Sans font-normal mt-11 text-xl tracking-widest">
          TAKE A LOOK
        </h3>
        <h1 className=" capitalize font-semibold text-4xl ">
          luxury at our bar &amp; beach club
        </h1>
        <p className="text-base ">
          Hoy amaneció un día radiante y soleado. El cielo azul se extiende sin
          fin, y los rayos del sol calientan la piel al caminar por la playa.
          Las olas rompen suavemente en la orilla, creando una melodía
          relajante. Decidí dar un paseo por la arena dorada, disfrutando del
          sonido de las{" "}
        </p>
      </div>
      <div className="">{/* <Carousel></Carousel> */}</div>
    </div>
  );
};

export default Activities;
