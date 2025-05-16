import React from "react";
import BlackStripAddress from "./BlackStripAddress";
import WhiteStripLinks from "./WhiteStripLinks";
import PinkStripDiscount from "./PinkStripDiscount";
import HeaderMain from "./HeaderMain";

const Header = () => {
  return (
    <header className="flex flex-col">
      <BlackStripAddress />
      <WhiteStripLinks />
      <PinkStripDiscount />
      <HeaderMain />
    </header>
  );
};

export default Header;
