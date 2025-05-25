import { HeartIcon } from "@/assets/Svgs/HeartIcon";
import Image from "next/image";
import React from "react";
import ProFullSize from "@/assets/Pngs/14ProBigSize.png";
import ProBack from "@/assets/Pngs/17ProBack.png";
import { PlusIcon } from "@/assets/Svgs/PlusIcon";
import { motion } from "motion/react";
import { TickIcon } from "@/assets/Svgs/TickIcon";
const ProductVertical = () => {
	const [color, setColor] = React.useState(0);
	const [imgHover, setImgHover] = React.useState(false);
	const [variantClick, setVariantClick] = React.useState(false);
	const images = [ProFullSize, ProBack];
	const [variantSelected, setVariantSelected] = React.useState(false);
	return (
		<div className="flex flex-col w-80">
			<div className="flex justify-between items-center">
				<div className="py-1 px-1 text-xs font-semibold bg-[#D0FF16]">
					Novinka
				</div>

				<motion.div
					className="z-10 cursor-pointer"
					whileHover={{ rotate: [10, 0, 15, -15, 15, 0] }}
				>
					<HeartIcon className="w-8 h-8" />
				</motion.div>
			</div>
			<div
				onMouseEnter={() => setImgHover(true)}
				onMouseLeave={() => setImgHover(false)}
				className="relative"
			>
				<Image
					width={336}
					height={312}
					src={images[0]}
					alt="iphone"
					className={`relative bottom-10 cursor-pointer transition-all duration-300 ${
						imgHover && "opacity-0"
					}`}
				/>
				<Image
					width={336}
					height={312}
					src={images[1]}
					alt="iphone"
					className={`absolute bottom-10 cursor-pointer transition-all duration-300 ${
						!imgHover && "opacity-0"
					}`}
				/>
				<motion.div
					onClick={() => setVariantClick(!variantClick)}
					animate={{
						opacity: imgHover ? 1 : 0,
						height: variantClick ? 90 : 50,
					}}
					transition={{ type: "spring", duration: 0.5 }}
					className={`py-3 w-[270px]  bg-black absolute top-42 left-6 cursor-pointer select-none `}
				>
					{variantClick ? (
						<motion.div className="flex flex-col px-2  select-none">
							<div className="flex justify-between items-center">
								<p
									onClick={() => setVariantSelected(true)}
									className="text-white text-xs p-2 hover:bg-gray-800"
								>
									64 GB
								</p>
								<p
									onClick={() => setVariantSelected(true)}
									className="text-white text-xs p-2 hover:bg-gray-800"
								>
									126 GB
								</p>
								<p
									onClick={() => setVariantSelected(true)}
									className="text-white text-xs p-2 hover:bg-gray-800"
								>
									256 GB
								</p>
								<p
									onClick={() => setVariantSelected(true)}
									className="text-white text-xs p-2 hover:bg-gray-800"
								>
									512 GB
								</p>
							</div>
							<div className="flex justify-center items-center gap-4">
								<p
									onClick={() => setVariantSelected(true)}
									className="text-white text-xs p-2 hover:bg-gray-800"
								>
									1 TB
								</p>
								<p className="text-light-gray text-xs line-through p-2 hover:bg-gray-800">
									2 TB
								</p>
							</div>
						</motion.div>
					) : (
						<motion.div className="flex justify-center items-center gap-2  transition-all duration-300 select-none">
							{variantSelected ? (
								<>
									<p className="text-white font-semibold">Pridané do košíka</p>
									<TickIcon className="w-5 h-5" />
								</>
							) : (
								<>
									<PlusIcon />
									<p className="text-white font-semibold">Rýchly nákup</p>
								</>
							)}
						</motion.div>
					)}
				</motion.div>
			</div>
			<div className="flex flex-col gap-1 relative bottom-5">
				<p className="font-semibold">iPhone 17 PRO (2023)</p>
				<p className="text-light-gray text-sm">Smartfóny</p>
				<p className="font-semibold">1299 €</p>
				<div className="flex items-center gap-2">
					<div
						onClick={() => setColor(0)}
						className={`w-4 h-4 bg-[#F4E8CE] rounded-full ${
							color === 0 && "border-1"
						} cursor-pointer`}
					></div>
					<div
						onClick={() => setColor(1)}
						className={`w-5 h-5 rounded-full flex justify-center items-center ${
							color === 1 && "border-1"
						}  cursor-pointer `}
					>
						<div className={`w-4 h-4 bg-[#594F63] rounded-full`}></div>
					</div>
					<div
						onClick={() => setColor(2)}
						className={`w-4 h-4 bg-[#F0F2F2] rounded-full ${
							color === 2 && "border-1"
						}  cursor-pointer`}
					></div>
					<div
						onClick={() => setColor(3)}
						className={`w-5 h-5 rounded-full flex justify-center items-center ${
							color === 3 && "border-1"
						}  cursor-pointer `}
					>
						<div className={`w-4 h-4 bg-[#403E3D] rounded-full`}></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductVertical;
