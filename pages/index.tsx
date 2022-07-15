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

const Home: NextPage = () => {
  const cssProps = "text-[24px] font-bold  mr-8  cursor-pointer";
  return (
    <div>
      <Head>
        <title>Ninja Tech</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Banner */}
      <Wrapper contained className={"mt-2"}>
        <div className="relative">
          <img
            src="https://ninjatech.agency/wp-content/themes/ninja/assets/images/about-banner.png"
            alt=""
            width={"100%"}
          />
          <div className="w-[400px] text-[29px] text-white absolute right-5 top-10 bg-App-orange p-10">
            <p className="font-semibold ">NINJATECH CAN</p>
            <p className="font-thin leading-relaxed	">
              ACCOMPLISH YOUR DREAM PROJECT <br />
              <b className="font-semibold leading-relaxed	">& </b>ENHANCE YOUR
            </p>
            <p className="font-semibold leading-relaxed	">
              BRAND QUALITY BUSINESS.
            </p>
            <Link href="services">
              <div className="flex items-center mt-10 cursor-pointer">
                <AppFont className="leading-relaxed	">KNOW HOW WE DO IT</AppFont>
                <BsArrowRight className="ml-4" />
              </div>
            </Link>
          </div>
        </div>
        {/* grid 4 */}
        <div className="grid grid-cols-4 justify-around text-center  bg-[#F5F5F5] p-5">
          <div>
            <p className="font-semibold text-[55px]">2</p>
            <p className="text-[24px] font-medium">offices</p>
          </div>
          <div>
            <p className="font-semibold text-[55px]">11+</p>
            <p className="text-[24px] font-medium">
              years of expertise across the industry
            </p>
          </div>
          <div>
            <p className="font-semibold text-[55px]">275+</p>
            <p className="text-[24px] font-medium">clients served</p>
          </div>
          <div>
            <p className="font-semibold text-[55px]">200+</p>
            <p className="text-[24px] font-medium">specialists on board</p>
          </div>
        </div>
      </Wrapper>
      {/* Brand Cards Rendering */}
      <Wrapper contained className="text-center p-20">
        <p className="text-[42px] font-medium">Our Brand</p>
        <p className="text-[18px] mt-5">
          Centring the market through our image esteems and advantaging each
          development administration by
        </p>
        <p className="text-[18px] mb-20">
          effectively exhibiting resources for your improvement and encouraging
          your business.
        </p>
        <div className="grid grid-cols-3 gap-8 ">
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
      <div className="p-20 bg-[#FFF5F3]">
        <Wrapper contained>
          <div>
            <div className=" ">
              <div className="grid grid-cols-[1fr,1fr]  items-center">
                <div>
                  <p className="text-[42px] font-medium">
                    Get An Opportunity To
                  </p>
                  <p className="text-[42px] font-medium">Know Us More;</p>
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
                  <ul className="list-disc text-[18px] font-medium text-[#2A2A2A] ">
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
      <Wrapper contained className="p-20">
        <p className="text-[42px] text-center font-medium text-[#2A2A2A]">
          Technologies we work with
        </p>
        <div className="flex justify-center mt-16">
          <p className="text-[22px]   font-semibold active text-App-orange">
            Mobile
          </p>
          <p className="text-[22px] ml-20  font-semibold #2A2A2A text-[#2A2A2A]">
            Front End
          </p>
          <p className="text-[22px] ml-20 font-semibold #2A2A2A text-[#2A2A2A]">
            Platforms
          </p>
          <p className="text-[22px] ml-20 font-semibold #2A2A2A text-[#2A2A2A]">
            CMS
          </p>
        </div>
        <hr className="mb-10" />
        <div className="grid grid-cols-6 gap-4">
          {OurTechnologyCardData?.map((items) => {
            return <OurTechnologyCard items={items} />;
          })}
        </div>
      </Wrapper>
      {/* carousel  =>*/}
      <Wrapper contained={true} className="mt-20 mb-40">
        <ItemCarousel />
      </Wrapper>
      {/* contact banner */}
      <ProjectInMindBanner />
    </div>
  );
};

export default Home;
