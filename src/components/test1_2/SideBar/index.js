"use client";
import React from "react";
import BlackOverlay from "../Common/BlackOverlay";
import FirstColumn from "./FirstColumn";
import SecondColumn from "./SecondColumn";
import ThirdColumn from "./ThirdColumn";

const SideBar = () => {
	return (
		<BlackOverlay>
			<div className="w-[80%] min-h-full bg-white flex">
				<FirstColumn />
				<SecondColumn />
				<div className="w-[0.8px] min-h-full bg-[#e6e6e6]"></div>
				<ThirdColumn />
			</div>
		</BlackOverlay>
	);
};

export default SideBar;
