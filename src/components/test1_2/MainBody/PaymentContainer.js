import { AmexCardIcon } from "@/assets/Svgs/AmexCardIcon";
import { ApplePayCardIcon } from "@/assets/Svgs/ApplePayCardIcon";
import { CarIcon } from "@/assets/Svgs/CarIcon";
import { GpayCardIcon } from "@/assets/Svgs/GpayCardIcon";
import { MasterCard2Icon } from "@/assets/Svgs/MasterCard2Icon";
import { MasterCardIcon } from "@/assets/Svgs/MasterCardIcon";
import { PayPalCardIcon } from "@/assets/Svgs/PayPalCardIcon";
import { VisaCardIcon } from "@/assets/Svgs/VisaCardIcon";
import React from "react";
import Input from "../Common/Input";
import { TickIcon } from "@/assets/Svgs/TickIcon";

const PaymentContainer = () => {
	const [isCheck, setIsCheck] = React.useState(false);
	return (
		<div className="flex-1 flex flex-col w-full">
			<div className="bg-[#f5f5f5] flex justify-between items-center p-6">
				<div className="flex gap-4 items-center">
					<CarIcon />
					<p className="text-sm font-semibold">Doručíme</p>
				</div>
				<p className="text-sm text-light-gray font-medium">
					Pon, 19. 8 - Ut, 20. 8.
				</p>
			</div>
			<div className="border-2 border-[#f5f5f5] px-6 py-4 flex flex-col gap-4">
				<div className="flex justify-between items-center">
					<p className="text-sm font-semibold">Akceptujeme platby</p>
					<div className="flex justify-between items-center gap-2">
						<VisaCardIcon /> <MasterCardIcon /> <MasterCard2Icon />{" "}
						<AmexCardIcon /> <GpayCardIcon /> <ApplePayCardIcon />
						<PayPalCardIcon />
					</div>
				</div>
				<div className="flex justify-between items-center">
					<p className="font-medium">Voucher</p>
					<Input placeholder={"Zľavový kód"} />
				</div>
				<div className="flex justify-between items-center">
					<p className="font-medium">Spolu položky</p>
					<p className="font-medium">3778 €</p>
				</div>
				<div className="flex justify-between items-center">
					<p className="font-medium">Doprava:</p>
					<p className="font-medium">0 €</p>
				</div>
				<hr className="border-[#f5f5f5] border-[1.3px]" />
				<div className="flex justify-between items-center">
					<p className="font-medium">
						Spolu: <span className="text-light-gray">(vrátane DPH)</span>
					</p>
					<p className="font-bold text-2xl">3778 €</p>
				</div>
				<div className="flex gap-2 items-center ml-3">
					<div
						onClick={() => setIsCheck(!isCheck)}
						className={`w-5 h-5  cursor-pointer border-black border-[2.2px] flex justify-center items-center ${
							isCheck && "bg-black"
						}`}
					>
						<TickIcon className="w-2.5 h-2.5" />
					</div>
					<p className="text-light-gray text-sm font-medium select-none">
						zobraziť cenu bez DPH
					</p>
				</div>
				<div className="flex justify-between items-center mt-4 gap-4 select-none">
					<div className="w-full p-3 transition-all duration-300 flex justify-center items-center border-2 border-black font-semibold hover:border-transparent active:border-transparent cursor-pointer hover:bg-hover-theme active:bg-click-theme active:text-white hover:text-white">
						Pokračovať v nákupe
					</div>
					<div className="w-full p-3 transition-all duration-300 flex justify-center items-center border-2 border-transparent bg-black text-white font-semibold hover:border-transparent active:border-transparent cursor-pointer hover:bg-hover-theme active:bg-click-theme active:text-white hover:text-white">
						Do pokladne
					</div>
				</div>
			</div>
		</div>
	);
};

export default PaymentContainer;
