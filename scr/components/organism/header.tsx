import React from "react";
import logo from "../atom/assets/images/logo.png";
import Image from "next/image";
import Wrapper from "./wrapper";
const Header = () => {
  return (
    <Wrapper contained={true} className="flex justify-between items-center p-5">
      <div className="flex items-center">
        <Image
          src="/logo.png"
          alt="Picture of the author"
          width={139}
          height={57}
        ></Image>
        <p className=" ml-32 mr-5 text-1xl">About Ninja </p>
        <p className="ml-6 text-1xl">Services</p>
        <p className="ml-6 text-1xl">Values and Purpose </p>
        <p className="ml-6 text-1xl">Branch </p>
        <p className="ml-6 text-1xl">Portfolio</p>
      </div>

      <button className="text-center text-white font-bold rounded pl-8 pt-2 pb-2 pr-8  focus:outline-none bg-black border-2 ">
        Lets Talk
      </button>
    </Wrapper>
  );
};

export default Header;
