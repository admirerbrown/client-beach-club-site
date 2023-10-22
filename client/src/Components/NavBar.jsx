/* eslint-disable jsx-a11y/anchor-is-valid */
// /* eslint-disable jsx-a11y/anchor-is-valid */
// import { MdKeyboardArrowDown } from "react-icons/md";
import { MdMenu, MdOutlineClose, MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";

// const NavBar = () => {
//   return (
//     <div className="">
//       <div className="navbar bg-[rgb(212,212,216,.1)] h-24 shadow-sm border-b backdrop-blur-md border-[#96989B] border-solid">
//         <div className="navbar-start">
//           <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
//         </div>
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal px-1">
//             <li className="text-white hover:bg-white tracking-wide text-base">
//               <a className="hover:bg-transparent font-IBM-Plex-Sans">HOME</a>
//             </li>
//             <li className="text-white hover:bg-white font-IBM-Plex-Sans tracking-wide text-base">
//               <a className="hover:bg-transparent ">RESERVE</a>
//             </li>
//             <li class="group relative dropdown px-4 text-white hover:bg-white hover:text-[#707E8B] cursor-pointer font-thin text-base uppercase tracking-wide">
//               <a className="hover:bg-transparent font-IBM-Plex-Sans text-base">
//                 PAGES <MdKeyboardArrowDown></MdKeyboardArrowDown>
//               </a>
//               <div class="group-hover:block dropdown-menu absolute hidden h-auto">
//                 <ul class="top-0 w-48 bg-white px-6 py-8">
//                   <li class="py-1 hover:bg-[#E9F5FF]">
//                     <a class="block font-thin text-base uppercase text-[#707E8B] hover:bg-transparent font-IBM-Plex-Sans cursor-pointer">
//                       about
//                     </a>
//                   </li>
//                   <li class="py-1 hover:bg-[#E9F5FF]">
//                     <a class="block  font-thin text-base uppercase text-[#707E8B] hover:bg-transparent font-IBM-Plex-Sans cursor-pointer">
//                       menu
//                     </a>
//                   </li>
//                   <li class="py-1 hover:bg-[#E9F5FF]">
//                     <a class="block  font-thin text-base uppercase text-[#707E8B] hover:bg-transparent font-IBM-Plex-Sans cursor-pointer">
//                       activities
//                     </a>
//                   </li>
//                   <li class="py-1 hover:bg-[#E9F5FF]">
//                     <a class="block  font-thin text-base uppercase text-[#707E8B] hover:bg-transparent font-IBM-Plex-Sans cursor-pointer">
//                       offers
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </li>
//             <li className="text-white hover:bg-white text-base">
//               <a className="hover:bg-transparent font-IBM-Plex-Sans">CONTACT</a>
//             </li>
//           </ul>
//         </div>
//         <div className="navbar-end ">
//           <div className="bg-transparent mr-5 border-[rgb(238,242,255,.3)] border btn-breathe hover:border-[#A7D6FF]">
//             <button className="btn-sm px-4 bg-[#69727d] m-1.5 rounded-none text-base text-white font-IBM-Plex-Sans tracking-widest hover:bg-[#A7D6FF] hover:text-[#315779] ">
//               BOOK NOW!
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NavBar;

// //TODO: MAKE NAVBAR RESPONSIVE



const NavBar = () => {
  const [open, setOpen] = useState(false)

  const handleClick = ()=>{
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <div className="relative flex flex-col w-full h-full">
      <div className={`bg-red-700 w-[350px] absolute h-screen z-20 lg:hidden ${open? "flex " :"hidden"}`}>
        <NavItems open={open} onClose={handleClose}></NavItems>
      </div>
      <div className="w-full relative flex items-center justify-between bg-[rgb(212,212,216,.1)] h-24 shadow-sm border-b backdrop-blur-md border-[#96989B] border-solid z-10">
        <div className="w-full lg:flex">
          <NavItems open={open} onClose={handleClose} ></NavItems>
        </div>
        <div className="flex lg:hidden items-center justify-center h-12 w-12 text-3xl bg-white" onClick={handleClick}>
          <MdMenu></MdMenu>
        </div>
      </div>
    </div>
  );
};

const NavItems = ({ open, onClose }) => {
  
  return (
    <div className="flex flex-col w-full lg:flex-row lg:justify-between items-center gap-8 ">
      <div className="text-left w-full flex justify-between items-center lg:mt-0">
        <a href="#home" className="btn btn-ghost normal-case text-4xl">
          daisyUI
        </a>
        <MdOutlineClose className={`text-2xl lg:hidden ${open?"flex": 'hidden'}`} onClick={()=>{onClose()}}></MdOutlineClose>
      </div>

      <div className={` lg:flex  w-full  ${open? 'flex' : 'hidden'}`}>
        <ul className="w-full flex flex-col gap-5 lg:flex-row px-1">
          <li className="text-white hover:bg-white tracking-wide text-base">
            <a className="hover:bg-transparent font-IBM-Plex-Sans">HOME</a>
          </li>
          <li className="text-white hover:bg-white font-IBM-Plex-Sans tracking-wide text-base">
            <a className="hover:bg-transparent ">RESERVE</a>
          </li>
          <li class="group relative dropdown px-4 text-white hover:bg-white hover:text-[#707E8B] cursor-pointer font-thin text-base uppercase tracking-wide">
            <a className="hover:bg-transparent font-IBM-Plex-Sans text-base whitespace-nowrap flex items-center text-start ">
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

      <div className=" hidden lg:flex bg-transparent mr-5 border-[rgb(238,242,255,.3)] border btn-breathe hover:border-[#A7D6FF]">
        <button className="btn-sm px-4 h-10 w-[150px] bg-[#69727d] m-1.5 rounded-none text-base text-white font-IBM-Plex-Sans tracking-widest hover:bg-[#A7D6FF] hover:text-[#315779] ">
          BOOK NOW!
        </button>
      </div>
    </div>
  );
};

export default NavBar;
