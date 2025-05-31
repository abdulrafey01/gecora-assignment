import { StarIcon } from "@/assets/Svgs/StarIcon";
import React, { useRef } from "react";
import ProductVertical from "./ProductVertical";

import ProFullSize from "@/assets/Pngs/14ProBigSize.png";
import ProBack from "@/assets/Pngs/17ProBack.png";
import AirPod from "@/assets/Pngs/AirPodFull3.png";
import PodHover from "@/assets/Pngs/PodsHover.png";
import LaptopHover from "@/assets/Pngs/Laptop-Hover.png";
import Laptop from "@/assets/Pngs/MacBook.png";
import { RightArrowTailed } from "@/assets/Svgs/RightArrowTailed";
import StarAnimated from "./StarAnimated";
import LaptopImg from "./LaptopImg";

const HorizontalListing = () => {
	const [scrollIndex, setScrollIndex] = React.useState(0);
	const scrollContainerRef = useRef(null);

	const handleScroll = () => {
		if (scrollContainerRef.current) {
			const containerWidth = scrollContainerRef.current.clientWidth;
			const scrollAmount = containerWidth * 0.3; // 30% of container width (one product)
			scrollContainerRef.current.scrollTo({
				left: scrollAmount * scrollIndex,
				behavior: "smooth",
			});
		}
	};

	React.useEffect(() => {
		handleScroll();
	}, [scrollIndex]);

	return (
		<div className="flex flex-col gap-6 items-start w-full overflow-hidden ">
			<div className="w-full flex justify-start items-center px-8 py-4 gap-4">
				<StarAnimated />

				<p className="text-4xl font-bold">Mohlo by vás zaujímať</p>
			</div>
			<div
				ref={scrollContainerRef}
				className="flex justify-start items-center gap-16 w-full overflow-x-scroll no-scrollbar px-10 transition-all duration-300 "
			>
				<div className="min-w-1/4">
					<ProductVertical
						images={[ProFullSize, ProBack]}
						imgWidth={336}
						imgHeight={312}
						yellowTag
					/>
				</div>
				<div className="min-w-1/4">
					<ProductVertical
						images={[Laptop, LaptopHover]}
						defaultImg={<LaptopImg />}
						imgWidth={370}
						imgHeight={370}
						yellowTag
					/>
				</div>
				<div className="min-w-1/4">
					<ProductVertical
						images={[AirPod, PodHover]}
						imgWidth={132}
						imgHeight={256}
						hoverImgWidth={212}
						hoverImgHeight={216}
					/>
				</div>
				<div className="min-w-1/4">
					<ProductVertical
						images={[ProFullSize, ProBack]}
						imgWidth={336}
						imgHeight={312}
					/>
				</div>
				<div className="min-w-1/4">
					<ProductVertical
						images={[Laptop, LaptopHover]}
						defaultImg={<LaptopImg />}
						imgWidth={370}
						imgHeight={370}
					/>
				</div>
				<div className="min-w-1/4">
					<ProductVertical
						images={[AirPod, PodHover]}
						imgWidth={132}
						imgHeight={256}
						hoverImgWidth={212}
						hoverImgHeight={216}
					/>
				</div>
			</div>
			<div className="w-full flex justify-end">
				<div
					onClick={() => setScrollIndex(scrollIndex + 1)}
					className="w-10 h-10 flex justify-center items-center border-2 border-black mr-15 cursor-pointer active:bg-click-theme"
				>
					<RightArrowTailed />
				</div>
			</div>
		</div>
	);
};

export default HorizontalListing;
