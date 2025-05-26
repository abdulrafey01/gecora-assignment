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

const animatingData = [
	{
		img: AirpodImg,
		subtitle: "Apple Airpods 2",
		subtitleColor: "#FFD6E2",
		title: {
			main: "Airpody pre",
			sec: "študentov!",
		},
		color: "#F54E80",
		price: "188",
	},
	{
		img: IPhoneImg,
		subtitle: "iPhone 17 PRO",
		subtitleColor: "#D5CCFF",
		title: {
			main: "Nový iPhone",
			sec: "naskladnený!",
		},
		color: "#6A4EF5",
		price: "899",
	},
];
const SecondColumn = () => {
	const [animating, setAnimating] = React.useState(1);

	useEffect(() => {
		const interval = setInterval(() => {
			setAnimating((prev) => (prev === 1 ? 0 : 1));
		}, 1500);
		return () => clearInterval(interval);
	}, []);
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
				{/* Animating box */}
				<div
					style={{ backgroundColor: animatingData[animating].color }}
					className="flex justify-between gap-6 items-center  mt-14 p-4 relative transition-all duration-300 w-[21rem]"
				>
					<div className="flex flex-col gap-2 items-start">
						<p
							style={{ color: animatingData[animating].subtitleColor }}
							className=" font-semibold text-sm transition-all duration-300"
						>
							{animatingData[animating].subtitle}
						</p>
						<p className="text-white text-xl font-bold transition-all duration-300">
							{animatingData[animating].title.main} <br />{" "}
							{animatingData[animating].title.sec}
						</p>
						<div className="relative flex justify-center items-center mt-2">
							<BurstIcon />
							<p
								className={`absolute font-bold text-3xl -rotate-12 transition-all duration-300`}
							>
								{animatingData[animating].price}€
							</p>
						</div>
					</div>
					<div className="flex h-full items-end relative">
						<div className="relative w-[168px] h-[217px] ">
							<Image
								style={{ opacity: animating === 0 ? 1 : 0 }}
								width={168}
								height={96}
								className="absolute top-4 transition-all duration-200 w-full h-full object-contain"
								src={animatingData[0].img}
								alt="AirPods"
							/>
							<Image
								style={{ opacity: animating === 1 ? 1 : 0 }}
								width={158}
								height={217}
								className="absolute top-10 transition-all duration-200 w-full h-full object-contain"
								src={animatingData[1].img}
								alt="iPhone"
							/>
						</div>
					</div>
					<BigHeart className="absolute  right-0" />
				</div>
			</div>
		</div>
	);
};

export default SecondColumn;
