import React from "react";
import Image from "next/image";
type InspireBannerProps = {
  title: string;
  description: string;
};
const InspireBanner = ({ title, description }: InspireBannerProps) => {
  return (
    <div className="grid grid-cols-[1fr,5fr] gap-10  pt-5">
      <div className="p-[24px] mb-10 bg-gray-100 rounded-3xl ">
        <Image src="/power.png" width={46} height={42}></Image>
      </div>
      <div className="">
        <p className="text-3xl font-semibold pb-4">{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InspireBanner;
