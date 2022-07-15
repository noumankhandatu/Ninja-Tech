import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Wrapper from "../scr/components/organism/wrapper";
import { ProjectInMindBanner } from "../scr/components/organism/banners";
import Form from "../scr/components/organism/form";
import NumbersCard from "../scr/components/molecule/NumbersCard";
import InspireBanner from "../scr/components/molecule/InspireBanner";
import Button from "../scr/components/molecule/button";
import ExpectMoreBanner from "../scr/components/organism/expectMoreBanner";
import SmallCard from "../scr/components/molecule/smallCard";
import ItemCarousel from "../scr/components/organism/carousel";
import AppFont from "../scr/components/atom/AppFont";
import OurBranchCard from "../scr/components/molecule/OurBrandCard";
import { OurBrandArray } from "../scr/components/atom/testingArrays";

const Home: NextPage = () => {
  const cssProps = "text-[24px] font-bold  mr-8  cursor-pointer";
  return (
    <div>
      <Head>
        <title>Ninja Tech</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
