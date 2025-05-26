import React from "react";
import Logo from "../Header/Logo";
import { FbIcon } from "@/assets/Svgs/FbIcon";
import { InstaIcon } from "@/assets/Svgs/InstaIcon";
import { YtIcon } from "@/assets/Svgs/YtIcon";
import { WAIcon } from "@/assets/Svgs/WAIcon";
import { TTIcon } from "@/assets/Svgs/TTIcon";
import { BurstIconRed } from "@/assets/Svgs/BurstIconRed";
import Input from "../Common/Input";

import { GpayCardIcon } from "@/assets/Svgs/GpayCardIcon";
import { MasterCard2Icon } from "@/assets/Svgs/MasterCard2Icon";
import { MasterCardIcon } from "@/assets/Svgs/MasterCardIcon";
import { PayPalCardIcon } from "@/assets/Svgs/PayPalCardIcon";
import { VisaCardIcon } from "@/assets/Svgs/VisaCardIcon";
import { AmexCardIcon } from "@/assets/Svgs/AmexCardIcon";
import { ApplePayCardIcon } from "@/assets/Svgs/ApplePayCardIcon";

const Footer = () => {
	return (
		<div className="flex flex-col bg-black py-8">
			<div className="w-full flex justify-between items-start pb-8 px-12">
				<div className="flex flex-col flex-1 justify-start items-start">
					<div className="scale-200 ml-26 mt-10">
						<Logo />
					</div>
					<div className="flex flex-col justify-start items-start gap-4 mt-14">
						<p className="text-4xl  text-white font-bold">Postaráme sa o vás</p>
						<p className="text-light-gray">
							Odomknite nekonečné možnosti s naším prémiovým <br /> výberom
							Apple produktov.
						</p>
					</div>
					<div className="flex flex-col gap-8 mt-40">
						<p className="text-white font-semibold">Kontaktné údaje</p>
						<p className="text-light-gray">+421 919 215 491</p>
						<p className="text-light-gray">Rastislavova 68, Košice</p>
					</div>
					<div className="flex flex-col gap-8 mt-40">
						<p className="text-white font-semibold">Sledujte nás</p>
						<div className="flex justify-start gap-2 items-center">
							<FbIcon />
							<InstaIcon />
							<YtIcon />
							<WAIcon />
							<TTIcon />
						</div>
					</div>
				</div>
				<div className="flex-1 flex flex-col justify-start items-start mt-8 gap-18">
					<div className="bg-hover-theme w-full flex flex-col gap-6 items-start p-8">
						<div className="flex justify-between items-center w-full">
							<p className="text-4xl text-white font-bold">Získaj 10% zľavu</p>
							<BurstIconRed />
						</div>
						<p className="text-gray-300">
							Ušetrite 10% na ďalšom nákupe produktov Apple, ak sa ešte dnes
							pripojíte k našej komunite odberateľov noviniek!
						</p>
						<div className="w-full flex items-center gap-8">
							<Input
								placeholder={"Vaša e-mailová adresa"}
								className={"w-full"}
								iconEnd
							/>
							<div className="bg-black flex text-white py-3.5  px-10 cursor-pointer select-none font-semibold ">
								Odoslať
							</div>
						</div>
					</div>
					<div className="flex justify-between items-start w-full">
						<div className="flex flex-col gap-6 text-sm">
							<p className="text-white font-semibold">Customer service</p>
							<p className="text-light-gray">Kontaktujte nás</p>
							<p className="text-light-gray">FAQs</p>
							<p className="text-light-gray">Vrátenie zásielky</p>
							<p className="text-light-gray">Doručenie</p>
							<p className="text-light-gray">Sledovanie zásielky</p>
							<p className="text-light-gray">Platby a cenotvorba</p>
						</div>
						<div className="flex flex-col gap-6 text-sm">
							<p className="text-white font-semibold">Iné</p>
							<p className="text-light-gray">Iné iné a niečo iné</p>
							<p className="text-light-gray">Iné iné a niečo iné</p>
							<p className="text-light-gray">Iné iné iné</p>
							<p className="text-light-gray">Iné iné iné</p>
						</div>
						<div className="flex flex-col gap-6 text-sm">
							<p className="text-white font-semibold">Mobilecare</p>
							<p className="text-light-gray">O nás</p>
							<p className="text-light-gray">Blog</p>
							<p className="text-light-gray">Kariéra</p>
						</div>
						<div className="flex flex-col gap-6 text-sm">
							<p className="text-white font-semibold">
								Členstvo, zľavy a akcie
							</p>
							<p className="text-light-gray">Odporuč nás a dostaň zľavu 10%</p>
							<p className="text-light-gray">Vernostný program</p>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full flex justify-between px-12 items-center mt-12 select-none">
				<p className="hover:text-white transition-all duration-300 cursor-pointer font-bold text-4xl text-[#191919]">
					Slovensko
				</p>
				<p className="hover:text-white transition-all duration-300 cursor-pointer font-bold text-4xl text-[#191919]">
					Česká republika
				</p>
				<p className="hover:text-white transition-all duration-300 cursor-pointer font-bold text-4xl text-[#191919]">
					România
				</p>
				<p className="hover:text-white transition-all duration-300 cursor-pointer font-bold text-4xl text-[#191919]">
					Polska
				</p>
			</div>
			<div className="flex justify-end items-center gap-2 px-12 mt-12">
				<VisaCardIcon /> <MasterCardIcon /> <MasterCard2Icon /> <AmexCardIcon />{" "}
				<GpayCardIcon /> <ApplePayCardIcon />
				<PayPalCardIcon />
			</div>
			<div className="text-light-gray flex justify-start items-center gap-4 px-12 mt-12 text-sm">
				<p>Podmienky používania</p>
				<p>GDPR</p>
				<p>Ochrana osobných údajov</p>
			</div>
		</div>
	);
};

export default Footer;
