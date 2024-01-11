import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./components";
import BgEffect from "./components/BgEffect";
import { motion, useScroll } from "framer-motion";

import "./app.css";
import { useSelector } from "react-redux";
function App() {
  const { scrollYProgress } = useScroll();
  const theme = useSelector((state) => state.theme);
  return (
    <div className="flex flex-col">
      <motion.div
        className={`progress-bar ${
          theme === "dark"
            ? "bg-gradient-to-r from-red-800 via-yellow-600 to-yellow-500"
            : "bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600"
        }`}
        style={{ scaleX: scrollYProgress }}
      />
      <Header />
      <BgEffect />
      <Outlet />
    </div>
  );
}

export default App;
