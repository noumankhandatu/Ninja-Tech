import React, { useState } from "react";
import Image from "next/image";
import Wrapper from "./wrapper";
import Link from "next/link";
import { CgMenuLeft } from "react-icons/cg";
import Button from "../molecule/button";
import Drawer from "./drawer";
export const headerEle = [
  {
    title: "About ninja",
    path: "/aboutNinja",
    id: 0,
  },
  {
    title: "Services",
    path: "/services",
    id: 1,
  },
  {
    title: "Values and Purpose ",
    path: "/valueAndPurpose",
    id: 2,
  },
  {
    title: "Branch",
    path: "/branch",
    id: 3,
  },
  {
    title: "Portfolio",
    path: "/portfolio",
    id: 4,
  },
];
const Header = () => {
  const [activeLink, setActiveLink] = useState<number>(8);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  return (
    <div className="pb-20">
      <Wrapper
        contained={true}
        className="flex shadow  fixed ease-in-out duration-1000 bg-white z-10 top-0 left-0 right-0 justify-between items-center p-5"
      >
        <div className="flex items-center">
          <Link href="/">
            <Image
              className="cursor-pointer"
              src="/logo.png"
              alt="Picture of the author"
              width={139}
              height={57}
            ></Image>
          </Link>
          <div className="lg:flex  hidden ml-14 items-center">
            {headerEle?.map((items, id) => {
              return (
                <Link href={`${items.path}`}>
                  <p
                    onClick={() => setActiveLink(id)}
                    className={`${
                      items.id == activeLink ? "active" : "unactive"
                    } ml-6 p-1 text-[17px] font-medium cursor-pointer hover:border-b-[#ff5b2e] ease-in-out duration-700`}
                  >
                    {items.title}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="relative">
          <Button variant="primary" path="/services" className="lg:flex hidden">
            Lets Talk
          </Button>
          <CgMenuLeft
            onClick={() => [setDrawerOpen(!drawerOpen)]}
            className="w-8 h-8 lg:hidden block"
          />
          {drawerOpen ? (
            <Drawer setActiveLink={setActiveLink} activeLink={activeLink} />
          ) : null}
        </div>
      </Wrapper>
    </div>
  );
};

export default Header;
