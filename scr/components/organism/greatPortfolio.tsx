import React, { useState } from "react";
import PortfolioCard from "../molecule/portfolioCard";
import Button from "../molecule/button";
import Link from "next/link";
type PortfolioProps = {
  // any for being time
  data: any;
};
const GreatPortfolio = ({ data }: PortfolioProps) => {
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
  const [catogrerys, setCatogery] = useState<any>(data);
  const handleToggles = (id: number, title: string) => {
    setActiveBar(id);
    const updatedItem = data.filter((ele: any) => {
      return ele.catogery === title;
    });
    setCatogery(updatedItem);
    if (title === "All") {
      setCatogery(data);
    }
  };
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
              onClick={(
                e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
              ) => {
                handleToggles(id, items.title);
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
        {catogrerys?.map((items: any) => {
          return (
            <>
              <PortfolioCard
                image={items.image}
                title={items.title}
                description={items.description}
              />
            </>
          );
        })}
        <div className="flex justify-center pb-32 pt-20">
          <Button path="/portfolio" variant="alpha">
            View Projects
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GreatPortfolio;
