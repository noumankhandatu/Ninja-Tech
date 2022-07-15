import React from "react";
import AppFont from "../atom/AppFont";
type TestimonialCardProps = {
  img: string;
  name: string;
  place: string;
  description: string;
};
const TestimonialCard = ({
  img,
  name,
  place,
  description,
}: TestimonialCardProps) => {
  return (
    <div className="bg-white shadow mb-20 mr-4 p-14 h-[420px] rounded ">
      <div className="flex items-center ">
        <div>
          <img className="w-[70px] h-[70px] rounded-full" src={img} alt="" />
        </div>
        <div className="ml-4">
          <p className="text-[20px font-medium]">{name}</p>
          <AppFont className="text-App-orange">{place}</AppFont>
        </div>
      </div>
      <AppFont className="mt-8 leading-loose ">{description}</AppFont>
    </div>
  );
};

export default TestimonialCard;
// ""

