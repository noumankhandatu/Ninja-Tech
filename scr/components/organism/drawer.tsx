import React from "react";
import Link from "next/link";
import { headerEle } from "./header";
type DrawerProps = {
  setActiveLink: any;
  activeLink: any;
};
const Drawer = ({ setActiveLink, activeLink }: DrawerProps) => {
  return (
    <div className="bg-white shadow-[0_3px_9px_rgba(0,0,0,0.2)] p-2 absolute top-10 right-10">
      <div className="lg:flex w-screen items-center">
        {headerEle?.map((items: any, id: any) => {
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
  );
};

export default Drawer;
