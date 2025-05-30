"use client";
import Footer from "@/components/test1_2/Footer";
import Header from "@/components/test1_2/Header";
import MainBody from "@/components/test1_2/MainBody";
import SideBar from "@/components/test1_2/SideBar";
import React from "react";

const page = () => {
	const [showSideBar, setShowSideBar] = React.useState(false);
	return (
		<div className="flex flex-col gap-8">
			<SideBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
			<Header setShowSideBar={setShowSideBar} />
			<MainBody />
			<Footer />
		</div>
	);
};

export default page;
