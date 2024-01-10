import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./components";
import BgEffect from "./components/BgEffect";
import { motion, useScroll } from "framer-motion";

import "./app.css";
function App() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="flex flex-col">
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <Header />
      <BgEffect />
      <Outlet />
    </div>
  );
}

export default App;
