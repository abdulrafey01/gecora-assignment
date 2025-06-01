import React, { useEffect } from "react";

const ClickLink = ({ blackVariant, text, textFont }) => {
  const [selected, setSelected] = React.useState(false);
  const [hovered, setHovered] = React.useState(false);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSelected(false);
    }, 300);

    () => clearTimeout(timeOut);
  }, [selected]);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`flex justify-between items-center cursor-pointer relative`}
    >
      <div className="flex flex-col justify-center items-center">
        <p
          onMouseDown={() => setSelected(true)}
          className={` select-none  transition-all text-lg duration-200
                        ${
                          hovered && !selected
                            ? blackVariant
                              ? "font-bold"
                              : "font-semibold"
                            : "font-normal"
                        }
                            ${
                              blackVariant ? "text-black" : "text-light-purple"
                            } `}
        >
          {text}
        </p>
        <div
          className={`w-full  ${
            blackVariant ? "bg-black h-[1px]" : "bg-light-purple h-[0.3px]"
          } relative bottom-[2px] transition-all duration-100
        ${hovered && !selected ? "opacity-100" : "opacity-0"}`}
        ></div>
      </div>
    </div>
  );
};

export default ClickLink;
