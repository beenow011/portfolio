import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { motion, useScroll } from "framer-motion";
import "./style.css";

import { DiReact } from "react-icons/di";
import RouterLogo from "../../assets/logos/router.png";
import ReactLogo from "../../assets/logos/react.png";
import TailwindLogo from "../../assets/logos/tailwind.png";
import framerLogo from "../../assets/logos/framer-logo.svg";
import { appwrite } from "../../assets";
// import { useHistory } from "react-router-dom";
function AboutSite() {
  const { scrollYProgress } = useScroll();
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
    {
      name: "Appwrite",
      icon: appwrite,
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
    <motion.div className="flex flex-col justify-center items-center mb-36">
      <motion.div
        className={`progress-bar ${
          theme === "dark"
            ? "bg-gradient-to-r from-red-800 via-yellow-600 to-yellow-500"
            : "bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600"
        }`}
        style={{ scaleX: scrollYProgress }}
      />
      <h1
        className={`${
          theme === "dark" ? "text-orange-400" : ""
        } font-dm text-4xl font-bold text-center`}
      >
        WELCOME TO MY PORTFOLIO WEBSITE!
      </h1>
      <p className="text-white  text-wrap font-manrope mt-10 text-center">
        React-powered portfolio showcasing my projects. Utilizes Appwrite for
        seamless storage integration, presenting a dynamic and engaging showcase
        of my work.
      </p>
      <p className="text-white font-manrope">
        source code :{" "}
        <a
          href="https://github.com/beenow011/portfolio"
          className="text-blue-800 bg-white rounded-md hover:bg-blue-200 px-2"
        >
          Github
        </a>
      </p>
      <motion.div initial={false} animate={"open"}>
        <motion.ul
          className=" bg-neutral-800/60 w-fit flex flex-col justify-center items-center p-3 mt-10 mb-10 gap-5"
          animate={{ y: 50 }}
          transition={{ ease: "easeOut", duration: 0.3 }}
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
