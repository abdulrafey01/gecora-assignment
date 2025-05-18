export const Xicon = ({ fill, ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			// fill="none"
			viewBox="0 0 24 24"
			{...props}
		>
			<mask
				id="a"
				width="24"
				height="24"
				x="0"
				y="0"
				maskUnits="userSpaceOnUse"
				style={{ maskType: "luminance" }}
			>
				<path fill="#fff" d="M24 0H0v24h24z" />
			</mask>
			<g mask="url(#a)">
				<path
					fill={fill}
					d="m15.2 12 4 4h-3.1v3.1L12 14.9 7.8 19v-3h-3l4-4-4-4h3.1V4.9L12 9.1 16.1 5v3h3.1z"
				/>
			</g>
		</svg>
	);
};
