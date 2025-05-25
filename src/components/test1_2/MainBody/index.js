import React from "react";
import VerticalListing from "./VerticalListing";
import PaymentContainer from "./PaymentContainer";
import HorizontalListing from "./HorizontalListing";

const MainBody = () => {
	return (
		<div className="flex flex-col justify-center items-center gap-8">
			<div className="flex flex-col justify-center items-center gap-3">
				<p className="font-bold text-2xl">Váš košík</p>
				<p className="text-light-gray">V košíku máte aktuálne 2 produkty</p>
			</div>
			<div className="flex justify-between items-start w-full gap-10 py-4 px-8">
				<VerticalListing />
				<PaymentContainer />
			</div>
			<HorizontalListing />
		</div>
	);
};

export default MainBody;
