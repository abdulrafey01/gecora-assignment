import React from "react";
import BlackStripAddress from "./BlackStripAddress";
import WhiteStripLinks from "./WhiteStripLinks";
import PinkStripDiscount from "./PinkStripDiscount";
import HeaderMain from "./HeaderMain";

const Header = ({ setShowSideBar }) => {
	return (
		<header className="flex flex-col">
			<BlackStripAddress />
			<WhiteStripLinks />
			<PinkStripDiscount />
			<HeaderMain setShowSideBar={setShowSideBar} />
		</header>
	);
};

export default Header;
