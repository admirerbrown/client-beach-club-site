import React, { useState } from "react";
import friends from "../assets/friends.jpg";

const Carousel = () => {
  const [hoveredImage, setHoveredImage] = useState("");

  const handleMouseOver = (image, index) => {
    setHoveredImage(image);
    console.log({index, image})
  };

  const carouselItems = [
    {
      id: 1,
      title: "MALIBU BEACH CLUB",
      description: "resting fun at beach",
      image: friends,
    },
    {
      id: 2,
      title: "MALIBU BEACH CLUB",
      description: "resting fun at beach",
      image:
        "https://img.freepik.com/free-photo/young-friends-smiling-rejoicing-resting-party-near-swimming-pool_176420-1385.jpg?size=626&ext=jpg&ga=GA1.2.865150467.1694076383&semt=sph",
    },
    {
      id: 3,
      title: "MALIBU BEACH CLUB",
      description: "resting fun at beach",
      image:
        "https://img.freepik.com/premium-photo/group-happy-people-party-outdoors_495423-37279.jpg?size=626&ext=jpg&ga=GA1.1.865150467.1694076383&semt=sph",
    },
    {
      id: 4,
      title: "MALIBU BEACH CLUB",
      description: "resting fun at beach",
      image:
        "https://img.freepik.com/premium-photo/group-friends-swimsuit-enjoy-swimming-pool_207634-6725.jpg?size=626&ext=jpg&ga=GA1.1.865150467.1694076383&semt=sph",
    },
  ];

  return (
    <div
      className={`"border border-red-700 carousel-height object-cover shadow-md relative " ${hoveredImage ? "img-hover-zoom--blur" : ""
        }`}
    >
      {hoveredImage && (
        <div className={` ${hoveredImage ? "img-hover-zoom  " : ""}`}>
          <img
            src={hoveredImage}
            alt="Hovered"
            className="hovered-image w-full carousel-height "
          />
        </div>
      )}

      <div className="absolute grid grid-cols-4 carousel-height col-width1 overflow-hidden ">
        {carouselItems.map((item, index) => (
          <div
            key={item.id}
            className="carousel-item flex flex-col border border-purple-700 relative "
            onMouseOver={() => handleMouseOver(item.image, index)}
          >
            <div
              className={`banner h-40 ${hoveredImage === item.image ? "bg-[#E9F5FF]" : ""
                }`}
            >
              <h3 className="font-IBM-Plex-Sans font-normal mt-11 text-xl tracking-widest">
                {item.title}
              </h3>
              <h1 className="capitalize font-semibold text-2xl">
                {item.description}
              </h1>
            </div>

            <div
              className={`absolute inset-0 bg-blue-700 ${hoveredImage === item.image
                  ? "duce opacity-5 "
                  : "hover04 opacity-60"
                }`}
            ></div>

            {hoveredImage === item.image && (
              <div className="overlay absolute inset-0 bg-orange-700 opacity-50"></div>
            )}
          </div>
        ))}
      </div>

      {/* <div className="img-hover-zoom img-hover-zoom--xyz">
        <img
          src={friends}
          alt="Hovered"
          className={`hovered-image w-full carousel-height`}
        />
      </div> */}
    </div>
  );
};

export default Carousel;

// TODO: CAROUSEL STILL NOT PERFECT AND NEEDS FIX
// TODO: CHANGE THE HEIGHT OF THE ABOUT SECTION WHICH GOT DESTROYED WHEN NEWHIEGHT WAS CHANGED
