import React from "react";
import { motion, useScroll } from "framer-motion";
import "./style.css";

function CreativeFrame() {
  const { scrollYProgress } = useScroll();
  return (
    <div>
      <motion.div
        className={`progress-bar ${
          theme === "dark"
            ? "bg-gradient-to-r from-red-800 via-yellow-600 to-yellow-500"
            : "bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600"
        }`}
        style={{ scaleX: scrollYProgress }}
      />
      CreativeFrame
    </div>
  );
}

export default CreativeFrame;
