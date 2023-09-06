import React from "react";
import logo2 from "../assets/logo2.png";
import sun from "../assets/sunrise-sunset-sun-water-sea-ocean-birds-150x150.png";
import pool from "../assets/pool.png";
import bottle from "../assets/beer-bottle-drink-beverage-bottles-150x150.png";
import hat from "../assets/hat-glasses-fashion-clothes-clothing-150x150.png";
import girlies from "../assets/girlies.jpg";

const About = () => {
  return (
    <div>
      <div className="new-height bg-[#E9F5FF] w-full flex justify-center items-center flex-col ">
        <div className="h-96 w-96 object-cover flex">
          <img src={logo2} alt="beach-club-badge" />
        </div>
        <p className=" text-center absolute 2xl:w-1/2 md:w-4/6 text-2xl mx-6 lg:text-2x md:text-3xl xl:text-3xl text-[#315779] leading-10 font-semibold font-Cormorant-Garamond">
          A beach club is a place where sunsets paint the sky with extraordinary
          colors and the sound of waves lulls you into blissful tranquility.
          Where dreams meet reality, and every moment feels like a vacation.
        </p>
      </div>
      <div className="w-full  flex 2xl:justify-center">
        <div className="w-full flex flex-col xl:flex-row xl:items-center xl:pt-20 2xl:w-3/4">
          <div className="flex flex-col gap-5 mt-14 m-6 md:gap-7 ">
            <div className="img1 h-52 object-cover md:h-96">
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
                  src="https://images.unsplash.com/photo-1527142879-95b61a0b8226?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGJlYWNoJTIwcGFydHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                  alt="people with drinks"
                />
              </div>
              <div className="h-52 object-cover md:w-1/2 md:h-80">
                <img
                  className="h-full w-full"
                  src="https://images.unsplash.com/photo-1523898052899-241108586cf8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk2fHxiZWFjaCUyMHBhcnR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                  alt="people with drinks"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-start m-6 gap-7 text-[#315779]">
              <h2 className="font-IBM-Plex-Sans text-xl tracking-widest">
                WHY CHOOSE MALIBU
              </h2>
              <h1 className=" font-Cormorant-Garamond capitalize font-semibold text-3xl md:text-4xl xl:text-5xl text-start pr-6 mb-2 leading-10 xl:leading-tight xl:font-medium">
                elevate your beach experience at malibu beach club
              </h1>
            </div>
            <div className="xl:flex flex-col gap-5">
              <div className="flex flex-col mx-6 gap-6 md:flex-row">
                <div className="border border-[rgb(209 213 219)]  btn-breathe">
                  <div className="font-Cormorant-Garamond h-44 bg-[#E9F5FF] shadow-[0_1px_2px_-1px_rgba(255,255,255,0.3)] m-2 pl-5 pt-3 flex flex-col items-start gap-1 hover:bg-[#A7D6FF]">
                    <img
                      className="h-14 bg-white p-2 shadow"
                      src={pool}
                      alt="pool badge"
                    />
                    <h2 className="capitalize mt-3 text-xl font-semibold  text-[#315779]">
                      stylish pools
                    </h2>
                    <p className="text-base text-start leading-5 pr-6">
                      Lengua romance hablada en España y en gran parte de
                      América Central.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="border border-[rgb(209 213 219)] btn-breathe">
                    <div className="font-Cormorant-Garamond h-44 bg-[#E9F5FF] shadow-[0_1px_2px_-1px_rgba(255,255,255,0.3)] m-2 pl-5 pt-3 flex flex-col items-start gap-1 hover:bg-[#A7D6FF]">
                      <img
                        className="h-14 bg-white p-2 shadow"
                        src={bottle}
                        alt="food icon"
                      />
                      <h2 className="capitalize mt-3 text-xl font-semibold  text-[#315779]">
                        exquisite foods
                      </h2>
                      <p className="text-base text-start leading-5 pr-6">
                        Lengua romance hablada en España y en gran parte de
                        América Central.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mx-6 gap-6 md:flex-row mt-5 xl:mt-0">
                <div className="border border-[rgb(209 213 219)] btn-breathe">
                  <div className="font-Cormorant-Garamond h-44 bg-[#E9F5FF] shadow-[0_1px_2px_-1px_rgba(255,255,255,0.3)] m-2 pl-5 pt-3 flex flex-col items-start gap-1 hover:bg-[#A7D6FF]">
                    <img
                      className="h-14 bg-white p-2 shadow"
                      src={sun}
                      alt="sunset badge"
                    />
                    <h2 className="capitalize mt-3 text-xl font-semibold  text-[#315779]">
                      amazing views
                    </h2>
                    <p className="text-base text-start leading-5 pr-6 ">
                      Lengua romance hablada en España y en gran parte de
                      América Central.
                    </p>
                  </div>
                </div>
                <div className="border border-[rgb(209 213 219)] btn-breathe">
                  <div className="font-Cormorant-Garamond h-44 bg-[#E9F5FF] shadow-[0_1px_2px_-1px_rgba(255,255,255,0.3)] m-2 pl-5 pt-3 flex flex-col items-start gap-1 hover:bg-[#A7D6FF]">
                    <img
                      className="h-14 bg-white p-2 shadow"
                      src={hat}
                      alt="fashion badge"
                    />
                    <h2 className="capitalize mt-3 text-xl font-semibold  text-[#315779]">
                      happy hour promo
                    </h2>
                    <p className="text-base text-start leading-5 pr-6">
                      Lengua romance hablada en España y en gran parte de
                      América Central.
                    </p>
                  </div>
                </div>
              </div>
              <div className="navbar-end mb-5 m-6 mt-8 md:w-44">
                <div className="bg-transparent mr-5 border-[#315779] border btn-breathe hover:border-[#A7D6FF]">
                  <button className="btn-sm bg-[#315779] my-1.5 rounded-none text-base text-white font-IBM-Plex-Sans tracking-widest hover:bg-[#A7D6FF] hover:text-[#315779] ">
                    LEARN MORE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
