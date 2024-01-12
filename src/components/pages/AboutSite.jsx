import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { DiReact } from "react-icons/di";
import RouterLogo from "../../assets/logos/router.png";
import ReactLogo from "../../assets/logos/react.png";
import TailwindLogo from "../../assets/logos/tailwind.png";
import framerLogo from "../../assets/logos/framer-logo.svg";
// import { useHistory } from "react-router-dom";
function AboutSite() {
  //   const history = useHistory();
  const [menu, setMenu] = useState(false);
  const theme = useSelector((state) => state.theme);
  useEffect(() => {
    setMenu(true);
  }, []);
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
  const techStack = [
    {
      name: "React",
      icon: ReactLogo,
    },
    {
      name: "React-Router-Dom",
      icon: RouterLogo,
    },
    {
      name: "Tailwind CSS",
      icon: TailwindLogo,
    },
    {
      name: "Framer-motion",
      icon: framerLogo,
    },
  ];
  //   useEffect(() => {
  //     const unlisten = history.listen(() => {
  //       setMenu(true);
  //     });
  //     return () => {
  //       unlisten();
  //     };
  //   }, [history]);
  return (
    <motion.div className="flex flex-col justify-center items-center">
      <h1
        className={`${
          theme === "dark" ? "text-orange-400" : ""
        } font-dm text-4xl font-bold text-center`}
      >
        WELCOME TO MY PORTFOLIO WEBSITE!
      </h1>
      <motion.div initial={false} animate={"open"}>
        <motion.ul
          className=" bg-neutral-800/60 w-fit flex flex-col justify-center items-center p-3 mt-10 mb-10 gap-5"
          variants={{
            open: {
              clipPath: "inset(0% 0% 0% 0% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 1.5,
                delayChildren: 0.3,
                staggerChildren: 0.05,
              },
            },
          }}
          style={{ pointerEvents: "auto" }}
        >
          {techStack.map((item) => (
            <motion.li
              variants={itemVariants}
              key={item.name}
              className="my-auto bg-white/40 p-4 h-full w-full  flex justify-center items-center"
            >
              <motion.div className="flex justify-between items-center">
                <img src={item.icon} alt="" width={100} className="" />
                <h1 className="text-black my-auto ">{item.name}</h1>
              </motion.div>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.div>
  );
}

export default AboutSite;
