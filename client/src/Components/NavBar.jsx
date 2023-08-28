/* eslint-disable jsx-a11y/anchor-is-valid */
const NavBar = () => {
  return (
    <div className="">
      <div className="navbar bg-[rgb(212,212,216,.1)] h-24 shadow-sm border-b backdrop-blur-md border-[#96989B] border-solid">
        <div className="navbar-start">
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="text-white hover:bg-white">
              <a className="hover:bg-transparent">HOME</a>
            </li>
            <li className="text-white hover:bg-white">
              <a className="hover:bg-transparent">RESERVE</a>
            </li>
            <li class="group relative dropdown px-4 text-white hover:bg-white hover:text-[#707E8B] cursor-pointer font-thin text-base uppercase tracking-wide">
              <a className="hover:bg-transparent">PAGES</a>
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
            <li className="text-white hover:bg-white">
              <a className="hover:bg-transparent">CONTACT</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
