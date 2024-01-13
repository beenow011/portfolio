import React, { useState } from "react";
import { motion, useScroll } from "framer-motion";
import hero from "../../assets/abhiAbout.jpg";
import "./style.css";
import { useSelector } from "react-redux";
import AboutInfo from "../about/AboutInfo";
import Explore from "../Explore";
function About() {
  const { scrollYProgress } = useScroll();
  const theme = useSelector((state) => state.theme);
  return (
    <div className="w-screen h-fit">
      <motion.div
        className={`progress-bar ${
          theme === "dark"
            ? "bg-gradient-to-r from-red-800 via-yellow-600 to-yellow-500"
            : "bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600"
        }`}
        style={{ scaleX: scrollYProgress }}
      />
      <motion.div
        className="   "
        animate={{ y: 50 }}
        transition={{ ease: "easeOut", duration: 0.3 }}
      >
        {" "}
        <motion.div
          animate={{ y: 50 }}
          initial={false}
          className="flex flex-col justify-center items-center max-w-screen ml-0 "
        >
          <motion.div>
            <img
              src={hero}
              width={300}
              alt=""
              srcset=""
              className="rounded-full ring hover:ring-white "
            />
          </motion.div>
          <motion.div
            animate={{ y: 50 }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            <div className="text-white">
              <p className="font-tektur w-96 text-2xl text-center">
                Hello, I'm Abhinav NB, a Computer Science student pursuing my BE
                at NIE Mysore. Hailing from Chikkamagaluru, I blend my technical
                acumen with a passion for photography and video editing,
                showcasing creativity and storytelling. Eager to connect with
                fellow enthusiasts, I aspire to contribute to the dynamic
                intersection of computer science and multimedia. Proficient in
                front-end web development, I'm on a journey of continuous
                learning and innovation.
              </p>
            </div>
          </motion.div>
          <AboutInfo />
        </motion.div>
      </motion.div>
      <Explore />
    </div>
  );
}

export default About;
