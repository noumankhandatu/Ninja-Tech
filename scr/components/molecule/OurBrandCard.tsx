import React from "react";
type OurBranchCard = {
  items: any;
};
const OurBranchCard = ({ items }: OurBranchCard) => {
  const { description, title, img } = items;
  return (
    <div className="flex flex-col items-center justify-center text-[#2A2A2A]	 h-[306px]  bg-[#E7F9FE] rounded-xl">
      <img className="w-[80%] h-[60px]" src={img} />
      <p className="text-[28px] font-medium  mt-2 mb-2">{title}</p>
      <p className="text-[15px] ">{description}</p>
    </div>
  );
};

export default OurBranchCard;
