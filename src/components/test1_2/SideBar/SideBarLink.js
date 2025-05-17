"use client";
import { RightArrowIcon } from "@/assets/Svgs/RightArrowIcon";
import React from "react";

const SideBarLink = () => {
	const [selected, setSelected] = React.useState(false);
	return (
		<div
			onClick={() => setSelected(!selected)}
			className="flex justify-between items-center cursor-pointer"
		>
			<p
				className={` font-bold select-none ${
					!selected ? "text-white" : "text-light-purple"
				}`}
			>
				Všetky kategórie
			</p>
			<div className="w-10 h-10 flex justify-center items-center bg-white">
				<RightArrowIcon />
			</div>
		</div>
	);
};

export default SideBarLink;
