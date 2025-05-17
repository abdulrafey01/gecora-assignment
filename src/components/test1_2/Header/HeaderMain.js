import Tag from "@/assets/Svgs/Tag";
import React from "react";
import IconComponent from "./IconComponent";
import { Xicon } from "@/assets/Svgs/Xicon";
import { Tool } from "@/assets/Svgs/Tool";
import { ProfileIcon } from "@/assets/Svgs/ProfileIcon";
import { HeartIcon } from "@/assets/Svgs/HeartIcon";
import { CartIcon } from "@/assets/Svgs/CartIcon";
import MiddleLogoContainer from "./MiddleLogoContainer";
import { BurgerIcon } from "@/assets/Svgs/BurgerIcon";
import HeaderInput from "./HeaderInput";

const HeaderMain = () => {
  return (
    <div className="bg-black flex flex-col gap-8 px-8 pt-8 pb-4">
      <div className="flex justify-between items-center">
        <div className="flex flex-1 items-center gap-12 ml-4">
          <IconComponent icon={<Tag />} text="Výpredaj" />
          <IconComponent icon={<Xicon />} text="Novinky" />
          <IconComponent icon={<Tool />} text="MC Servis" />
        </div>
        <MiddleLogoContainer />
        <div className="flex flex-1 justify-end items-center gap-4 ">
          <ProfileIcon />
          <HeartIcon />
          <CartIcon />
        </div>
      </div>
      <div className="flex gap-12 items-center justify-between w-full">
        {/* Links */}
        <div className="flex gap-12 items-center text-sm">
          <div className="py-2 px-6 bg-white flex gap-2 items-center hover:bg-hover-theme group transition-all cursor-pointer">
            <p className="font-bold group-hover:text-white ">
              Všetky kategórie
            </p>
            <BurgerIcon />
          </div>
          <p className="text-white font-medium hover:text-hover-theme cursor-pointer transition-all ">
            iPhone
          </p>
          <p className="text-white font-medium hover:text-hover-theme cursor-pointer transition-all ">
            iPad
          </p>
          <p className="text-white font-medium hover:text-hover-theme cursor-pointer transition-all ">
            MacBook
          </p>
          <p className="text-white font-medium hover:text-hover-theme cursor-pointer transition-all ">
            Apple Airpods
          </p>
          <p className="text-white font-medium hover:text-hover-theme cursor-pointer transition-all ">
            Smarthome
          </p>
          <p className="text-white font-medium hover:text-hover-theme cursor-pointer transition-all ">
            Príslušenstvo
          </p>
        </div>
        {/* Input */}
        <HeaderInput />
      </div>
    </div>
  );
};

export default HeaderMain;
