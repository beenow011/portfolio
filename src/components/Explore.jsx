import React from "react";
import Navitem from "./header/Navitem";
import { useLocation } from "react-router-dom";

function Explore() {
  const location = useLocation();
  const pathname = location.pathname;
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
  // console.log(pathname);
  return (
    <div className="flex flex-col justify-center items-center ">
      <h1 className="text-white font-bold text-3xl">Explore other sections</h1>
      <ul className="flex gap-2 md:gap-6 mt-5 mb-10 bg-neutral-600 p-5 rounded-md shadow-lg shadow-neutral-500">
        {navItems.map((item) =>
          pathname !== item.path ? (
            <li key={item.name} className="my-auto">
              <Navitem {...item} />
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
}

export default Explore;
