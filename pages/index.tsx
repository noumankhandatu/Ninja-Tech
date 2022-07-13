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

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Ninja Tech</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
            <div className="flex gap-10 justify-between">
              <div className="p-10 pl-20 pr-20 shadow-md rounded-xl">
                <p className="font-bolder text-3xl">2</p>
                <p>small</p>
              </div>
              <div className="p-10  pl-20 pr-20 shadow-lg rounded-xl">
                <p className="font-bolder text-3xl">2</p>
                <p>small</p>
              </div>
              <div className="p-10  pl-20 pr-20 shadow-lg rounded-xl">
                <p className="font-bolder text-3xl">2</p>
                <p>small</p>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
      <div
        style={{ backgroundColor: "#F5F5F5" }}
        className="pt-20 relative pb-72"
      >
        <Wrapper contained={true}>
          <div className="grid grid-cols-[1fr,2fr]">
            <div>
              <p className="text-4xl">CAPABILITIES</p>
              <p className="text-3xl font-bold">Art In Branding.</p>
            </div>
            <div>
              <p>
                Our cheerful spot is in taking care of complicated issues,
                conveying substantial advanced change to make the most worth. We
                have our technique, design, and development groups function as
                an augmentation of our customers' inside terms significantly to
                enhance the client’s experience and deliver the worth to their
                brand.
              </p>
            </div>
          </div>
        </Wrapper>
        <div className="grid grid-cols-3 absolute top-64 gap-10 pt-10 pl-20 pr-20">
          <NumbersCard />
          <NumbersCard />
          <NumbersCard />
        </div>
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
      <div className="bg-gradient-to-t from-cyan-100 to-blue-300 pt-20 pb-20">
        <Wrapper contained={true}>
          <p className="text-3xl pt-4 pb-2 text-center">
            Every project is different, but our methodology remains the same.
          </p>
          <p className="text-1xl pt-5 pb-4 text-center">
            Begins with the expertise of our services we always work according
            to the process we have mentioned below:
          </p>
          <div className="grid grid-cols-3 gap-10 pt-10">
            <NumbersCard />
            <NumbersCard />
            <NumbersCard />
            <NumbersCard />
            <NumbersCard />
            <NumbersCard />
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
            <Button variant="contained" className="filled">
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
      <Button variant={"fixed"}>CONTACT US</Button>
    </div>
  );
};

export default Home;
