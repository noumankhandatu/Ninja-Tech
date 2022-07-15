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

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Ninja Tech</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProjectInMindBanner />
    </div>
  );
};

export default Home;
