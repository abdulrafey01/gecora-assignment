import React from "react";

const IconComponent = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-2 text-white text-sm font-bold cursor-pointer group">
      {icon}
      <p className="group-hover:text-hover-theme transition-all">{text}</p>
    </div>
  );
};

export default IconComponent;
