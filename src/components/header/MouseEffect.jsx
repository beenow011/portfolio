import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { mousePointer } from "../../mousePointer";
import BgEffect from "../BgEffect";
import { useDispatch } from "react-redux";
import { changeTheme, update } from "../../store/dragSlice";
import moon from "../../assets/moon.png";
import "./style.css";
function MouseEffect() {
  const dispatch = useDispatch();
  const { x, y } = mousePointer();
  const [mouse, setMouse] = useState({ x, y });
  const [themeBoundary, setThemeBoundary] = useState(950);
  const handleDrag = (event, info) => {
    const draggedX = info.point.x;
    const draggedY = info.point.y;
    setMouse({ x: draggedX, y: draggedY });
    dispatch(update({ x: draggedX, y: draggedY }));
  };
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      if (window.innerWidth > 1200) {
        setThemeBoundary(850);
      } else {
        setThemeBoundary(450);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  console.log(screenWidth);
  useEffect(() => {
    if (mouse.x > themeBoundary) {
      dispatch(changeTheme("light"));
    } else {
      dispatch(changeTheme("dark"));
    }
  }, [mouse.x]);
  // console.log(mouse);
  return (
    <div className={`fixed left-10 top-10 ${mouse.y > 100 && "top-50"}`}>
      {" "}
      <motion.div
        className={`relative z-100 md:w-36 md:h-36 lg:w-48 lg:h-48 shadow-lg shadow-black rounded-full flex justify-center items-center ${
          mouse.x > themeBoundary ? "bg-sun bg-cover" : " bg-moon bg-cover"
        }`}
        drag
        onDrag={handleDrag}
        dragElastic={0.5}
        dragConstraints={{
          left: 0,
          right: window.innerWidth - 100,
          top: 0,
          bottom: 100,
        }}
        // animate={mouse}
        transition={{
          type: "spring",
          damping: 10,
          stiffness: 50,
          restDelta: 0.001,
        }}
      >
        <motion.h1 className="lg:text-2xl  font-bold font-bungee  p-3 rounded-md ">
          {mouse.x > themeBoundary ? "Light mode" : "dark mode"}
        </motion.h1>{" "}
      </motion.div>
    </div>
  );
}

export default MouseEffect;
