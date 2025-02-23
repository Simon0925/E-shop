'use client'

import SideMenu from "@/app/components/SideMenu/SideMenu";
import { useState } from "react";

export default function BurgerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(!open)}
        className="w-[30px] h-[25px] relative cursor-pointer flex flex-col justify-between"
      >
        <span
          className={`w-full h-[3px] bg-black transition-all duration-300 ${open ? 'rotate-45 translate-y-[11px]' : 'translate-y-0'}`}
        ></span>
        <span
          className={`w-full h-[3px] bg-black transition-all duration-300 ${open ? 'opacity-0' : 'opacity-100'}`}
        ></span>
        <span
          className={`w-full h-[3px] bg-black transition-all duration-300 ${open ? '-rotate-45 -translate-y-[11px]' : 'translate-y-0'}`}
        ></span>
      </div>
      <SideMenu open={open} />
    </>
  );
}
