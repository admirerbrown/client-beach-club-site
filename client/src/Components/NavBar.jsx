import { MdMenu, MdOutlineClose, MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";

const NavBar = () => {
  return (
    <div className="drawer z-50 w-full flex">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content w-full flex">
        <div className=" w-full flex items-center justify-between bg-[rgb(212,212,216,.1)] h-24 shadow-sm border-b backdrop-blur-md border-[#96989B] border-solid z-10">
          <div className=" flex pl-5">
            <a href="#home" className="btn btn-ghost normal-case text-5xl text-slate-200 font-Cormorant-Garamond italic">
              Malibu
            </a>
          </div>

          <div className="hidden xl:flex">
            <NavItems></NavItems>
          </div>
          <div className=" hidden xl:flex bg-transparent mr-8 border-[rgb(238,242,255,.3)] border btn-breathe hover:border-[#A7D6FF]">
            <button className="btn-sm px-4 h-10 w-[150px] bg-[#69727d] m-1.5 rounded-none text-base text-white font-IBM-Plex-Sans tracking-widest hover:bg-[#A7D6FF] hover:text-[#315779] ">
              BOOK NOW!
            </button>
          </div>

          <label htmlFor="my-drawer" className=" flex xl:hidden btn btn-sm bg-white mr-5 hover:bg-[#A7D6FF] rounded-none drawer-button h-12">
            <MdMenu className="my-drawer drawer-button text-[26px] text-slate-500"></MdMenu>
          </label>
        </div>
      </div>


      <div className="drawer-side z-10">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <div className="p-4 w-[340px] md:w-[360px] min-h-full bg-[#315779] text-base-content">
          <div className="text-left w-full flex justify-between items-center lg:mt-0 mt-10 mb-7 lg:mb-0">
            <a href="#home" className="btn btn-ghost normal-case text-5xl text-slate-200 font-Cormorant-Garamond italic">
              Malibu
            </a>
            <label htmlFor="my-drawer" className="w-10">
              <MdOutlineClose className="text-2xl text-center text-slate-400"></MdOutlineClose>
            </label>
          </div>

          <div className=" flex xl:hidden">
            <NavItems></NavItems>

          </div>
        </div>
      </div>
    </div>

  );
};


const NavItems = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="w-full flex ">
      <ul className=" w-full  flex flex-col xl:flex-row gap-1 lg:gap-5 px-1 text-slate-300">
        <li className=" flex items-center bg-[#A7D6FF] tracking-wide text-base text-[#315779] px-4 py-3 lg:py-1 cursor-pointer ">
          <a href="#home" className="hover:bg-transparent font-IBM-Plex-Sans">HOME</a>
        </li>
        <li className="flex items-center px-4 py-3 lg:py-1 lg:text-white hover:bg-white font-IBM-Plex-Sans tracking-wide text-base hover:text-[#315779]  ">
          <a href="#reserve" className="hover:bg-transparent ">RESERVE</a>
        </li>
        <li
          onClick={toggleDropdown}
          class="group relative dropdown px-4 py-3 lg:py-1 lg:text-white hover:bg-white hover:text-[#315779] cursor-pointer font-thin text-base uppercase tracking-wide"
        >
          <a href="#pages" className="w-full justify-between hover:bg-transparent font-IBM-Plex-Sans text-base whitespace-nowrap flex items-center text-start ">
            PAGES
            <span>
              <MdKeyboardArrowDown className="text-2xl"></MdKeyboardArrowDown>
            </span>
          </a>
          <div className={`xl:group-hover:block dropdown-menu absolute ${dropdownOpen ? "block" : "hidden"} h-auto`}>
            <ul class="top-0 w-48 bg-white px-6 py-8 text-start">
              <li class="py-1 hover:bg-[#E9F5FF] w-full">
                <a href="#about" class="block font-thin text-base uppercase text-[#707E8B] hover:bg-transparent font-IBM-Plex-Sans cursor-pointer">
                  about
                </a>
              </li>
              <li class="py-1 hover:bg-[#E9F5FF]">
                <a href="#menu" class="block font-thin text-base uppercase text-[#707E8B] hover:bg-transparent font-IBM-Plex-Sans cursor-pointer">
                  menu
                </a>
              </li>
              <li class="py-1 hover:bg-[#E9F5FF]">
                <a href="#activities" class="block  font-thin text-base uppercase text-[#707E8B] hover:bg-transparent font-IBM-Plex-Sans cursor-pointer">
                  activities
                </a>
              </li>
              <li class="py-1 hover:bg-[#E9F5FF]">
                <a href="#offers" class="block  font-thin text-base uppercase text-[#707E8B] hover:bg-transparent font-IBM-Plex-Sans cursor-pointer">
                  offers
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="flex items-center lg:text-white hover:bg-white text-base hover:text-[#315779] px-4 py-3 lg:py-1">
          <a href="#contact" className="hover:bg-transparent font-IBM-Plex-Sans">
            CONTACT
          </a>
        </li>
      </ul>
    </div>
  )
}

export default NavBar;
