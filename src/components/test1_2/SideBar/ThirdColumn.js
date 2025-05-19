import React, { useEffect } from "react";

import SideBarLink from "./SideBarLink";
import IphoneIcon from "@/assets/Pngs/IphoneIcon.png";
import AirPodIcon from "@/assets/Pngs/AirPodIcon.png";
import MacbookIcon from "@/assets/Pngs/MacBookIcon.png";
import IPadIcon from "@/assets/Pngs/IpodIcon.png";
import WatchIcon from "@/assets/Pngs/WatchIcon.png";
import CableIcon from "@/assets/Pngs/CableIcon.png";
import ConsoleIcon from "@/assets/Pngs/ConsoleIcon.png";
import Smarthome from "@/assets/Pngs/SmartHomeIcon.png";
import PCIcon from "@/assets/Pngs/CpuIcon.png";
import LEDIcon from "@/assets/Pngs/LEDIcon.png";
import Image from "next/image";
import { BurstIcon } from "@/assets/Svgs/BurstIcon";
import AirpodImg from "@/assets/Pngs/AirPodImg.png";
import IPhoneImg from "@/assets/Pngs/IphoneRotatedImg.png";
import { BigHeart } from "@/assets/Svgs/BigHeart";
import ClickLink from "./ClickLink";

const ThirdColumn = () => {
	return (
		<div className="flex-1 flex flex-col py-5 px-10">
			<div className="flex justify-center items-center">
				<p className="text-2xl font-bold text-hover-theme">MacBook</p>
			</div>
			<div className="flex flex-col gap-6 mt-10">
				<SideBarLink
					text={"Zobraziť všetko"}
					textFont={"font-semibold"}
					blackVariant={true}
				/>
				<SideBarLink
					text={"Air"}
					blackVariant={true}
					className={"text-lg"}
					textFont={"font-semibold"}
				/>
				<ClickLink text={"Pro"} blackVariant={true} />
				<ClickLink text={"iMac 24”"} blackVariant={true} />
				<ClickLink text={"Mini"} blackVariant={true} />
				<SideBarLink
					text={"Studio"}
					blackVariant={true}
					className={"text-lg"}
					textFont={"font-semibold"}
				/>
				<ClickLink text={"Mac Pro"} blackVariant={true} />
				<ClickLink text={"Displeje"} blackVariant={true} />
				<ClickLink text={"Doplnky pre Mac"} blackVariant={true} />
			</div>
		</div>
	);
};

export default ThirdColumn;
