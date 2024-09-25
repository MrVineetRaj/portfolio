"use client";
import { nav_links } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="sticky top-0 w-auto min-w-[280px] bg-gradient-to-t from-gray-900 to-gray-800 shadow-cover z-40 px-4  md:px-16  py-4 rounded-[15px] border-2 border-violet-300 mt-4">
      <nav className="flex gap-5 justify-around items-center">
        {nav_links.map((link, index) => (
          <li className="list-none flex gap-5 items-center " key={index}>
            <Link
              href={link.href}
              className="font-semibold text-gray-100 hover:text-violet-300 "
            >
              {index === 2 ? (
                <Image
                  src="/home.svg"
                  alt="logo"
                  width={30}
                  height={30}
                  className=""
                />
              ) : (
                <span className="">{link.title}</span>
              )}
            </Link>

            {index < nav_links.length - 1 && (
              <span className="text-violet-400"> • </span>
            )}
          </li>
        ))}
      </nav>
    </div>
  );
};

export default NavBar;
