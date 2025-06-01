"use client";
import { RightArrowIcon } from "@/assets/Svgs/RightArrowIcon";
import React from "react";
const LinkType3 = ({ text, className, select = false, icon = () => {} }) => {
  const [selected, setSelected] = React.useState(select);
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setSelected(!selected)}
      className={`flex justify-between items-center cursor-pointer relative p-2 group ${
        !selected && "hover:bg-hover-theme/10"
      }  transition-all duration-300 ${className}`}
    >
      <div className="flex gap-2 items-center">
        {icon({ hovered })}
        <div className="flex flex-col justify-center items-center">
          <p
            className={` select-none  transition-all duration-300 font-bold ${
              selected ? "text-click-theme" : "group-hover:text-hover-theme "
            }`}
          >
            {text}
          </p>
          <div
            className={`w-full  relative bottom-[2px] transition-all duration-100`}
          ></div>
        </div>
      </div>

      <>
        <div
          className={`w-8 h-8 flex justify-center items-center  absolute right-0 transition-all duration-200`}
        ></div>
        <RightArrowIcon
          className={`w-5 h-5 transition-all duration-200 relative right-[10px]`}
        />
      </>
    </div>
  );
};
export default LinkType3;
