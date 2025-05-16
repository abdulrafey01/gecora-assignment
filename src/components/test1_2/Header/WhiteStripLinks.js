import React from "react";

const WhiteStrip = () => {
  return (
    <nav className="flex justify-end items-center px-8 py-1 text-[#7b7b7b] text-xs font-semibold">
      <div className="flex items-center gap-4">
        <p>Sledovanie zásielky</p>
        <p>Vrátenie tovaru</p>
        <p>O nás</p>
        <p>FAQ</p>
        <p>Blog</p>
      </div>
    </nav>
  );
};

export default WhiteStrip;
