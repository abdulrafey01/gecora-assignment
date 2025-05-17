import React from "react";
import BlackOverlay from "../Common/BlackOverlay";
import Logo from "../Header/Logo";
import { CrossIcon } from "@/assets/Svgs/CrossIcon";
import SideBarLink from "./SideBarLink";

const SideBar = () => {
	return (
		<BlackOverlay>
			<div className="w-[80%] h-full bg-white flex">
				{/* First Column */}
				<div className="flex-1 bg-hover-theme flex flex-col py-5 px-10">
					<div className="flex flex-row justify-between items-center">
						<Logo />
						<div className="w-10 h-10 border-black border-[2.5px] flex cursor-pointer hover:bg-[#7055f4] active:bg-click-theme justify-center items-center">
							<CrossIcon />
						</div>
					</div>
					<div className="flex flex-col gap-4 mt-10">
						<SideBarLink />
					</div>
				</div>
				{/* Second Column */}
				<div className="flex-1"></div>
				{/* Third Column */}
				<div className="flex-1"></div>
			</div>
		</BlackOverlay>
	);
};

export default SideBar;
