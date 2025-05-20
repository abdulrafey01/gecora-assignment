"use client";
import Header from "@/components/test1_2/Header";
import SideBar from "@/components/test1_2/SideBar";
import React from "react";

const page = () => {
	const [showSideBar, setShowSideBar] = React.useState(true);
	return (
		<div className="flex flex-col">
			<Header setShowSideBar={setShowSideBar} />
			<SideBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
		</div>
	);
};

export default page;
