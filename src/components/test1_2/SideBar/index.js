"use client";
import React from "react";
import BlackOverlay from "../Common/BlackOverlay";
import FirstColumn from "./FirstColumn";
import SecondColumn from "./SecondColumn";

const SideBar = () => {
	return (
		<BlackOverlay>
			<div className="w-[80%] min-h-full bg-white flex ">
				<FirstColumn />
				<SecondColumn />
				<div className="flex-1"></div>
			</div>
		</BlackOverlay>
	);
};

export default SideBar;
