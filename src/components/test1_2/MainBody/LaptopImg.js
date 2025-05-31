import React from "react";

import Laptop from "@/assets/Pngs/MacBook.png";
import LaptopWallpaper from "@/assets/Pngs/Mac-Wallpaper.png";
import Image from "next/image";

const LaptopImg = () => {
	return (
		<div className="relative">
			<Image width={370} height={370} src={Laptop} alt="iphone" />
			<Image
				width={213}
				height={132}
				src={LaptopWallpaper}
				alt="iphone"
				className="absolute top-[4px]  right-[34px] w-[156px] h-[164px]"
			/>
		</div>
	);
};

export default LaptopImg;
