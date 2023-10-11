// import divider from "../assets/images/divider.png";
import React, { useState } from "react";
import { HiBadgeCheck } from "react-icons/hi";
import { AiOutlineLine } from "react-icons/ai";
import { RiFacebookLine } from "react-icons/ri";

import { AiOutlineTwitter } from "react-icons/ai";
import { IoLogoGoogleplus } from "react-icons/io";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Speakers = () => {
  const speakers = [
    {
      src: "https://images.unsplash.com/photo-1592598015799-35c84b09394c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fGJsYWNrJTIwd29tZW58ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60",
      name: "Mercy Lavie",
      title: "Product Manager",
      summary: `Para obtener una descripción general rápida de estas frases básicas en español, 
      consulte la hoja de trucos a continuación. Considere esto como su propio libro de frases 
      en español visual. Pero asegúrese de leer el resto de la publicación para obtener detalles 
      sobre la pronunciación de estas frases en español, incluido el audio de las palabras y los 
      sonidos complicados.Y uno o dos extras de información adicional sobre el idioma y la 
      cultura española.`,
      roles: [
        "pronunciación de estas frases en español",
        "general rápida de estas frases básicas",
        "Y uno o dos extras de información adicional",
      ],
    },
    {
      src: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVjaGllcyUyMGd1eXN8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60",
      name: "Samuel Donovan",
      title: "Product Manager",
      summary: `Para obtener una descripción general rápida de estas frases básicas en español, 
      consulte la hoja de trucos a continuación. Considere esto como su propio libro de frases 
      en español visual. Pero asegúrese de leer el resto de la publicación para obtener detalles 
      sobre la pronunciación de estas frases en español, incluido el audio de las palabras y los 
      sonidos complicados.Y uno o dos extras de información adicional sobre el idioma y la 
      cultura española.`,
      roles: [
        "pronunciación de estas frases en español",
        "general rápida de estas frases básicas",
        "Y uno o dos extras de información adicional",
      ],
    },
    {
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHRlY2hpZXMlMjBndXlzfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "Matt Lavie",
      title: "Snr. Recruiting Officer",
      summary: `Para obtener una descripción general rápida de estas frases básicas en español, 
      consulte la hoja de trucos a continuación. Considere esto como su propio libro de frases 
      en español visual. Pero asegúrese de leer el resto de la publicación para obtener detalles 
      sobre la pronunciación de estas frases en español, incluido el audio de las palabras y los 
      sonidos complicados.Y uno o dos extras de información adicional sobre el idioma y la 
      cultura española.`,
      roles: [
        "pronunciación de estas frases en español",
        "general rápida de estas frases básicas",
        "Y uno o dos extras de información adicional",
      ],
    },
    {
      src: "https://images.unsplash.com/photo-1485875437342-9b39470b3d95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29tZW58ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60",
      name: "ELANA DORAN",
      title: "Co.Founder",
      summary: `Para obtener una descripción general rápida de estas frases básicas en español, 
      consulte la hoja de trucos a continuación. Considere esto como su propio libro de frases 
      en español visual. Pero asegúrese de leer el resto de la publicación para obtener detalles 
      sobre la pronunciación de estas frases en español, incluido el audio de las palabras y los 
      sonidos complicados.Y uno o dos extras de información adicional sobre el idioma y la 
      cultura española.`,
      roles: [
        "pronunciación de estas frases en español",
        "general rápida de estas frases básicas",
        "Y uno o dos extras de información adicional",
      ],
    },
    {
      src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tZW58ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60",
      name: "JESSICA PALT",
      title: "Founder",
      summary: `Para obtener una descripción general rápida de estas frases básicas en español, 
      consulte la hoja de trucos a continuación. Considere esto como su propio libro de frases 
      en español visual. Pero asegúrese de leer el resto de la publicación para obtener detalles 
      sobre la pronunciación de estas frases en español, incluido el audio de las palabras y los 
      sonidos complicados.Y uno o dos extras de información adicional sobre el idioma y la 
      cultura española.`,
      roles: [
        "pronunciación de estas frases en español",
        "general rápida de estas frases básicas",
        "Y uno o dos extras de información adicional",
      ],
    },
    {
      src: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBtYWxlfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "Daniel Beacon",
      title: "Designer",
      summary: `Para obtener una descripción general rápida de estas frases básicas en español, 
      consulte la hoja de trucos a continuación. Considere esto como su propio libro de frases 
      en español visual. Pero asegúrese de leer el resto de la publicación para obtener detalles 
      sobre la pronunciación de estas frases en español, incluido el audio de las palabras y los 
      sonidos complicados.Y uno o dos extras de información adicional sobre el idioma y la 
      cultura española.`,
      roles: [
        "pronunciación de estas frases en español",
        "general rápida de estas frases básicas",
        "Y uno o dos extras de información adicional",
      ],
    },
  ];

  return (
    <>
      <div className="mt-80 bg-[#e45914] h-96 lg:h-72 flex justify-center flex-col items-center gap-5 text-white">
        <h1 className="font-bold text-2xl">Our Speakers</h1>
        <p className="px-10 text-center text-slate-100 lg:w-3/5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          non adipisci accusamus fuga assumenda temporibus in est excepturi
          sequi sunt earum, architecto ullam reprehenderit eligendi quibusdam
          saepe modi quo iure?
        </p>
        {/* <img src={divider} alt="divider" className="w-20 mt-5" /> */}
      </div>

      <div className="mb-64">
        <Carousel speakers={speakers} />
      </div>
    </>
  );
};

const Carousel = ({ speakers }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const changeSlide = (index) => {
    setActiveSlide(index);
  };

  return (
    <div className="lg:flex bg-[#242732]">
      <div className="carousel lg:w-1/2 relative">
        {speakers.map((speaker, index) => (
          <div
            key={index}
            className={`slide ${
              index === activeSlide ? "block" : "hidden"
            } w-full h-full`}
          >
            <img
              src={speaker.src}
              alt={`${index + 1}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}

        {/* <div className="w-full">
          <div className="thumbnails absolute bottom-0 left-0 flex  w-full pl-1 py-3 bg-neutral-500 opacity-70 ">
            {speakers.map((speaker, index) => (
              <div
                key={index}
                className="cursor-pointer  border-4  border-transparent relative hover:border-[#e45914] "
                onClick={() => changeSlide(index)}
              >
                <img
                  src={speaker.src}
                  alt={`${index + 1}`}
                  className="w-36 h-16 lg:h-24 object-cover"
                />
              </div>
            ))}
          </div>
        </div> */}
      </div>
      <div className="description lg:w-1/2 pt10 p-10">
        <div className="flex 2xl:items-center">
          {speakers.map((speaker, index) => (
            <div
              className={`slide ${
                index === activeSlide ? "block" : "hidden"
              } w-full h-full`}
            >
              <h1 className="text-3xl mb-2  text-white">
                {speaker.name.toUpperCase()}
              </h1>
              <p className=" text-gray-300 ">{speaker.title.toUpperCase()}</p>
              <AiOutlineLine className="text-4xl text-[#e45914]" />
              <p className="mt-5 mb-9  text-gray-300 leading-7 lg:w-4/5 2xl:w-3/5">
                {speaker.summary}
              </p>
              <ul className=" text-gray-300 flex flex-col gap-3">
                {speaker.roles.map((role, index) => (
                  <li className="flex gap-2">
                    <HiBadgeCheck className="text-[#e45914] mt-1"></HiBadgeCheck>
                    {role}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex gap-2 mt-7">
          <div className=" flex rounded-full border outline-gray-50 h-9 w-9 justify-center items-center">
            <RiFacebookLine className="text-white"></RiFacebookLine>
          </div>
          <div className=" flex rounded-full border outline-gray-50 h-9 w-9 justify-center items-center">
            <AiOutlineTwitter className="text-white"></AiOutlineTwitter>
          </div>

          <div className=" flex rounded-full border outline-gray-50 h-9 w-9 justify-center items-center">
            <IoLogoGoogleplus className="text-white"></IoLogoGoogleplus>
          </div>
          <div className=" flex rounded-full border outline-gray-50 h-9 w-9 justify-center items-center">
            <FaInstagram className="text-white"></FaInstagram>
          </div>
          <div className=" flex rounded-full border outline-gray-50 h-9 w-9 justify-center items-center">
            <FaLinkedinIn className="text-white"></FaLinkedinIn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
