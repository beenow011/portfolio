import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import BgEffect from "../BgEffect";

function Navitem({ name, path }) {
  return (
    <NavLink to={path}>
      <div className="border  rounded-lg p-1 md:p-2 lg:p-3 hover:bg-orange-600">
        <h1 className="text-white font-tektur">{name}</h1>
      </div>
    </NavLink>
  );
}

export default Navitem;
