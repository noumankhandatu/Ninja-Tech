import React, { useState } from "react";
import ExpectMoreBanner from "../scr/components/organism/expectMoreBanner";
import Form from "../scr/components/organism/form";
import { ProjectInMindBanner } from "../scr/components/organism/banners";
import Wrapper from "../scr/components/organism/wrapper";
import AppFont from "../scr/components/atom/AppFont";
import ValuePurposeCard from "../scr/components/molecule/ValuePurposeCard";
import {
  ValuesData,
  ValuePurpCardData,
} from "../scr/components/atom/testingArrays";
const ValueAndPurpose = () => {
  const [clx, setClx] = useState<any>(null);

  function helo() {}
  helo();
  return (
    <div>
      <div className="relative text-center ">
        <div className="bg-[url('/valueandpurp.png')]   brightness-25 h-96 pt-96 pb-28 bg-no-repeat bg-center p-10"></div>
        <Wrapper contained={true} className=" absolute top-32  text-white">
          <p className="text-[42px] pt-10 mb-8 text-white">
            Our values are both our identity and our promise
          </p>
          <AppFont className="text-[19px] ">
            NinjaTech has the virtue of delivering the work flawlessly, our
            values are the reflection of our identity and commitment. Our team
            is always ready to welcome the new challenges to work and convey
            satisfactory outcomes to our clients.
          </AppFont>
        </Wrapper>
      </div>
      {/* values and purpose  =>*/}
      <div className="relative text-center">
        <div className="bg-[url('/value-banner.png')] bg-[#F5F5F5] h-[500px] bg-no-repeat bg-cover bg-center"></div>
        <Wrapper contained={true} className=" absolute top-32  text-white ">
          <p className="text-[42px] mb-8 text-black">Values and Purpose</p>
          <div className="grid grid-cols-7 gap-16 text-center  items-center  ">
            {ValuesData?.map((items) => {
              return (
                <div className="text-center flex flex-col items-center justify-items-center">
                  <img src={items.img} alt="" />
                  <AppFont className="font-[700] mt-6  text-black">
                    {items.title}
                  </AppFont>
                </div>
              );
            })}
          </div>
        </Wrapper>
        {/* All Cards */}
        <Wrapper contained className="">
          <div className={`grid grid-cols-2 gap-10 relative -top-20 `}>
            {ValuePurpCardData?.map((items, id) => {
              return (
                <div>
                  <ValuePurposeCard items={items} />
                </div>
              );
            })}
          </div>
        </Wrapper>
      </div>
      <Form />
      <ProjectInMindBanner />
    </div>
  );
};

export default ValueAndPurpose;
