import React from "react";

const IconComponent = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-2 text-white text-sm font-bold">
      {icon}
      <p>{text}</p>
    </div>
  );
};

export default IconComponent;
