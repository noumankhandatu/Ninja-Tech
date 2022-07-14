import React, { useState } from "react";
import Image from "next/image";
import Wrapper from "./wrapper";
import Link from "next/link";
import Button from "../molecule/button";
const Header = () => {
  const [activeLink, setActiveLink] = useState<number>(8);
  const headerEle = [
    {
      title: "About ninja",
      path: "/",
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
  return (
    <Wrapper contained={true} className="flex justify-between items-center p-5">
      <div className="flex items-center">
        <Image
          src="/logo.png"
          alt="Picture of the author"
          width={139}
          height={57}
        ></Image>
        <div className="flex ml-14  items-center">
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
      <Button variant="primary" path="/services">
        Lets Talk
      </Button>
    </Wrapper>
  );
};

export default Header;
