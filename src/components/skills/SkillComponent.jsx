import React from "react";
import { useSelector } from "react-redux";
import "./style.css";
import { motion } from "framer-motion";
function SkillComponent({ lang, icon }) {
  const theme = useSelector((state) => state.theme);
  return (
    <motion.div
      className={`flex md:flex-col justify-center items-center w-64 md:w-full rounded-md ${
        theme === "light"
          ? "bg-gradient-to-r from-rose-500 via-red-400 to-red-500"
          : "bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white"
      }  h-full  p-3`}
      whileHover={{ scale: [null, 1.5, 1.4] }}
      transition={{ duration: 0.3 }}
    >
      <p className=" font-semibold p-3 w-full md:w-[100px] md:h-[100px] text-wrap">
        {lang}
      </p>
      <img
        src={icon}
        alt={lang}
        width={100}
        height={100}
        className="w-12 md:w-[100px]"
      />
    </motion.div>
  );
}

export default SkillComponent;
