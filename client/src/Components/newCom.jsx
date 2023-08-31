const Hero = () => {
  return (
    <div className="flex flex-col w-full h-full ">
      <video
        className="w-screen h-screen object-cover "
        // src={bgVideo}
        autoPlay
        muted
        loop
        playbackRate={0.5}
      ></video>

      <div className="absolute top-0 left-0 w-full h-full bg-[rgb(22,36,63,0.5)] text-white flex flex-col justify-end pb-32 items-center ">
        <div className="flex justify-between w-4/6 sm:w-full sm:mx-3 mb-5 font-Cormorant-Garamond">
          <p className="flex tracking-wider text-xl">KUTI BALI,</p>
          <p className="flex tracking-wider">DIRECT ME</p>
        </div>
        <hr className="w-4/6 h-5 sm:w-full sm:mx-3" />

        <div className="w-4/6">
          <div className="flex gap-20 ">
            <h1 className="text-start font-light antialiased tracking-wider text-9xl mb-6 font-Cormorant-Garamond">
              Escape To Paradise
            </h1>
            <div className="mt-6 ml-12">
              <div class="outer">
                <div class="circle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
