import React from "react";
import Wrapper from "./wrapper";

export const ProjectInMindBanner = () => {
  return (
    <>
      <Wrapper full={true} className="bg-pink-100 p-20">
        <div className="grid grid-cols-[2fr,1fr] items-center">
          <div>
            <p className="text-4xl font-extrabold mb-4 pt-10">
              Do you have similar project in your mind?
            </p>
            <p className="text-2xl ">
              Send us your requirements on NinjaTech or info@ninjatech.agency
            </p>
          </div>
          <div>
            <button className="pl-20 pr-20 p-7 text-center  text-2xl text-white bg-orange-500 rounded-md">
              Contact Us
            </button>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
