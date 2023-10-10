/* eslint-disable jsx-a11y/anchor-is-valid */
import { SlMap } from "react-icons/sl";
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
      <div className="bg-white border  flex flex-col gap-4 absolute w-[88%] 2xl:w-[65%] transform -translate-y-1/2 -translate-x-0 p-4">
        <div className="text-center p-6 bg-[#E9F5FF] shadow-sm flex flex-col items-center h-full ">
          <div className="bg-white w-[68px] h-[72px] flex items-center justify-center ">
            <ImMap2 className="text-[36px] text-[rgb(88,105,130)]"></ImMap2>
          </div>
          <p className="text-[#315779] text-[25px] font-Cormorant-Garamond mt-6">Our Location</p>
          <p className="text-[#8c9aa6] text-sm font-IBM-Plex-San mt-3 ">Jl. Segara Ayu Sanur, Denpasar Selatan, Bali</p>
        </div>

        <div className="text-center p-6 bg-[#E9F5FF] shadow-sm flex flex-col items-center h-full ">
          <div className="bg-white w-[68px] h-[72px] flex items-center justify-center ">
            <LuMailOpen className="text-[36px] text-[rgb(88,105,130)]"></LuMailOpen>
          </div>
          <p className="text-[#315779] text-[25px] font-Cormorant-Garamond mt-6">Our Email</p>
          <p className="text-[#8c9aa6] text-sm font-IBM-Plex-San mt-3">Support@malibu.com | info@booking.com</p>
        </div>

        <div className="text-center p-6 bg-[#E9F5FF] shadow-sm flex flex-col items-center h-full ">
          <div className="bg-white w-[68px] h-[72px] flex items-center justify-center ">
            <BsTelephone className="text-[36px] text-[rgb(88,105,130)]"></BsTelephone>
          </div>
          <p className="text-[#315779] text-[25px] font-Cormorant-Garamond mt-6">Our Phone</p>
          <p className="text-[#8c9aa6] text-sm font-IBM-Plex-San mt-3">P1 : (+62) 8896-2220 <span> P2: (+62) 81 6754 345</span></p>
        </div>
      </div>
      <div className=" xl:flex items-start justify-start mt-40">
        <div className="flex gap-5 flex-col items-start mb-10 md:items-center md:text-center xl:items-start">
          <img src="" alt="logo" />
          <p className="text-sm font-IBM-Plex-San text-start md:text-center md:text-base md:w-[60%] xl:w-[80%] xl:text-start xl:text-sm">
            Discover a world of elegance and beachfront enchantment at our
            esteemed beach club.
          </p>
          <div className="flex gap-5 text-xl mt-4 text-white">
            <FaFacebookF></FaFacebookF>
            <FaTwitter></FaTwitter>
            <FaYoutube></FaYoutube>
            <FaInstagram></FaInstagram>
            <RiWhatsappFill></RiWhatsappFill>
          </div>
        </div>
        <div className="flex flex-col gap-10 font-IBM-Plex-Sans w-full items-start mb-10 md:flex-row md:justify-evenly xl:justify-between">
          <nav className="flex flex-col text-left gap-3 w-full ">
            <header className="font-Cormorant-Garamond capitalize text-xl text-white mb-4">
              Quick Links
            </header>

            <a className="link link-hover hover:no-underline">About</a>
            <a className="link link-hover hover:no-underline">Menu</a>
            <a className="link link-hover hover:no-underline">Offers</a>
            <a className="link link-hover hover:no-underline">Activities</a>
            <a className="link link-hover hover:no-underline">Blog</a>
          </nav>
          <nav className="flex flex-col text-left gap-3 w-full">
            <header className="font-Cormorant-Garamond capitalize text-xl text-white font-medium mb-4">
              Support
            </header>
            <a className="link link-hover hover:no-underline">Disclaimer</a>
            <a className="link link-hover hover:no-underline">Help Center</a>
            <a className="link link-hover hover:no-underline">
              Legal Information
            </a>
            <a className="link link-hover hover:no-underline">Privacy Policy</a>
            <a className="link link-hover hover:no-underline">
              Term & Condition
            </a>
          </nav>
          <nav className="w-full">
            <header className="font-Cormorant-Garamond capitalize text-xl text-white font-medium mb-5 text-start">
              Subscribe to Our Newsletter
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

      <hr className="flex-grow border-t border-[rgb(238,242,255,.2)] mt-14"></hr>

      <h5 className="mt-5">
        © 2023 · <span className="text-[#A7D6FF]">Malibu</span> · Built by
        Submarine-Tech.
      </h5>
    </footer>
  );
};

const FooterCard = () => {
  const footerItems = [
    {
      icon: <SlMap></SlMap>,
      title: "Our Location",
      item1: "123 Main Street City, State 12345",
    },
    {
      icon: <BsTelephone></BsTelephone>,
      title: "Our Email",
      item1: "support@resort.com | info@resort.com",
    },
    {
      icon: <BsTelephone></BsTelephone>,
      title: "Our Phone",
      item1: "+1 (123) 456-7890",
    },
  ];

  return (
    <div className="absolute w-[88%] 2xl:w-[65%] bg-white border flex gap-5 p-5 items-center justify-center  transform translate-y-1/2 -translate-x-0">
      {footerItems.map((card, index) => (
        <div
          className="flex flex-col justify-center items-center text-[#315779] font-Cormorant-Garamond"
          key={card.id}
        >
          <div className="text-center pb-7 bg-[#E9F5FF] shadow-sm">
            <div className="flex shadow-md h-[105px] w-[105px] p-1.5 overflow-hidden border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800 -bottom-10">
              <img
                className="w-full h-full object-cover"
                src={card.icon}
                alt=""
              />
            </div>
            <p className="text-center text-[22px] p-8 leading-8">
              {card.title}
            </p>
            <p className="text-center text-[22px] p-8 leading-8">
              {card.item1}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Footer;
