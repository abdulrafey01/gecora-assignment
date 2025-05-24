import React from "react";

const BlackOverlay = ({ children }) => {
	return (
		<div className="w-full fixed h-full inset-0 z-50">
			{/* Black Overlay */}
			<div className="w-full h-full bg-black opacity-50 absolute"></div>
			{/* Component */}
			<div className="z-50 absolute w-full h-full border-2 border-black overflow-y-auto">
				{children}
			</div>
		</div>
	);
};

export default BlackOverlay;
