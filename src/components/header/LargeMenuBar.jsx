import React from "react";
import Navitem from "./Navitem";

function LargeMenuBar({ navItems }) {
  return (
    <div className="z-100 hidden lg:block rounded-full border border-white w-[50vw] m-10   left-0 right-0 mx-auto  header">
      <ul className="md:flex  lg:p-10 md:p-5 justify-evenly items-center">
        {navItems.map((item) => (
          <li key={item.name} className="my-auto">
            <Navitem {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LargeMenuBar;
