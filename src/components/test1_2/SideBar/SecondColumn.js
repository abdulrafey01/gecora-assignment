import React from "react";

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
const SecondColumn = () => {
	return (
		<div className="flex-1 flex flex-col py-5 px-10">
			<div className="flex justify-center items-center">
				<p className="text-2xl font-bold text-hover-theme">Všetky kategórie</p>
			</div>
			<div className="flex flex-col gap-6 mt-10">
				<SideBarLink
					icon={() => <Image src={IphoneIcon} alt="Iphone" />}
					text={"iPhone"}
					textFont={"font-semibold"}
					blackVariant={true}
				/>
				<SideBarLink
					icon={() => <Image className="ml-2" src={AirPodIcon} alt="Iphone" />}
					text={"Apple AirPods"}
					textFont={"font-semibold"}
					blackVariant={true}
				/>
				<SideBarLink
					icon={() => <Image src={MacbookIcon} alt="Iphone" />}
					text={"Macbook"}
					textFont={"font-semibold"}
					blackVariant={true}
				/>
				<SideBarLink
					icon={() => <Image src={IPadIcon} alt="IPadIcon" />}
					text={"IPad"}
					textFont={"font-semibold"}
					blackVariant={true}
				/>
				<SideBarLink
					icon={() => <Image src={WatchIcon} alt="Watch" />}
					text={"SmartHome"}
					textFont={"font-semibold"}
					blackVariant={true}
				/>
				<SideBarLink
					icon={() => <Image src={CableIcon} alt="Watch" />}
					text={"Príslušenstvo"}
					textFont={"font-semibold"}
					blackVariant={true}
				/>
				<SideBarLink
					icon={() => <Image src={ConsoleIcon} alt="ConsoleIcon" />}
					text={"Herná zóna"}
					textFont={"font-semibold"}
					blackVariant={true}
				/>
				<SideBarLink
					icon={() => <Image src={Smarthome} alt="Watch" />}
					text={"Smarthome"}
					textFont={"font-semibold"}
					blackVariant={true}
				/>
				<SideBarLink
					icon={() => <Image src={PCIcon} alt="PC" />}
					text={"PC"}
					textFont={"font-semibold"}
					blackVariant={true}
				/>
				<SideBarLink
					icon={() => <Image src={LEDIcon} alt="Elektronika" />}
					text={"Elektronika"}
					textFont={"font-semibold"}
					blackVariant={true}
				/>
			</div>
		</div>
	);
};

export default SecondColumn;
