/* eslint-disable jsx-a11y/anchor-is-valid */
import { MdKeyboardArrowDown } from "react-icons/md";
const NavBar = () => {
  return (
    <div className="">
      <div className="navbar bg-[rgb(212,212,216,.1)] h-24 shadow-sm border-b backdrop-blur-md border-[#96989B] border-solid">
        <div className="navbar-start">
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="text-white hover:bg-white tracking-wide text-base">
              <a className="hover:bg-transparent font-IBM-Plex-Sans">HOME</a>
            </li>
            <li className="text-white hover:bg-white font-IBM-Plex-Sans tracking-wide text-base">
              <a className="hover:bg-transparent ">RESERVE</a>
            </li>
            <li class="group relative dropdown px-4 text-white hover:bg-white hover:text-[#707E8B] cursor-pointer font-thin text-base uppercase tracking-wide">
              <a className="hover:bg-transparent font-IBM-Plex-Sans text-base">
                PAGES <MdKeyboardArrowDown></MdKeyboardArrowDown>
              </a>
              <div class="group-hover:block dropdown-menu absolute hidden h-auto">
                <ul class="top-0 w-48 bg-white px-6 py-8">
                  <li class="py-1 hover:bg-[#E9F5FF]">
                    <a class="block font-thin text-base uppercase text-[#707E8B] hover:bg-transparent font-IBM-Plex-Sans cursor-pointer">
                      about
                    </a>
                  </li>
                  <li class="py-1 hover:bg-[#E9F5FF]">
                    <a class="block  font-thin text-base uppercase text-[#707E8B] hover:bg-transparent font-IBM-Plex-Sans cursor-pointer">
                      menu
                    </a>
                  </li>
                  <li class="py-1 hover:bg-[#E9F5FF]">
                    <a class="block  font-thin text-base uppercase text-[#707E8B] hover:bg-transparent font-IBM-Plex-Sans cursor-pointer">
                      activities
                    </a>
                  </li>
                  <li class="py-1 hover:bg-[#E9F5FF]">
                    <a class="block  font-thin text-base uppercase text-[#707E8B] hover:bg-transparent font-IBM-Plex-Sans cursor-pointer">
                      offers
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="text-white hover:bg-white text-base">
              <a className="hover:bg-transparent font-IBM-Plex-Sans">CONTACT</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">
          <div className="bg-transparent mr-5 border-[rgb(238,242,255,.3)] border btn-breathe hover:border-[#A7D6FF]">
            <button className="btn-sm px-4 bg-[#69727d] m-1.5 rounded-none text-base text-white font-IBM-Plex-Sans tracking-widest hover:bg-[#A7D6FF] hover:text-[#315779] ">
              BOOK NOW!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
