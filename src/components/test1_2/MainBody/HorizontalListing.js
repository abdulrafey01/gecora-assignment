import { StarIcon } from "@/assets/Svgs/StarIcon";
import React from "react";
import ProductVertical from "./ProductVertical";

const HorizontalListing = () => {
	return (
		<div className="flex flex-col gap-6 items-start w-full">
			<div className="w-full flex justify-start items-center px-8 py-4 gap-4">
				<div>
					<StarIcon />
				</div>
				<p className="text-4xl font-bold">Mohlo by vás zaujímať</p>
			</div>
			<div className="flex justify-evenly items-center w-full">
				<ProductVertical />
			</div>
		</div>
	);
};

export default HorizontalListing;
