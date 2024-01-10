import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MouseEffect from "./MouseEffect";
import "./style.css";
import Navitem from "./Navitem";
function Header() {
  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Skills",
      path: "/skills",
    },
    {
      name: "Creative Frame",
      path: "/creativeframe",
    },
  ];
  return (
    <div className="">
      <MouseEffect />
      <div className="z-100 rounded-full border border-white w-[50vw] m-10 fixed  left-0 right-0 mx-auto  header">
        <ul className="md:flex  p-10  justify-evenly items-center">
          {navItems.map((item) => (
            <li key={item.name}>
              <Navitem {...item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;
