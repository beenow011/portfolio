import React from "react";
import { useSelector } from "react-redux";
import "./style.css";
import { motion } from "framer-motion";
function SkillComponent({ lang, icon }) {
  const theme = useSelector((state) => state.theme);
  return (
    <motion.div
      className="flex md:flex-col justify-center items-center  bg-orange-300/30 h-full p-2 md:p-3"
      whileHover={{ scale: [null, 1.5, 1.4] }}
      transition={{ duration: 0.3 }}
    >
      <p className="text-white font-semibold p-3 w-full md:w-[100px] md:h-[100px] text-wrap">
        {lang}
      </p>
      <img src={icon} alt={lang} width={100} height={100} />
    </motion.div>
  );
}

export default SkillComponent;
