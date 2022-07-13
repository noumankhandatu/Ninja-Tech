import React from "react";
import Wrapper from "./wrapper";
import { AiOutlineRight } from "react-icons/ai";
import Button from "../molecule/button";
type ExpectMoreBannerProps = {
  titleone?: string;
  titletwo?: string;
  description?: string;
  button?: boolean;
};
const ExpectMoreBanner = ({
  titleone,
  titletwo,
  description,
  button
}: ExpectMoreBannerProps) => {
  return (
    <div>
      <div className="relative">
        <div className="bg-[url('/homebg.jpg')]  brightness-50 h-96 pt-96 pb-52 bg-no-repeat bg-center p-10"></div>
        <Wrapper contained={true} className=" absolute top-32  text-white">
          <p className="text-6xl pt-10 text-white">{titleone}</p>
          <p className="text-6xl pb-10">{titletwo}</p>
          <p className="text-[18px] ">{description}</p>
          {button && (
            <Button variant="contained" className="rounded mt-10 filled" endIcon={<AiOutlineRight />}>
              Get a Quote
            </Button>
          )}
        </Wrapper>
      </div>
    </div>
  );
};

export default ExpectMoreBanner;