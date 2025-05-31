import { StarDot1 } from "@/assets/Svgs/StarDot1";
import { StarDot2 } from "@/assets/Svgs/StarDot2";
import { StarDot3 } from "@/assets/Svgs/StarDot3";
import { StarDot4 } from "@/assets/Svgs/StarDot4";
import { StarIcon } from "@/assets/Svgs/StarIcon";
import React, { useEffect } from "react";

const StarAnimated = () => {
	const [star1State, setStar1State] = React.useState(false);
	const [star2State, setStar2State] = React.useState(false);
	const [star3State, setStar3State] = React.useState(false);
	const [star4State, setStar4State] = React.useState(false);
	const startAnimation = () => {
		setStar1State(true);
		const timeOut = setTimeout(() => {
			setStar2State(true);
		}, 1500);
		const timeOut3 = setTimeout(() => {
			setStar4State(true);
		}, 3000);
		const timeOut2 = setTimeout(() => {
			setStar3State(true);
		}, 4500);

		return () => {
			clearTimeout(timeOut);
			clearTimeout(timeOut2);
			clearTimeout(timeOut3);
		};
	};

	useEffect(() => {
		const cleanup = startAnimation();

		const interVal = setInterval(() => {
			cleanup();
			startAnimation();
		}, 7000);

		return () => {
			cleanup();
			clearInterval(interVal);
		};
	}, []);

	useEffect(() => {
		if (star1State) {
			const timOut = setTimeout(() => {
				setStar1State(false);
				setStar2State(false);
				setStar3State(false);
				setStar4State(false);
			}, 5500);

			return () => {
				clearTimeout(timOut);
			};
		}
	}, [star1State]);

	return (
		<div className="relative">
			<div
				className={`absolute top-[2px] left-[2px] transition-all duration-300 ${
					star1State ? "opacity-100" : "opacity-0"
				}`}
			>
				<StarDot1 />
			</div>
			<div
				className={`absolute top-[2px] right-[2px] transition-all duration-300 ${
					star2State ? "opacity-100" : "opacity-0"
				}`}
			>
				<StarDot2 />
			</div>
			<StarIcon />
			<div
				className={`absolute bottom-[2px] left-[2px] transition-all duration-300  ${
					star3State ? "opacity-100" : "opacity-0"
				}`}
			>
				<StarDot3 />
			</div>
			<div
				className={`absolute bottom-[2px] right-[2px] transition-all duration-300  ${
					star4State ? "opacity-100" : "opacity-0"
				}`}
			>
				<StarDot4 />
			</div>
		</div>
	);
};

export default StarAnimated;
