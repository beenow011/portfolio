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
  const handleDrag = (event, info) => {
    const draggedX = info.point.x;
    const draggedY = info.point.y > 100 ? 100 : info.point.y;
    setMouse({ x: draggedX, y: draggedY });
    dispatch(update({ x: draggedX, y: draggedY }));
  };
  useEffect(() => {
    if (x > 900) {
      dispatch(changeTheme("light"));
    } else {
      dispatch(changeTheme("dark"));
    }
  }, [mouse.x]);
  // console.log(mouse);
  return (
    <div className="fixed left-10 top-10">
      {" "}
      <motion.div
        className={` z-0 w-48 h-48 shadow-lg shadow-black rounded-full flex justify-center items-center ${
          mouse.x > 900 ? "bg-sun bg-cover" : " bg-moon bg-cover"
        }`}
        drag
        onDrag={handleDrag}
        dragElastic={0.5}
        // animate={mouse}
        transition={{
          type: "spring",
          damping: 10,
          stiffness: 50,
          restDelta: 0.001,
        }}
      >
        <motion.h1 className="text-2xl font-bold font-bungee  p-3 rounded-md ">
          {mouse.x > 900 ? "Light mode" : "dark mode"}
        </motion.h1>{" "}
      </motion.div>
    </div>
  );
}

export default MouseEffect;
