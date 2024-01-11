import React, { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { changeTheme } from "../../store/dragSlice";
function MobileThemeChanger() {
  const dispatch = useDispatch();
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
      className={`switch md:hidden  bg-white  w-36 h-[60px] m-10 rounded-md flex ${
        isOn ? "justify-end" : "justify-start"
      } p-3`}
      onClick={toggleSwitch}
    >
      <motion.div
        className={`handle h-10 w-10  rounded-full ${
          isOn ? "bg-sun bg-cover" : "bg-moon bg-cover"
        }`}
        layout
        transition={spring}
      />
    </div>
  );
}

export default MobileThemeChanger;
