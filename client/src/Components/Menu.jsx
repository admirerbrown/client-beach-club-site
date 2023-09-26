const RenderMenu = () => {
  const menu = [
    {
      name: "Appetizers",
      image:
        "https://img.freepik.com/free-photo/side-view-doner-plate-with-french-fries-tomato-fresh-cucumber-yogurt-bread-table_141793-4969.jpg?size=626&ext=jpg&ga=GA1.2.865150467.1694076383&semt=sph",
    },
    {
      name: "Salads",
      image:
        "https://img.freepik.com/free-photo/top-view-homemade-delicious-salad-with-many-ingredients-plate-black-green-mix-colors-background_179666-20005.jpg?size=626&ext=jpg&ga=GA1.1.865150467.1694076383&semt=sph",
    },
    {
      name: "Pasta",
      image:
        "https://img.freepik.com/free-photo/authentic-italian-pasta_24972-2334.jpg?size=626&ext=jpg&ga=GA1.2.865150467.1694076383&semt=sph",
    },
    {
      name: "Desserts",
      image:
        "https://img.freepik.com/free-photo/bowl-banana-split-ice-cream-with-banana-split-bananas-top_188544-32639.jpg?size=626&ext=jpg&ga=GA1.1.865150467.1694076383&semt=sph",
    },
    {
      name: "Calamari",
      image:
        "https://img.freepik.com/free-photo/meat-stew-with-potatoes-oil-spices_114579-4497.jpg?size=626&ext=jpg&ga=GA1.1.865150467.1694076383&semt=ais",
    },
    {
      name: "Ceviche",
      image:
        "https://img.freepik.com/free-photo/chicken-nuggets-teriyaki-sauca-hot-chili-dip-white-plate_114579-1537.jpg?size=626&ext=jpg&ga=GA1.1.865150467.1694076383&semt=ais",
    },
  ];

  return (
    <div className=" pt-10">
      <div className="font-Cormorant-Garamond  justify-center flex flex-col p-5 capitalize gap-7">
        <h2 className=" text-2xl xl:text-3xl tracking-widest font-medium text-[#315779] xl:text-start xl:pl-5 2xl:pl-0">
          check our menu
        </h2>
        <h1 className="text-[29px] font-semibold md:text-4xl xl:text-5xl md:ml-5 text-[#315779] leading-10 mb-6 tracking-widest 2xl:ml-0">
          Savor the Coastal Delights, Bask in Sunshine, with a Wave of Beach
          Vibes.
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-5">
        {menu.map((item, index) => (
          <div
            key={index + 1}
            className="flex items-center flex-col gap-4 text-2xl text-[#315779]"
          >
            <div className="rounded-full overflow-hidden border w-[9.5rem] h-[9.5rem] p-2.5 btn-breathe hover:border-[#A7D6FF]">
              <img
                src={item.image}
                alt=""
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h1 className="text-center font-Cormorant-Garamond ">
              {item.name}
            </h1>
          </div>
        ))}
      </div>
      <div>
        <MenuItems></MenuItems>
      </div>
    </div>
  );
};

const MenuItems = () => {
  return (
    <>
      <div className=" h-[570px] w-[400px] border-2 border-red-600">
        <div className=" h-14 border flex justify-center items-center" >
            <h2 className="">Yummy Snack</h2>
        </div>
        <div className=" h-24 border justify-center flex flex-col mx-5" >
            <h4 className="flex justify-between w-full">Classic Nachos<span>$16</span></h4>
            <p className="text-left">Consecte adipi elit.</p>
        </div>
      </div>
    </>
  );
};

export default RenderMenu;
