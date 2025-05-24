import React from "react";
import ProductHorizontal from "./ProductHorizontal";

import IPhoneBackImg from "@/assets/Pngs/IphoneBack.png";
import IPhoneFullImg from "@/assets/Pngs/14ProFull.png";
import AirPodImg from "@/assets/Pngs/AirPodFull2.png";

const VerticalListing = () => {
	return (
		<div className="flex flex-col justify-between items-start flex-1 gap-6">
			<ProductHorizontal
				title={"iPhone 14"}
				subtitle={"Kapacita: 256 GB, Farba: Silver"}
				img={IPhoneBackImg}
				imgW={107}
				imgH={134}
				discount
			/>
			<hr className="w-full border-gray-300" />
			<ProductHorizontal
				title={"iPhone 14 Pro"}
				subtitle={"Kapacita: 256 GB, Farba: Silver"}
				img={IPhoneFullImg}
				imgW={107}
				imgH={134}
			/>
			<hr className="w-full border-gray-300" />
			<ProductHorizontal
				title={"iPhone 14"}
				subtitle={"Kapacita: 256 GB, Farba: Silver"}
				img={AirPodImg}
				imgW={60}
				imgH={114}
				imgLeftMargin={25}
				imgRightMargin={25}
			/>
		</div>
	);
};

export default VerticalListing;
