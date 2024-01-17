import React, { useEffect, useState } from "react";
import Navitem from "./Navitem";
import { motion } from "framer-motion";
import { ImMenu } from "react-icons/im";
import { GoTriangleUp } from "react-icons/go";
import { useSelector } from "react-redux";
function MediumMenuBar({ navItems }) {
  const [menu, setMenu] = useState(false);
  const theme = useSelector((state) => state.theme);
  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  // const handleCloseMenu = () => {
  //   setMenu(false);
  // };

  // useEffect(() => {
  //   const handleBodyClick = (event) => {
  //     if (isMenuOpen && !event.target.closest(".menu")) {
  //       handleCloseMenu();
  //     }
  //   };

  //   document.body.addEventListener("click", handleBodyClick);

  //   return () => {
  //     document.body.removeEventListener("click", handleBodyClick);
  //   };
  // }, [menu]);
  return (
    <motion.nav
      initial={false}
      animate={menu ? "open" : "closed"}
      className="menu lg:hidden  flex flex-col justify-center items-center   rounded-full px-1 m-10 p-5 w-fit relative"
    >
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setMenu(!menu)}
        className="flex flex-col justify-center items-center"
      >
        {!menu ? (
          <ImMenu
            size={36}
            className={`${theme === "dark" ? "text-orange-300" : "text-black"}`}
          />
        ) : (
          <GoTriangleUp
            size={36}
            className={`${theme === "dark" ? "text-orange-300" : "text-black"}`}
          />
        )}
        <h1 className="text-3xl font-nab text-center">Menu</h1>
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        ></motion.div>
      </motion.button>
      <motion.ul
        className="flex z-20 flex-col absolute top-24 md:static md:flex-row header p-3 gap-3"
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        style={{ pointerEvents: menu ? "auto" : "none" }}
      >
        {navItems.map((item) => (
          <motion.li
            variants={itemVariants}
            key={item.name}
            className="my-auto"
            onClick={() => setMenu(false)}
          >
            <Navitem {...item} />
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
}

export default MediumMenuBar;
