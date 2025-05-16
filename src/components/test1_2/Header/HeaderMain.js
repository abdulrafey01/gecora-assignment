import Tag from "@/assets/Svgs/Tag";
import React from "react";
import IconComponent from "./IconComponent";
import { Xicon } from "@/assets/Svgs/Xicon";
import { Tool } from "@/assets/Svgs/Tool";
import { MVector } from "@/assets/Svgs/MVector";
import { CVector } from "@/assets/Svgs/CVector";
import Logo from "./Logo";

const HeaderMain = () => {
  return (
    <div className="bg-black flex flex-col px-8 py-2">
      <div className="flex justify-between items-center">
        <IconComponent icon={<Tag />} text="Výpredaj" />
        <IconComponent icon={<Xicon />} text="Novinky" />
        <IconComponent icon={<Tool />} text="MC Servis" />
        {/* Middle logo container */}
        <Logo />
        {/* Premium Partner */}
        <div></div>
        <div></div>
      </div>
      <div></div>
    </div>
  );
};

export default HeaderMain;
