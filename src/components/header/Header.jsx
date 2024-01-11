import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MouseEffect from "./MouseEffect";
import "./style.css";
import Navitem from "./Navitem";
import { useSelector } from "react-redux";
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
      name: "Projects",
      path: "/projects",
    },
    {
      name: "Creative Frame",
      path: "/creativeframe",
    },
  ];
  const theme = useSelector((state) => state.theme);
  return (
    <div className="flex justify-between">
      <div
        className={`text-black font-tektur md:w-36 lg:text-3xl  lg:w-72 lg:p-4 md:p-2 h-fit lg:h-24 m-10 bg-white rounded-md ${
          theme === "dark" && "opacity-0"
        }`}
      >
        {" "}
        Bring Sun here for Dark mode
      </div>
      <MouseEffect />
      <div className="z-100 rounded-full border border-white w-[50vw] m-10   left-0 right-0 mx-auto  header">
        <ul className="md:flex  lg:p-10 md:p-5 justify-evenly items-center">
          {navItems.map((item) => (
            <li key={item.name} className="my-auto">
              <Navitem {...item} />
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`text-black font-tektur md:w-36 lg:text-3xl  lg:w-72 lg:p-4 h-fit md:p-2 lg:h-24 m-10 bg-white rounded-md ${
          theme === "light" && "opacity-0"
        }`}
      >
        {" "}
        Bring Moon here for Light mode
      </div>
    </div>
  );
}

export default Header;
