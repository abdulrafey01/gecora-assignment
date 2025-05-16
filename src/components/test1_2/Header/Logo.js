import { CVector } from "@/assets/Svgs/CVector";
import { AIcon } from "@/assets/Svgs/MobileCareText/AIcon";
import { BIcon } from "@/assets/Svgs/MobileCareText/BIcon";
import { CIcon } from "@/assets/Svgs/MobileCareText/CIcon";
import { EIcon } from "@/assets/Svgs/MobileCareText/EIcon";
import { IIcon } from "@/assets/Svgs/MobileCareText/IIcon";
import { LIcon } from "@/assets/Svgs/MobileCareText/LIcon";
import { MIcon } from "@/assets/Svgs/MobileCareText/MIcon";
import { OIcon } from "@/assets/Svgs/MobileCareText/OIcon";
import { RIcon } from "@/assets/Svgs/MobileCareText/RIcon";
import { ESmallIcon } from "@/assets/Svgs/MobileCareText/SmallEIcon";
import { MVector } from "@/assets/Svgs/MVector";
import React from "react";

const Logo = () => {
  return (
    <div className="flex jusctify-center items-center gap-2">
      {/* MC */}
      <div className="flex flex-col justify-center items-center gap-[2px]">
        <MVector />
        <CVector className="mr-[1px]" />
      </div>
      {/* Mobicare text */}
      <div className="flex justify-center items-center ">
        <MIcon className="mb-[1px]" />
        <OIcon />
        <BIcon className="mb-[5px]" />
        <IIcon className="mb-[5px]" />
        <LIcon className="ml-[2px] mb-[5px]" />
        <EIcon />
        <CIcon />
        <AIcon />
        <RIcon className="mb-[1px]" />
        <ESmallIcon />
      </div>
    </div>
  );
};

export default Logo;
