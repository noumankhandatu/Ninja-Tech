import React from "react";
import Wrapper from "./wrapper";
import Button from "../molecule/button";
import { AiOutlineRight } from "react-icons/ai";
import { BsSkype } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import Link from "next/link";
export const ProjectInMindBanner = () => {
  return (
    <>
      <Wrapper full={true} className="bg-[#FFEDE9] p-20 pl-60">
        <div className="grid grid-cols-[2fr,1fr] items-center">
          <div>
            <p className="text-[42px] font-bold	 mb-4 pt-10">
              Do you have similar project in your mind?
            </p>
            <p className="text-[20px]  flex items-center">
              Send us your requirements on <BsSkype className="ml-2 mr-3" />{" "}
              <a href="" className="underline mr-2 ml-2 decoration-2">
                NinjaTech{" "}
              </a>{" "}
              <b>or</b> <IoIosMail className="ml-2 mr-2" />{" "}
              <a href="" className="underline decoration-2">
                info@ninjatech.agency
              </a>
            </p>
          </div>
          <div>
            <Button
              path="/contact"
              variant="alpha"
              endIcon={<AiOutlineRight />}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
