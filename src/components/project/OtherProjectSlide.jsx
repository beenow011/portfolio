import React from "react";
import { Link } from "react-router-dom";

function OtherProjectSlide({ name, icon, path }) {
  return (
    <Link to={path}>
      <div className="p-10 bg-gradient-to-b from-gray-300 to-transparent hover:bg-gradient-to-t transition w-64 flex flex-col justify-center items-center h-96">
        <h1 className="text-2xl font-bold text-white">{name}</h1>
        <img src={icon} width={100} alt="" />
      </div>
    </Link>
  );
}

export default OtherProjectSlide;
