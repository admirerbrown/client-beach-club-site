const RenderBlogPosts = () => {
  return (
    <div className="flex flex-col w-full h-full md:items-center md:justify-center mt-[20rem] mb-[400px] md:mb-60 px-5 gap-[18px] md:gap-0 xl:px-[66px] 2xl:px-0">
      <div className="w-full 2xl:w-[65%] text-start ">
        <p className="text-start text-lg font-IBM-Plex-Sans tracking-[5px] uppercase text-[#315779] mb-5 md:mb-0">
          Latest blog
        </p>
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <p className="capitalize text-[34px] leading-[40px] md:text-[40px] lg:text-5xl font-Cormorant-Garamond font-medium text-[#315779]">
            discover the joy of reading
          </p>
          <div className="w-1/2 md:w-3/12 lg:w-[170px] mb-10 lg:mb-8 lg:bg-transparent px-1.5 mt-8 border-[#315779] border btn-breathe hover:border-[#A7D6FF]">
            <button className="w-full h-12 btn-sm md:btn-md lg:btn-sm lg:h-10 bg-[#315779] my-1.5 rounded-none md:text-base lg:text-sm text-sm text-white font-IBM-Plex-Sans tracking-widest hover:bg-[#A7D6FF] hover:text-[#315779]">
              SEE ALL BLOG
            </button>
          </div>
        </div>
      </div>

      <div className="2xl:w-[65%] h-full flex flex-col  md:flex-row w-full justify-center items-center">
        <div className="w-full text-left flex flex-col">
          <div className="w-full flex flex-col h-full">
            <p className="text-xs font-IBM-Plex-Sans tracking-[5px] uppercase mb-3 text-gray-500">
              october 16, 2023
            </p>
            <p className="capitalize text-[20px] md:text-[24px] lg:text-[20px] xl:text-[26px] font-Cormorant-Garamond text-[#315779] font-medium w-full md:w-[85%]">
              the beach club chronicles where luxury meets the ocean
            </p>
            <p className="font-IBM-Plex-Sans text-[14px] lg:text-[16px] w-full text-gray-400 md:w-[85%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua....
            </p>
            <hr className="flex-grow border-t md:border-t-2 mt-5 mb-5 w-full text-gray-500 md:w-[84%]"></hr>
          </div>
          <div className="w-full flex flex-col">
            <p className="text-xs font-IBM-Plex-Sans tracking-[5px] uppercase mb-3 text-gray-500">
              August 14, 2023
            </p>
            <p className="capitalize text-[20px] md:text-[24px] lg:text-[20px] xl:text-[26px] font-Cormorant-Garamond text-[#315779] font-medium  w-full md:w-[85%]">
              Paradise Found Exploring the Top Beach resorts Around the World
            </p>
            <p className="font-IBM-Plex-Sans text-gray-400 text-[14px] lg:text-[16px] w-full md:w-[85%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua....
            </p>
            <hr className="flex-grow  border-t md:border-t-2 mt-5 mb-5 text-gray-500 w-full md:w-[84%]"></hr>
          </div>

          <div className="w-full flex flex-col">
            <p className="text-xs font-IBM-Plex-Sans tracking-[5px] uppercase mb-3 text-gray-500">
              June 28, 2023
            </p>
            <p className="capitalize text-[20px] md:text-[24px] lg:text-[20px] xl:text-[26px] font-Cormorant-Garamond text-[#315779] font-medium  w-full md:w-[85%]">
              Beachside Revelry Unveiling the Hidden Gems of Beach Clubs
            </p>
            <p className="font-IBM-Plex-Sans text-gray-400 text-[14px] lg:text-[16px] w-full md:w-[85%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua....
            </p>
            <hr className="flex-grow border-t md:border-t-2 mt-5 text-gray-500 w-full md:w-[85%]"></hr>
          </div>
        </div>

        <div className="relative w-full h-[460px] md:h-[640px] xl:h-[620px] object-cover py-7">
          <img
            src="https://img.freepik.com/free-photo/group-friends-having-fun-during-white-party-with-drinks-by-pool_23-2149485992.jpg?size=626&ext=jpg&ga=GA1.1.865150467.1694076383&semt=ais"
            alt=""
            className="w-full h-full"
          />
          <div className="absolute top-0 left-0 mt-7 w-full h-[88%] lg:h-[91%] md:h-[91.5%] bg-black opacity-40"></div>
        </div>
      </div>
    </div>
  );
};

export default RenderBlogPosts;
