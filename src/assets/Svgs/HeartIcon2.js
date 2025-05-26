export const HeartIcon2 = ({ fill, stroke, strokeWidth, ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			{...props}
		>
			<path
				fill={fill}
				stroke={stroke}
				strokeWidth={strokeWidth}
				d="M12 20.2 1.5 9.7l5.8-5.8L12 8.5l4.7-4.7 5.8 5.8z"
			/>
		</svg>
	);
};
