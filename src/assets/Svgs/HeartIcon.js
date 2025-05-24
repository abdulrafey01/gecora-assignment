export const HeartIcon = ({ fill, ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			{...props}
		>
			<g clipPath="url(#a)">
				<mask
					id="a"
					width="24"
					height="24"
					x="0"
					y="0"
					maskUnits="userSpaceOnUse"
					style={{ maskType: "luminance" }}
				>
					<path d="M24 0H0v24h24z" />
				</mask>
				<g mask="url(#a)">
					<path
						fill={fill}
						d="M12 20.2 1.5 9.7l5.8-5.8L12 8.5l4.7-4.7 5.8 5.8zM4.2 9.7l7.8 7.8 7.8-7.8-3.1-3.1-4.7 4.7-4.7-4.7z"
					/>
				</g>
			</g>
		</svg>
	);
};
