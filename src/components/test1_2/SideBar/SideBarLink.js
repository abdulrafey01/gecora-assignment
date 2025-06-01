"use client";
import { RightArrowIcon } from "@/assets/Svgs/RightArrowIcon";
import React from "react";
const SideBarLink = ({
  text,
  textFont,
  className,
  arrow = true,
  select = false,
  icon = () => {},
  tagText,
  tagColor,
  tagTextColor,
  blackVariant = false,
}) => {
  const [selected, setSelected] = React.useState(select);
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setSelected(!selected)}
      className={`flex justify-between items-center cursor-pointer relative ${className}`}
    >
      <div className="flex gap-2 items-center">
        {icon({ hovered })}
        <div className="flex flex-col justify-center items-center">
          <p
            className={` select-none  transition-all duration-300 ${
              blackVariant && selected
                ? "font-bold"
                : textFont
                ? textFont
                : "font-bold"
            }
						${
              selected
                ? blackVariant
                  ? "text-black"
                  : "text-white"
                : blackVariant
                ? "text-black"
                : "text-light-purple"
            } `}
          >
            {text}
          </p>
          <div
            className={`w-full  ${
              blackVariant ? "bg-black h-[1px]" : "bg-light-purple h-[0.3px]"
            } relative bottom-[2px] transition-all duration-300
						${hovered && !selected ? "opacity-100" : "opacity-0"}`}
          ></div>
        </div>
        <div
          style={{ backgroundColor: tagColor, color: tagTextColor }}
          className={`py-1 px-2 text-xs font-semibold select-none`}
        >
          {tagText}
        </div>
      </div>
      {arrow && (
        <>
          <div
            className={`w-8 h-8 flex justify-center items-center ${
              blackVariant ? "bg-black" : "bg-white"
            } absolute right-0
					transition-all duration-200
					${selected ? "opacity-100 scale-100" : "opacity-0 scale-75"}
				`}
          ></div>
          <RightArrowIcon
            className={`w-3 h-3 transition-all duration-200
					${hovered && !selected && (blackVariant ? "fill-hover-theme" : "fill-white")}
					${
            selected
              ? blackVariant
                ? "fill-white scale-150"
                : "fill-hover-theme scale-150"
              : blackVariant
              ? "fill-gray-500 scale-100"
              : "fill-light-purple scale-100"
          }
					relative right-[10px]`}
          />
        </>
      )}
    </div>
  );
};

export default SideBarLink;
