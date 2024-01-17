import { useScroll, motion } from "framer-motion";
import React from "react";
import { useSelector } from "react-redux";
import {
  appwrite,
  firebase,
  react,
  c,
  cpp,
  css,
  tailwind,
  html,
  js,
  python,
  redux,
  router,
  ts,
  firestore,
  mySql,
} from "../../assets/index.js";
import SkillComponent from "../skills/SkillComponent.jsx";
import Explore from "../Explore.jsx";
function Skills() {
  const { scrollYProgress } = useScroll();
  const theme = useSelector((state) => state.theme);
  const section = [
    {
      name: "Programming Language",
      content: [
        {
          lang: "C Programming",
          icon: c,
        },
        {
          lang: "C++ Programming",
          icon: cpp,
        },
        {
          lang: "Java Script",
          icon: js,
        },
        {
          lang: "Type Script",
          icon: ts,
        },
        {
          lang: "Python Programming",
          icon: python,
        },
      ],
    },
    {
      name: "Frontend Web Technologies",
      content: [
        {
          lang: "HTML",
          icon: html,
        },
        {
          lang: "CSS",
          icon: css,
        },
        {
          lang: "Tailwind CSS",
          icon: tailwind,
        },
        {
          lang: "React JS",
          icon: react,
        },
        {
          lang: "Redux Toolkit",
          icon: redux,
        },
        {
          lang: "React Router",
          icon: router,
        },
      ],
    },
    {
      name: "Backend Services",
      content: [
        {
          lang: "Appwrite",
          icon: appwrite,
        },
        {
          lang: "Firebase",
          icon: firebase,
        },
      ],
    },
    {
      name: "Programming Concepts",
      content: [
        {
          lang: "OOP in C++",
          icon: cpp,
        },
        {
          lang: "Data Structures ",
          icon: cpp,
        },
        {
          lang: "Algorithms",
          icon: cpp,
        },
      ],
    },
    {
      name: "Database",
      content: [
        {
          lang: "MySQL",
          icon: mySql,
        },
        {
          lang: "Firestore",
          icon: firebase,
        },
      ],
    },
  ];

  return (
    <motion.div className="mb-36 flex flex-col justify-center items-center">
      <motion.div
        className={`progress-bar z-20 ${
          theme === "dark"
            ? "bg-gradient-to-r from-red-800 via-yellow-600 to-yellow-500"
            : "bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600"
        }`}
        style={{ scaleX: scrollYProgress }}
      />
      <h1 className="text-center font-bold text-3xl md:text-5xl font-manrope text-white ">
        Technical Proficiency
      </h1>

      {section.map((sec) => (
        <motion.div
          className={`flex flex-col justify-center items-center mt-9 md:border border-white w-fit p-3 md:bg-black rounded-lg `}
          animate={{ y: 50 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <h1 className="text-white text-2xl text-wrap font-semibold font-bungee mb-3 bg-black p-3 md:p-0">
            {sec.name}
          </h1>
          <ul className="flex gap-6 flex-wrap lg:flex-nowrap w-[80vw] md:w-[60vw] bg-neutral-600/40 p-3 md:p-4 px-9 rounded-md justify-center">
            {sec.content.map((item) => (
              <li key={item.lang} className="lg:w-full ">
                <SkillComponent {...item} />
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
      <div className="mt-[250px]">
        <Explore />
      </div>
    </motion.div>
  );
}

export default Skills;
