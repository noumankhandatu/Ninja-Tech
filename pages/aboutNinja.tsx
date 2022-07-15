import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Wrapper from "../scr/components/organism/wrapper";
import { ProjectInMindBanner } from "../scr/components/organism/banners";
import Form from "../scr/components/organism/form";
import ArtCard from "../scr/components/molecule/ArtCard";
import InspireBanner from "../scr/components/molecule/InspireBanner";
import Button from "../scr/components/molecule/button";
import ExpectMoreBanner from "../scr/components/organism/expectMoreBanner";
import SmallCard from "../scr/components/molecule/smallCard";
import AppFont from "../scr/components/atom/AppFont";
import {
  ArtCardData,
  AbsArtCardData,
} from "../scr/components/atom/testingArrays";

const AboutNinja: NextPage = () => {
  return (
    <div>
      <ExpectMoreBanner
        titleone="expect more "
        titletwo="from your agency "
        description="  NinjaTech delivers more than just a web agency. You can expect some
            very useful piece of advice every now awareness. and then to improve
            your digital presence and helps you make bold statement by improving
            your brand"
      />
      {/* small three boxes */}
      <Wrapper contained={true}>
        <div className="grid grid-cols-2  pt-20 pb-20">
          <div>
            <Image
              src="/intro.png"
              width={600}
              height={600}
              alt="intro pic"
            ></Image>
          </div>
          <div>
            <p className="text-3xl font-bolder ">About NinjaTech</p>
            <p className="pt-10 pb-10 ">
              NinjaTech is a Software Development and Solutions Agency, with a
              prime goal of executing websites and software applications for
              clients. We have a top to bottom comprehension of the interaction,
              from the underlying idea to perusing and coding, to testing and,
              discharge, and the iterative refinement measure that proceeds well
              past the dispatch date.
            </p>
            <p className=" pb-5 ">
              We are all about development, regardless of whether that is
              versatile applications and website infrastructure to deal with the
              requests of our clients.
            </p>
            <div className="flex gap-10 justify-between mt-20">
              <SmallCard numbers={"2"} tag={"offices"} />
              <SmallCard
                numbers={"11+"}
                tag={"years of expertise across the industry"}
              />
              <SmallCard numbers={"275+"} tag={"clients served"} />
            </div>
          </div>
        </div>
      </Wrapper>
      {/* pos absolute cards */}
      <div
        style={{ backgroundColor: "#F5F5F5" }}
        className="pt-20 relative pb-72"
      >
        <Wrapper contained={true}>
          <div className="grid grid-cols-[1fr,2fr] items-center">
            <div>
              <p className="text-[42px] font-light">CAPABILITIES</p>
              <p className="text-[42px] font-semibold">Art In Branding.</p>
            </div>
            <div>
              <AppFont className="leading-loose tracking-wide font-[500]		text-[#2A2A2A]		">
                Our cheerful spot is in taking care of complicated issues,
                conveying substantial advanced change to make the most worth. We
                have our technique, design, and development groups function as
                an augmentation of our customers' inside terms significantly to
                enhance the client’s experience and deliver the worth to their
                brand.
              </AppFont>
            </div>
          </div>
        </Wrapper>
        <Wrapper
          contained
          className="grid grid-cols-3 absolute top-64 gap-10 pt-10 pl-20 pr-20"
        >
          {AbsArtCardData?.map((items) => {
            return <ArtCard items={items} />;
          })}
        </Wrapper>
      </div>
      <div className="pt-72 pb-32">
        <Wrapper contained={true}>
          <div className="grid grid-cols-[1fr,1fr] gap-10">
            <div>
              <p className="text-5xl pb-5">Our Name</p>
              <p className="text-4xl font-bold pb-10">Inspires Our Values.</p>
              <div>
                <InspireBanner
                  title={"Courage."}
                  description={
                    "We are leading in the market for a decade for our transparency and engaging services and with the courage of taking challenges we are always been on the path of growth."
                  }
                />
                <InspireBanner
                  title={"Intelligence."}
                  description={
                    "In this era, digitalization is setting up its benchmark with growth on daily basis in the industry, and to reach that benchmark we have a team of great developers & designers with extensive skills and experience in their particular platform."
                  }
                />
                <InspireBanner
                  title={"Creativity."}
                  description={
                    "We are not just an agency that will provide parrot reading services, but we are more bound to our creative approach on every project we work on. Our work process flows based on creativity."
                  }
                />
              </div>
            </div>
            <div>
              <Image src={"/ourvalues.png"} width={600} height={600}></Image>
            </div>
          </div>
        </Wrapper>
      </div>
      {/* bg-gradient */}
      <div className=" bg-gradient-to-t from-[#fffbef] to-[#e2f3ff] pt-20 pb-20">
        <Wrapper contained={true}>
          <p className="text-3xl pt-4 pb-2 text-center">
            Every project is different, but our methodology remains the same.
          </p>
          <p className="text-1xl pt-5 pb-4 text-center">
            Begins with the expertise of our services we always work according
            to the process we have mentioned below:
          </p>
          <div className="grid grid-cols-3 gap-10 pt-10">
            {ArtCardData?.map((items) => {
              return <ArtCard items={items} />;
            })}
          </div>
        </Wrapper>
      </div>

      {/* join team button */}
      <div className="relative">
        <div className="bg-[url('/carrier.jpg')]  h-96 text-center pt-80 pb-60 bg-no-repeat bg-center p-10"></div>
        <Wrapper
          contained={true}
          className=" absolute top-32 right-0 left-0 text-center  "
        >
          <p className="text-4xl pt-10 ">Jump-start your career with</p>
          <p className="text-4xl pb-10">NinjaTech</p>
          <p className="text-2xl">
            If you’re passionate about Internet marketing, web
          </p>
          <p className="text-2xl">
            design, or web development, we want to hear from you!
          </p>
          <div className="flex mt-12 justify-center">
            <Button path="/contact" variant="contained" className="filled">
              Join Our Team !
            </Button>
          </div>
        </Wrapper>
      </div>
      {/* // form */}
      <Form />
      {/* pink banner */}
      <ProjectInMindBanner />
      {/* floating right button */}
    </div>
  );
};

export default AboutNinja;
