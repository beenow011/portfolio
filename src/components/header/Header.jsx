import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MouseEffect from "./MouseEffect";
import "./style.css";
import Navitem from "./Navitem";
import { useSelector } from "react-redux";
import LargeMenuBar from "./LargeMenuBar";
import MediumMenuBar from "./MediumMenuBar";
import MobileThemeChanger from "./MobileThemeChanger";
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
    <div className="flex justify-between relative">
      <div
        className={`hidden md:block  text-black font-tektur md:w-36 lg:text-3xl  lg:w-72 lg:p-4 md:p-2 h-fit lg:h-24 m-10 bg-white rounded-md ${
          theme === "dark" && "opacity-0"
        }`}
      >
        {" "}
        Bring Sun here for Dark mode
      </div>
      <MouseEffect />
      <MobileThemeChanger />
      <LargeMenuBar navItems={[...navItems]} />
      <MediumMenuBar navItems={[...navItems]} />
      <div
        className={`text-black hidden md:block font-tektur md:w-36 lg:text-3xl  lg:w-72 lg:p-4 h-fit md:p-2 lg:h-24 m-10 bg-white rounded-md ${
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
