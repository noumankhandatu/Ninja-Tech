import React from "react";
import Button from "./button";

type CardTypes = {
  image: string;
  title: string;
  description: string;
};

const PortfolioCard = ({ image, title, description }: CardTypes) => {
  return (
    <div className="flex items-center bg-[#FFF2EF] mt-10 mb-10">
      <img src={image} alt="" />
      <div className="p-10">
        <p className="text-[18px] mb-4">{title}</p>
        <p className={"text-[29px] mb-4 font-bold text-left"}>{description}</p>
        <div>
          <Button variant="danger">VIEW PROJECTS</Button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
