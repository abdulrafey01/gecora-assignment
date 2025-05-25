import Image from "next/image";
import React from "react";
import { HeartIcon } from "@/assets/Svgs/HeartIcon";
import { DustBinIcon } from "@/assets/Svgs/DustBin";
import { DownArrowIcon } from "@/assets/Svgs/DownArrowIcon";

const ProductHorizontal = ({
	title,
	subtitle,
	img,
	discount = false,
	imgW,
	imgH,
	imgLeftMargin = 0,
	imgRightMargin = 0,
}) => {
	return (
		<div className="flex justify-between items-center w-full select-none ">
			<div className="flex gap-8 items-center">
				<Image
					width={imgW}
					height={imgH}
					src={img}
					alt="Iphone"
					style={{ marginLeft: imgLeftMargin, marginRight: imgRightMargin }}
				/>
				<div className="flex flex-col gap-1">
					<p className="font-semibold">{title}</p>
					<p className="text-light-gray text-sm">{subtitle}</p>
					<div className="border-black border-2 gap-1 py-1 px-2 w-40 mt-6 flex justify-center items-center cursor-pointer hover:bg-hover-theme group active:bg-click-theme transition-all duration-300">
						<HeartIcon fill="black" />
						<p className="text-xs font-bold group-hover:text-white">
							Odložiť na neskôr
						</p>
					</div>
				</div>
			</div>
			<div className={`flex flex-col items-end w-40`}>
				<div className="flex items-center gap-2">
					<p
						className={`${
							discount ? "text-pink-theme" : "text-black"
						} font-semibold`}
					>
						1299 €
					</p>
					{discount && (
						<p className="line-through text-light-gray text-sm my-2">1799 €</p>
					)}
					<DustBinIcon className="ml-2" />
				</div>

				<p
					className={`text-pink-theme text-[10px] font-medium invisible ${
						discount && "visible"
					}`}
				>
					Uštríte 17% oproti pôvodnej sume
				</p>

				<div className="flex flex-col items-start gap-2 mt-4 w-full">
					<label htmlFor="value" className="text-xs font-semibold select-none">
						Zadajte množstvo tu
					</label>
					<div className="relative w-full ">
						<select
							name="value"
							id="value"
							className="w-full p-2 font-bold cursor-pointer appearance-none bg-white border border-gray-300 pr-8 pl-4 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
						>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
						</select>
						<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center w-12 h-full ">
							<DownArrowIcon />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductHorizontal;
