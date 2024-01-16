import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./components";
import BgEffect from "./components/BgEffect";
import { motion, useScroll } from "framer-motion";
import "./App.css";
import { useSelector } from "react-redux";
function App() {
  const theme = useSelector((state) => state.theme);
  return (
    <div className={`flex flex-col w-screen `}>
      <Header />
      <BgEffect />
      <Outlet />
    </div>
  );
}

export default App;
