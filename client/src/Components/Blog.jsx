const RenderBlogPosts = () => {
  return (
    <div className="flex  flex-col  w-full items-center justify-center mt-[25rem] mb-64">
      <div className=" w-[65%]">
        <p className="text-start text-lg font-IBM-Plex-Sans tracking-[5px] uppercase text-[#315779]">Latest blog</p>
        <div className="flex items-center justify-between">
          <p className="capitalize text-5xl font-Cormorant-Garamond text-[#315779]">discover the joy of reading</p>
          <div className="w-1/2 md:w-3/12 lg:w-[170px] mb-10 lg:mb-8 lg:bg-transparent px-1.5 mt-8 border-[#315779] border btn-breathe hover:border-[#A7D6FF]">
          <button className="w-full h-9 btn-sm md:btn-md lg:btn-sm lg:h-10 bg-[#315779]  my-1.5 rounded-none md:text-base lg:text-sm text-sm text-white font-IBM-Plex-Sans tracking-widest hover:bg-[#A7D6FF] hover:text-[#315779]">
            SEE ALL BLOG
          </button>
        </div>
        </div>
      </div>
      <div className="2xl:w-[65%] flex gap-[34px]  w-full justify-center items-center h-[600px]">
        <div className="w-full text-left">
          <div className="w-full flex flex-col h-full">
            <p className="text-xs font-IBM-Plex-Sans tracking-[5px] uppercase mb-3">
              June 28, 2023
            </p>
            <p className="capitalize text-2xl font-Cormorant-Garamond text-[#315779] font-medium">
              the beach club chronicles where luxury meets the ocean
            </p>
            <p className="font-IBM-Plex-Sans text-[16px] text-gray-400 w-[85%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua....
            </p>
            <hr className="flex-grow border-t-2 mt-5 mb-5 text-gray-500 w-[90%]"></hr>
          </div>
          <div className="w-full flex flex-col">
            <p className="text-xs font-IBM-Plex-Sans tracking-[5px] uppercase mb-3">
              June 28, 2023
            </p>
            <p className="capitalize text-2xl font-Cormorant-Garamond text-[#315779] font-medium ">
              the beach club chronicles where luxury meets the ocean
            </p>
            <p className="font-IBM-Plex-Sans text-gray-400 text-[16px] w-[85%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua....
            </p>
            <hr className="flex-grow border-t-2 mt-5 mb-5 text-gray-500 w-[90%]"></hr>
          </div>

          <div className="w-full flex flex-col">
            <p className="text-xs font-IBM-Plex-Sans tracking-[5px] uppercase mb-3">
              June 28, 2023
            </p>
            <p className="capitalize text-xl font-Cormorant-Garamond text-[#315779] font-medium ">
              the beach club chronicles where luxury meets the ocean
            </p>
            <p className="font-IBM-Plex-Sans text-gray-400 text-[16px] w-[85%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua....
            </p>
            <hr className="flex-grow border-t-2 mt-5 text-gray-500 w-[90%]"></hr>
          </div>
        </div>

        <div className="w-full h-full object-cover py-7">
          <img
            src="https://img.freepik.com/free-photo/group-friends-having-fun-during-white-party-with-drinks-by-pool_23-2149485992.jpg?size=626&ext=jpg&ga=GA1.1.865150467.1694076383&semt=ais"
            alt=""
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default RenderBlogPosts;


//TODO: MAKE BLOG COMPONENT RESPONSIVE
//TODO: ADD A DARK OVERLAY TO IMAGE AND ALSO ADD TEXT