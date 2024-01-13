import React, { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../store/dragSlice";
function MobileThemeChanger() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn((prev) => !prev);
  useEffect(() => {
    if (isOn) {
      dispatch(changeTheme("light"));
    } else {
      dispatch(changeTheme("dark"));
    }
  }, [isOn]);
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  console.log(isOn);
  return (
    <div
      className={`switch relative md:hidden  bg-white  w-24
       h-[40px] m-10 rounded-md flex ${
         isOn ? "justify-end" : "justify-start"
       } p-3`}
      onClick={toggleSwitch}
    >
      <p
        className={`absolute top-[8px] font-tektur cursor-pointer  text-xl my-auto font-bold text-black ${
          theme === "dark" ? "right-2" : "left-2"
        }`}
      >
        {theme === "dark" ? "Dark" : "Light"}
      </p>
      <motion.div
        className={`handle h-5 w-5  rounded-full ${
          isOn ? "bg-sun bg-cover" : "bg-moon bg-cover"
        }`}
        layout
        transition={spring}
      />
    </div>
  );
}

export default MobileThemeChanger;
