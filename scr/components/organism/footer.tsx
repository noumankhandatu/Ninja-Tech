import React from "react";
import Image from "next/image";
import Wrapper from "./wrapper";
import AppFont from "../atom/AppFont";
import { IoMdCall } from "react-icons/io";
import { TbBuilding } from "react-icons/tb";
import Button from "../molecule/button";
const Footer = () => {
  return (
    <Wrapper contained={true} className="pt-10 pb-10 ">
      <div className="grid lg:grid-cols-4  grid-cols-1 gap-10">
        <div>
          <Image
            src="/logo.png"
            alt="Picture of the author"
            width={139}
            height={57}
          ></Image>
          <AppFont className="mb-2 mt-3">
            Our Agency Provides Custom Software Development Solutions
          </AppFont>
          <Button variant="outlined">Get in touch</Button>
        </div>
        <div>
          <p className="text-[25px] font-semibold mb-3">Company</p>
          <AppFont className="mb-2">Blog</AppFont>
          <AppFont className="mb-2">Life @ninja</AppFont>
          <AppFont className="mb-2">Career</AppFont>
        </div>
        <div>
          <p className="text-[25px] font-semibold mb-3">Contact Numbers</p>
          <AppFont
            className="mb-2"
            startIcon={
              <IoMdCall className="mr-1 bg-black text-white text-[14px 16px] " />
            }
          >
            UK: +44 20 3286 1571
          </AppFont>
          <AppFont
            startIcon={
              <IoMdCall className="mr-1 bg-black text-white text-[14px 16px] " />
            }
            className="mb-2"
          >
            US: +1 707 408 1656
          </AppFont>
          <AppFont
            startIcon={
              <IoMdCall className="mr-1 bg-black text-white text-[14px 16px] " />
            }
            className="mb-2"
          >
            Ind: +91 9638343734
          </AppFont>
        </div>
        <div>
          <p className="text-[25px] font-semibold mb-3">Contact Us</p>
          <AppFont className="mb-2">info@ninjatech.agency</AppFont>
          <AppFont
            className="mb-2"
            startIcon={<TbBuilding className="mr-1 text-[14px 16px] " />}
          >
            576 Lakewood Rd North NW, Edmonton, Alberta T6K 3Y1, Canada
          </AppFont>
          <AppFont
            className="mb-2 "
            startIcon={<TbBuilding className="mr-1  text-[16] " />}
          >
            736 Iscon Emporio, Ahmedabad, Gujarat 380015
          </AppFont>
        </div>
      </div>
      <div className="pt-3 pb-3">
        <hr />
        <p className="text-center pt-5 text-[16px] text-[#707070]">
          Copyright © 2022 NinjaTech. All rights reserved. | Privacy Policy
          Contact
        </p>
      </div>
    </Wrapper>
  );
};

export default Footer;
