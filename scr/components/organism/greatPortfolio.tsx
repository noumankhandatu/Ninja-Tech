import React, { useState } from "react";

const GreatPortfolio = () => {
  const TabsItems = [
    {
      title: "All",
      id: 0,
    },
    {
      title: "Branding",
      id: 1,
    },
    {
      title: "Design",
      id: 2,
    },
    {
      title: "Graphic Design",
      id: 3,
    },
  ];
  const [activeBar, setActiveBar] = useState<number>(0);
  return (
    <div className="text-center">
      <p className="text-[42px]  mb-4 font-light">Great Portfolio</p>
      <p className="text-[18px]">
        Take a look at some of our brand identity examples are here with each
        different service and solution we provide.
      </p>
      <div className="flex  cursor-pointer mt-12 justify-center text-center">
        {TabsItems.map((items, id) => {
          return (
            <p
              onClick={() => {
                setActiveBar(id);
              }}
              className={`${
                items.id === activeBar ? "active text-App-orange" : "unactive"
              } text-[16px] cursor-pointer  ml-8 font-semibold hover:border-b-[#ff5b2e] ease-in-out duration-700`}
            >
              {items.title}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default GreatPortfolio;
