"use client";
import React, { useState, useEffect } from "react";
import BlackOverlay from "../Common/BlackOverlay";
import FirstColumn from "./FirstColumn";
import SecondColumn from "./SecondColumn";
import ThirdColumn from "./ThirdColumn";

const SideBar = ({ showSideBar, setShowSideBar }) => {
	const [isAnimating, setIsAnimating] = useState(false);

	useEffect(() => {
		if (showSideBar) {
			setIsAnimating(true);
		} else {
			const timer = setTimeout(() => {
				setIsAnimating(false);
			}, 900);
			return () => clearTimeout(timer);
		}
	}, [showSideBar]);

	return (
		isAnimating && (
			<BlackOverlay>
				<div
					className={`w-[80%] min-h-full bg-white flex ${
						showSideBar ? "animate-moveRight" : "animate-moveLeft"
					}`}
				>
					<FirstColumn setShowSideBar={setShowSideBar} />
					<SecondColumn />
					<div className="w-[0.8px] min-h-full bg-[#e6e6e6]"></div>
					<ThirdColumn />
				</div>
			</BlackOverlay>
		)
	);
};

export default SideBar;
