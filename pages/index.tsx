import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Wrapper from "../scr/components/organism/wrapper";
import { ProjectInMindBanner } from "../scr/components/organism/banners";
import Button from "../scr/components/molecule/button";
import ItemCarousel from "../scr/components/organism/carousel";
import AppFont from "../scr/components/atom/AppFont";
import OurBranchCard from "../scr/components/molecule/OurBrandCard";
import {
  OurBrandArray,
  OurTechnologyCardData,
} from "../scr/components/atom/testingArrays";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import OurTechnologyCard from "../scr/components/molecule/OurTechnologyCard";
import TestimonialCard from "../scr/components/molecule/testimonialCard";
import TestimonialCarousel from "../scr/components/organism/testimonialCarousel";

const Home: NextPage = () => {
  const cssProps =
    "lg:text-[24px] text-[18px]  font-bold  mr-8  cursor-pointer";
  const [activeCards, setActiveCards] = useState(OurTechnologyCardData);
  const handleCardsToggle = (e: string) => {
    const newState = OurTechnologyCardData.filter((ele) => {
      return ele.catogrey === e;
    });
    setActiveCards(newState);
  };
  return (
    <div>
      <Head>
        <title>Ninja Tech</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Banner */}
      <Wrapper contained className={"lg:mt-32 mt-32 "}>
        <div className="relative">
          <img
            src="https://ninjatech.agency/wp-content/themes/ninja/assets/images/about-banner.png"
            alt=""
            width={"100%"}
          />
          <div className="lg:w-[400px] lg:text-[29px]  text-[17px]  text-white lg:absolute right-5 lg:top-10 top-2 bg-App-orange lg:p-10 p-4 ">
            <p className="font-semibold ">NINJATECH CAN</p>
            <p className="font-thin leading-relaxed	">
              ACCOMPLISH YOUR DREAM PROJECT <br />
              <b className="font-semibold leading-relaxed	">& </b>ENHANCE YOUR
            </p>
            <p className="font-semibold leading-relaxed	">
              BRAND QUALITY BUSINESS.
            </p>
            <Link href="services">
              <div className="flex items-center lg:mt-10 mt-5 cursor-pointer">
                <AppFont className="leading-relaxed	">KNOW HOW WE DO IT</AppFont>
                <BsArrowRight className="ml-4" />
              </div>
            </Link>
          </div>
        </div>
        {/* grid 4 */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8  justify-around text-center  bg-[#F5F5F5] p-5">
          <div>
            <p className="font-semibold lg:text-[55px]  text-[32px] ">2</p>
            <p className="lg:text-[24px] text-[16px]   font-medium">offices</p>
          </div>
          <div>
            <p className="font-semibold lg:text-[55px] text-[32px] ">11+</p>
            <p className="lg:text-[24px] text-[16px]   font-medium">
              years of expertise across the industry
            </p>
          </div>
          <div>
            <p className="font-semibold lg:text-[55px] text-[32px] ">275+</p>
            <p className="lg:text-[24px]  text-[16px]  font-medium">
              clients served
            </p>
          </div>
          <div>
            <p className="font-semibold lg:text-[55px] text-[32px] ">200+</p>
            <p className="lg:text-[24px]  text-[16px]  font-medium">
              specialists on board
            </p>
          </div>
        </div>
      </Wrapper>
      {/* Brand Cards Rendering */}
      <Wrapper contained className="text-center lg:p-20  p-10">
        <p className="lg:text-[42px] text-[32px] font-medium">Our Brand</p>
        <p className="lg:text-[18px]  text-[16px]  mt-5">
          Centring the market through our image esteems and advantaging each
          development administration by
        </p>
        <p className="lg:text-[18px] text-[16px] lg:mb-20 mb-10">
          effectively exhibiting resources for your improvement and encouraging
          your business.
        </p>
        <div className="grid lg:grid-cols-3 grid-cols-1  gap-8 ">
          {OurBrandArray.map((items) => {
            return (
              <div>
                <OurBranchCard items={items} />
              </div>
            );
          })}
        </div>
      </Wrapper>
      {/* Get an opportunity */}
      <div className="lg:p-20 p-5 bg-[#FFF5F3]">
        <Wrapper contained>
          <div>
            <div className=" ">
              <div className="grid lg:grid-cols-2 grid-cols-1  items-center">
                <div>
                  <p className="lg:text-[42px] text-[32px]  font-medium">
                    Get An Opportunity To
                  </p>
                  <p className="lg:text-[42px]  text-[32px] font-medium">
                    Know Us More
                  </p>
                  <div className="flex  mt-5 mb-8 ">
                    <p
                      className={`${cssProps} border-b-2 text-App-orange border-App-orange`}
                    >
                      What we Offer
                    </p>
                    <p className={`${cssProps}`}>How We Work</p>
                  </div>
                  <AppFont>
                    Working at Ninja comes with diligence, denoting the
                    result-oriented towards uplift your brand in the industry.
                    Ninja believes in focusing mainly on:
                  </AppFont>
                  <ul className="list-disc lg:text-[18px] text-[15px] font-medium text-[#2A2A2A] ">
                    <li className="mt-6">
                      Delivering high-quality results to the client.
                    </li>
                    <li className="mt-2">
                      Enormous availability to all-inclusive.
                    </li>
                    <li className="mt-2 mb-8">
                      Expanded resources for Development Services.
                    </li>
                  </ul>
                  <Button
                    variant="primary"
                    className="filled"
                    path={"/contact"}
                  >
                    Contact Us
                  </Button>
                </div>
                <img
                  className=""
                  src="https://ninjatech.agency/wp-content/themes/ninja/assets/images/atract-client-img.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
      {/* TechnologyCards */}
      <Wrapper contained className="p-20 ">
        <p className="lg:text-[42px] text-[32px] text-center font-medium text-[#2A2A2A]">
          Technologies we work with
        </p>
        <div className="flex justify-center mt-16">
          <p
            onClick={() => {
              handleCardsToggle("mobile");
            }}
            className="lg:text-[22px]   text-[15px] ml-8 cursor-pointer  font-semibold active text-App-orange"
          >
            Mobile
          </p>
          <p
            onClick={() => {
              handleCardsToggle("frontend");
            }}
            className="lg:text-[22px]  text-[15px] ml-8  cursor-pointer font-semibold #2A2A2A text-[#2A2A2A] "
          >
            Front End
          </p>
          <p
            onClick={() => {
              handleCardsToggle("plateform");
            }}
            className="lg:text-[22px]  text-[15px] ml-8 cursor-pointer font-semibold #2A2A2A text-[#2A2A2A]"
          >
            Platforms
          </p>
          <p
            onClick={() => {
              handleCardsToggle("cms");
            }}
            className="lg:text-[22px]  text-[15px] ml-8 cursor-pointer font-semibold #2A2A2A text-[#2A2A2A]"
          >
            CMS
          </p>
        </div>
        <hr className="mb-10" />
        <div className="grid lg:grid-cols-6 md:grid-cols-2 grid-cols-1 gap-4">
          {activeCards?.map((items) => {
            return <OurTechnologyCard items={items} />;
          })}
        </div>
      </Wrapper>
      {/* carousel  =>*/}
      <div className="bg-[#FFF5F3] lg:pt-20 pt-10  lg:pb-20 pb-10">
        <p className="font-medium text-center lg:text-[42px] text-[32px] lg:mb-20 mb-1 lg:mt-20 mt-10">
          Testimonials & Clients
        </p>
        <Wrapper contained={true} className="lg:mt-20 mt-10  lg:mb-40 mb-20">
          <div>{<TestimonialCarousel />}</div>
          <div className="mt-20">{<ItemCarousel />}</div>
        </Wrapper>
      </div>
      {/* contact banner */}
      <ProjectInMindBanner />
    </div>
  );
};

export default Home;
