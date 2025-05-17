import { SearchIcon } from "@/assets/Svgs/SearchIcon";
import React from "react";

const HeaderInput = () => {
  return (
    <div className="py-3 px-4 bg-white flex items-center gap-2">
      <SearchIcon className="w-5 h-5" />
      <input
        type="text"
        placeholder="Zadajte názov produktu"
        className="w-full  placeholder:text-gray-400 font-medium outline-none focus-within:placeholder:text-black transition-all"
      />
    </div>
  );
};

export default HeaderInput;
