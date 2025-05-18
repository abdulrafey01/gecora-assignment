import React from "react";

const Tag = ({ fill, ...props }) => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_3001_2333)">
				<mask
					id="mask0_3001_2333"
					style={{ maskType: "luminance" }}
					maskUnits="userSpaceOnUse"
					x="0"
					y="0"
					width="24"
					height="24"
				>
					<path d="M24 0H0V24H24V0Z" fill="white" />
				</mask>
				<g mask="url(#mask0_3001_2333)">
					<path
						d="M12.75 20.1L3.90002 10.35L4.65002 3.75H11.25L19.95 13.5L12.75 20.1ZM6.00002 9.75L12.9 17.4L17.4 13.5L10.5 5.85H6.45002L6.00002 9.75Z"
						fill={fill}
					/>
					<path
						d="M8.24998 8.70003C8.74703 8.70003 9.14997 8.29708 9.14997 7.80002C9.14997 7.30297 8.74703 6.90002 8.24998 6.90002C7.75292 6.90002 7.34998 7.30297 7.34998 7.80002C7.34998 8.29708 7.75292 8.70003 8.24998 8.70003Z"
						fill={fill}
					/>
				</g>
			</g>
			<defs>
				<clipPath id="clip0_3001_2333">
					<rect width="24" height="24" />
				</clipPath>
			</defs>
		</svg>
	);
};

export default Tag;
