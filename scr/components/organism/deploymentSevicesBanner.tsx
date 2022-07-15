import React from "react";
type DeployProps = {
  title: string;
  description: string;
  tagone: string;
  tagtwo: string;
  tagthree?: string;
  tagfour?: string;
  tagfive?: string;
  image: any;
};
const DeploymentSevicesBanner = ({
  image,
  title,
  description,
  tagone,
  tagtwo,
  tagthree,
  tagfive,
  tagfour,
}: DeployProps) => {
  const cssProps =
    "text-[16px] font-medium text-App-orange mr-8  cursor-pointer";
  return (
    <div>
      <div className="">
        <div className="grid grid-cols-[0.5fr,1fr] gap-40 items-center">
          <div className="relative bg-[#F5F5F5] h-[450px] w-[400px] p-10 ">
            <img className="absolute -right-32" src={image} alt="images" />
          </div>
          <div>
            <p className="text-[36px]">{title}</p>
            <div className="flex flex-wrap mt-5 mb-8 ">
              <p className={`${cssProps}`}>{tagone}</p>
              <p className={`${cssProps}`}>{tagtwo}</p>
              <p className={`${cssProps}`}>{tagthree}</p>
              <p className={`${cssProps}`}>{tagfour}</p>
              <p className={`${cssProps}`}>{tagfive}</p>
            </div>
            <p className="text-[16px]">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeploymentSevicesBanner;
