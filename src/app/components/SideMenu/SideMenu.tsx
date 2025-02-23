"use client";

import { Angkor } from "next/font/google";
import { navLinks } from "../../constants/navLinks";
import { Rowdies } from "next/font/google";
import Link from "next/link";

const rowdies = Rowdies({
  subsets: ["latin"],
  weight: "400",
});


interface SideMenuProps {
  open: boolean;
}

export default function SideMenu({ open }: SideMenuProps) {

  return (
    <section
      className={`w-80 fixed top-24 left-0 h-screen bg-white transition-transform duration-300 
        ${open ? "translate-x-0" : "-translate-x-full"}
        
      `}
    >
    <nav className="">
      <ul className="flex flex-col ">
        {navLinks.map((item, index) => (
          <li key={index} className="border-b text-lg border-black pl-4 h-12 flex items-center">
            <Link
              href={item.href}
              className={` text-black text-xl ${rowdies.className}`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
    </section>
  );
}