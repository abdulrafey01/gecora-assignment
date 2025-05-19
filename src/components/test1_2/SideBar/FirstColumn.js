import React from "react";
import SideBarLink from "./SideBarLink";
import Logo from "../Header/Logo";
import { CrossIcon } from "@/assets/Svgs/CrossIcon";
import { Xicon } from "@/assets/Svgs/Xicon";
import Tag from "@/assets/Svgs/Tag";
import { HeartIcon } from "@/assets/Svgs/HeartIcon";
import { FbIcon } from "@/assets/Svgs/FbIcon";
import { InstaIcon } from "@/assets/Svgs/InstaIcon";
import { YtIcon } from "@/assets/Svgs/YtIcon";
import { WAIcon } from "@/assets/Svgs/WAIcon";
import { TTIcon } from "@/assets/Svgs/TTIcon";
import ClickLink from "./ClickLink";
const FirstColumn = () => {
	return (
		<div className="flex-1 bg-hover-theme flex flex-col py-5 px-10">
			<div className="flex flex-row justify-between items-center">
				<Logo />
				<div className="w-10 h-10 border-black border-[2.5px] flex cursor-pointer hover:bg-[#7055f4] active:bg-click-theme justify-center items-center">
					<CrossIcon />
				</div>
			</div>
			<div className="flex flex-col gap-6 mt-10">
				<SideBarLink text={"Všetky kategórie"} select={true} />
				<SideBarLink text={"iPhone"} />
				<SideBarLink text={"Apple AirPods"} />
				<SideBarLink text={"Macbook"} />
				<SideBarLink text={"iPad"} />
				<SideBarLink text={"Apple Watch"} />
				<SideBarLink text={"Príslušenstvo"} />
				<hr className="border-gray-400 opacity-50 mb-2" />
				<SideBarLink text={"Najpredávanejšie"} />
				<SideBarLink
					text={"Najnovšie"}
					icon={({ hovered }) => <Xicon fill={hovered ? "black" : "white"} />}
					tagText={"Novinka"}
					tagColor={"#D0FF16"}
					arrow={false}
				/>
				<SideBarLink
					text={"Zľavy"}
					icon={({ hovered }) => <Tag fill={hovered ? "black" : "white"} />}
					tagText={"Výpredaj"}
					tagColor={"#F54E80"}
					tagTextColor={"white"}
					arrow={false}
				/>
				<hr className="border-gray-400 opacity-50 mb-2" />
				<ClickLink text={"Kontakt"} />
				<ClickLink text={"Často kladené otázky"} />
				<ClickLink text={"Blog"} />
				<hr className="border-gray-400 opacity-50 mb-2" />
				<SideBarLink
					text={"Obľúbené produkty"}
					icon={({ hovered }) => (
						<HeartIcon fill={hovered ? "black" : "white"} />
					)}
					arrow={false}
				/>
				<hr className="border-gray-400 opacity-50 mb-2" />
				<p className="text-white font-semibold">Sledujte nás</p>
				<div className="flex justify-start gap-2 items-center">
					<FbIcon />
					<InstaIcon />
					<YtIcon />
					<WAIcon />
					<TTIcon />
				</div>
			</div>
		</div>
	);
};

export default FirstColumn;
