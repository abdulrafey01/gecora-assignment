export const CarIcon = (props) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			fill="none"
			viewBox="0 0 24 24"
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
					<path fill="#fff" d="M24 0H0v24h24z" />
				</mask>
				<g fill="#000" mask="url(#a)">
					<path d="m23.4 11.9-1.8-2.1-2.3-5h-3.7v-.9H2v1.9h11.7v5.5h6.7l1.1 1.3V16h-1.6c-.4-1.1-1.5-1.9-2.8-1.9s-2.4.8-2.8 1.9h-4.2c-.4-1.1-1.5-1.9-2.8-1.9S5 14.9 4.5 16H2v2h2.5c.4 1.2 1.5 2.1 2.9 2.1s2.5-.9 2.9-2.1h4c.4 1.2 1.5 2.1 2.9 2.1s2.5-.9 2.9-2.1h3.5v-6.1zM7.3 18.2c-.6 0-1.1-.5-1.1-1.1S6.7 16 7.3 16s1.1.5 1.1 1.1-.5 1.1-1.1 1.1m9.8 0c-.6 0-1.1-.5-1.1-1.1s.5-1.1 1.1-1.1 1.1.5 1.1 1.1-.5 1.1-1.1 1.1M15.6 6.7H18l1.2 2.6h-3.7V6.7z" />
					<path d="M8 10.3H.6v1.9H8zm1.1-2.8H1.7v1.9h7.4z" />
				</g>
			</g>
		</svg>
	);
};
