import React from "react";
import AppFont from "../atom/AppFont";
type TechoProps = {
  items:
    | {
        title: string;
        description: string;
        img: string;
      }[]
    | any;
};
const TechnologyCard = ({ items }: TechoProps) => {
  const { title, description, img } = items;
  return (
    <div className="ShadowBox p-6 rounded-lg  cursor-pointer ease-in-out duration-700">
      <img src={img} alt="techno-Images" />
      <p className="text-18px font-medium mt-8 mb-8">{title}</p>
      <AppFont>{description}</AppFont>
    </div>
  );
};

export default TechnologyCard;
