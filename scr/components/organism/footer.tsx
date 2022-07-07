import React from "react";
import Image from "next/image";
import Wrapper from "./wrapper";

const Footer = () => {
  return (
    <Wrapper contained={true} className="pt-10 pb-10 ">
      <div className="grid grid-cols-4 ">
        <div>
          <Image
            src="/logo.png"
            alt="Picture of the author"
            width={139}
            height={57}
          ></Image>
          <p>Our Agency Provides Custom Software Development Solutions</p>
        </div>
        <div>
          <p className="text-2xl font-semibold">Company</p>

          <p className="pt-3">Life @ninja</p>
          <p className="pt-2">Career</p>
          <p className="pt-2">Blog</p>
        </div>
        <div>
          <p className="text-2xl font-semibold">Contact Numbers</p>
          <p className="pt-3">UK: +44 20 3286 1571</p>
          <p className="pt-2">US: +1 707 408 1656</p>
          <p className="pt-2">Ind: +91 9638343734</p>
        </div>
        <div>
          <p className="text-2xl font-semibold">Contact Us</p>
          <p className="pt-3">info@ninjatech.agency</p>
          <p className="pt-2">
            576 Lakewood Rd North NW, Edmonton, Alberta T6K 3Y1, Canada
          </p>
          <p className="pt-2">736 Iscon Emporio, Ahmedabad, Gujarat 380015</p>
        </div>
      </div>
      <div className="pt-3 pb-3">
        <hr />
        <p className="text-center pt-5">
          Copyright © 2022 NinjaTech. All rights reserved. Privacy Policy
          Contact
        </p>
      </div>
    </Wrapper>
  );
};

export default Footer;
