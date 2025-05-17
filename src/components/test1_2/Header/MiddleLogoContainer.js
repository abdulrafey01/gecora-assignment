import React from "react";
import Logo from "./Logo";
import { AppleIcon } from "@/assets/Svgs/Apple";

const MiddleLogoContainer = () => {
  return (
    <div className="flex flex-1 justify-center items-center gap-8 ">
      <Logo />
      <div className="bg-black flex justify-center items-center gap-1 border-white border-[1.3px] rounded-md py-1 pb-2 px-2 ">
        <AppleIcon className="w-5 h-5" />
        <p className="text-white font-medium text-[8px] leading-[8px] mt-[5px]">
          Premium <p>Partner</p>
        </p>
      </div>
    </div>
  );
};

export default MiddleLogoContainer;
