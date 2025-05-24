import { SearchIcon } from "@/assets/Svgs/SearchIcon";
import React from "react";

const Input = ({ placeholder, icon }) => {
	return (
		<div className="py-3 px-4 bg-white flex items-center gap-2 border-[#f5f5f5] border-2 focus-within:border-black hover:border-black">
			{icon && <SearchIcon className="w-5 h-5" />}
			<input
				type="text"
				placeholder={placeholder}
				className="w-full  placeholder:text-gray-400 font-medium outline-none focus-within:placeholder:text-black transition-all "
			/>
		</div>
	);
};

export default Input;
