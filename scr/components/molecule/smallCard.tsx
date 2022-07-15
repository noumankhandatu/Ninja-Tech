import React from "react";
type SmallCardProps = {
  numbers: string;
  tag: string;
};
const SmallCard = ({numbers , tag}:SmallCardProps) => {
  return (
    <div>
      <div className=" p-6 w-[220px] h-[120px] ShadowBox rounded-[30px]">
        <p className="font-semibold text-3xl text-[#2A2A2A]">{numbers}</p>
        <p className="text-[14px] text-[#2A2A2A]">{tag}</p>
      </div>
    </div>
  );
};

export default SmallCard;
