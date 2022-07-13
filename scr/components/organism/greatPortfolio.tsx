import React, { useState } from "react";
import PortfolioCard from "../molecule/portfolioCard";
import Button from "../molecule/button";

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
      <div>
        <PortfolioCard image={"https://ninjatech.agency/wp-content/uploads/2021/12/Number_2-630x415.png"} title={"NUMBER 2 IS E-COMMERCE WEBSITE PROVIDING TOILET PAPERS."} description={"Number 2"} />
        <PortfolioCard image={"https://ninjatech.agency/wp-content/uploads/2021/12/Click-Grow_1-630x415.png"} title={"GROW IN-DOOR PLANTS WITH CLICK & GROW."} description={"Click & Grow"} />
        <div className="flex justify-center pb-32 pt-20">
          <Button variant="alpha">View Projects</Button>
        </div>
      </div>
    </div>
  );
};

export default GreatPortfolio;
