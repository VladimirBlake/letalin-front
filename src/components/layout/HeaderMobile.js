"use client";
import Image from "next/image";
import Hamburger from "hamburger-react";

import PhoneIcon from "@/images/phone.svg";
import Logo from "@/images/logo.png";
import { useState } from "react";

export default function HeaderMobile() {
  const [isHamburgerOpen, setHamburgerOpen] = useState(false);
  return (
    <div className="h-16 bg-white px-4 flex justify-between items-center">
      <Image src={Logo} alt="" className="w-[45px] h-auto" />
      <div className="flex items-center">
        <div className="w-9 h-9 bg-green rounded-full flex items-center justify-center">
          <Image src={PhoneIcon} alt="" className="w-[22px] h-[22px]" />
        </div>
        <a className="ml-2" href="#">
          8 (495)-105-66-76
        </a>
      </div>
      <Hamburger
        toggled={isHamburgerOpen}
        toggle={setHamburgerOpen}
        color="#252525"
        rounded
      />
    </div>
  );
}
