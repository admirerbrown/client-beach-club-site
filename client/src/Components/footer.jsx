import { BsTelephone } from "react-icons/bs";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";
import { ImMap2 } from "react-icons/im";
import { LuMailOpen } from "react-icons/lu";


const Footer = () => {
  return (
    <footer className="flex flex-col p-5 bg-[#315779] text-stone-200 text-sm w-full items-center ">
      <ContactDetailsCard></ContactDetailsCard>

      <div className=" xl:flex items-start justify-start mt-40 pt-60 md:pt-5 w-full md:px-14 2xl:w-[72%]">
        <div className="flex gap-5 flex-col items-start mb-10 md:items-center md:text-center xl:items-start mt-5 md:mt-0">
          <img src="" alt="logo" />
          <p className="text-sm font-IBM-Plex-San text-start md:text-center md:text-base md:w-[60%] xl:w-[80%] xl:text-start xl:text-sm">
            Discover a world of elegance and beachfront enchantment at our
            esteemed beach club.
          </p>
          <div className="flex gap-5 text-xl mt-4 text-white">
            <FaFacebookF className="text-[#a7d6ff]"></FaFacebookF>
            <FaTwitter></FaTwitter>
            <FaYoutube></FaYoutube>
            <FaInstagram></FaInstagram>
            <RiWhatsappFill></RiWhatsappFill>
          </div>
        </div>
        <div className="flex flex-col gap-10 font-IBM-Plex-Sans w-full items-start mb-10 md:flex-row md:justify-evenly xl:justify-between">
          <nav className="flex flex-col text-left gap-3 w-full ">
            <header className="font-Cormorant-Garamond capitalize text-xl text-white mb-2">
              Quick Links
            </header>

            <a href='#home' className="link link-hover hover:no-underline">About</a>
            <a href='#home' className="link link-hover hover:no-underline">Menu</a>
            <a href='#home' className="link link-hover hover:no-underline">Offers</a>
            <a href='#home' className="link link-hover hover:no-underline">Activities</a>
            <a href='#home' className="link link-hover hover:no-underline">Blog</a>
          </nav>
          <nav className="flex flex-col text-left gap-3 w-full">
            <header className="font-Cormorant-Garamond capitalize text-xl text-white font-medium mb-2">
              Support
            </header>
            <a href='#home' className="link link-hover hover:no-underline">Disclaimer</a>
            <a href='#home' className="link link-hover hover:no-underline">Help Center</a>
            <a href='#home' className="link link-hover hover:no-underline">
              Legal Information
            </a>
            <a href='#home' className="link link-hover hover:no-underline">Privacy Policy</a>
            <a href='#home' className="link link-hover hover:no-underline">
              Term & Condition
            </a>
          </nav>
          <nav className="w-full">
            <header className="font-Cormorant-Garamond capitalize text-xl text-white font-medium mb-5 text-start">
              Subscribe Our Newsletter
            </header>
            <form className="w-full">
              <div className="flex flex-col gap-3 w-full  ">
                <input
                  type="email"
                  className="border-2 pl-5 border-[rgb(238,242,255,.3)] placeholder-stone-300 h-[52px] shadow-md w-full  bg-transparent focus:ring-white focus:border-none focus:rounded "
                  placeholder="Your Email Address"
                  required
                />
                <button
                  type="submit"
                  className=" flex w-40 text-left pl-5 border-none items-center bg-[rgb(88,105,130)] h-12 border rounded-none text-base text-white font-IBM-Plex-Sans tracking-widest hover:bg-[#A7D6FF] hover:text-[#315779]"
                >
                  SUBSCRIBE
                </button>
              </div>
            </form>
          </nav>
        </div>
      </div>

      <hr className="flex-grow border-t border-[rgb(238,242,255,.2)] mt-14 w-[88%]"></hr>
      <h5 className="mt-5">
        © 2023 · <span className="text-[#A7D6FF]">Malibu</span> · Built by
        Submarine-Tech.
      </h5>
    </footer>
  );
};

const ContactDetailsCard = () => {
  return (
    <div className="bg-white border flex flex-col gap-5 absolute w-[88%] 2xl:w-[65%] items-center justify-center p-4 transform -translate-y-1/2 -translate-x-0 md:flex-row">
      <div className="text-center p-6 bg-[#E9F5FF] shadow-sm flex flex-col items-center h-full w-full ">
        <div className="bg-white w-[68px] h-[72px] flex items-center justify-center ">
          <ImMap2 className="text-[36px] text-[rgb(88,105,130)]"></ImMap2>
        </div>
        <p className="text-[#315779] text-[25px] font-Cormorant-Garamond mt-6">
          Our Location
        </p>
        <p className="text-[#8c9aa6] text-sm font-IBM-Plex-San mt-3 lg:w-[70%] ">
          Jl. Segara Ayu Sanur, Denpasar Selatan, Bali
        </p>
      </div>

      <div className="text-center p-6 bg-[#E9F5FF] shadow-sm flex flex-col items-center h-full w-full">
        <div className="bg-white w-[68px] h-[72px] flex items-center justify-center ">
          <LuMailOpen className="text-[36px] text-[rgb(88,105,130)]"></LuMailOpen>
        </div>
        <p className="text-[#315779] text-[25px] font-Cormorant-Garamond mt-6">
          Our Email
        </p>
        <p className="text-[#8c9aa6] text-sm font-IBM-Plex-San mt-3 lg:w-[70%]">
          Support@malibu.com | info@booking.com
        </p>
      </div>

      <div className="text-center p-6 bg-[#E9F5FF] shadow-sm flex flex-col items-center h-full w-full">
        <div className="bg-white w-[68px] h-[72px] flex items-center justify-center ">
          <BsTelephone className="text-[36px] text-[rgb(88,105,130)]"></BsTelephone>
        </div>
        <p className="text-[#315779] text-[25px] font-Cormorant-Garamond mt-6">
          Our Phone
        </p>
        <ul className="text-[#8c9aa6] text-sm font-IBM-Plex-San mt-3 lg:w-[70%]">
          <li>P1 : (+62) 8896-2220</li>
          <li>P2: (+62) 81 6754 345</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
