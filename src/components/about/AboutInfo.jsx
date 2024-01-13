import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";
import AboutMe from "./AboutMe";
import Education from "./Education";
function AboutInfo() {
  const [selectedTab, setSelectedTab] = useState(0);
  const theme = useSelector((state) => state.theme);
  return (
    <div
      className={`
        ${
          theme === "dark"
            ? "bg-orange-400 text-black shadow-orange-400"
            : "bg-black text-white shadow-black"
        } mt-36 mb-36 p-4 mx-5 w-[80vw]  md:w-[50vw] shadow-lg `}
    >
      {" "}
      <nav>
        <ul className="flex font-dm font-semibold">
          <li
            className={`flex-1 cursor-pointer p-3 text-center ${
              selectedTab === 0 ? " bg-neutral-200/80 " : ""
            }`}
            onClick={() => setSelectedTab(0)}
          >
            About Me
            {0 === selectedTab ? (
              <motion.div className="underline" layoutId="underline" />
            ) : null}
          </li>

          <li
            className={`flex-1 cursor-pointer p-3 text-center ${
              selectedTab === 1 ? " bg-neutral-200/80 " : ""
            }`}
            onClick={() => setSelectedTab(1)}
          >
            Education
            {1 === selectedTab ? (
              <motion.div className="underline" layoutId="underline" />
            ) : null}
          </li>
        </ul>
      </nav>
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {selectedTab === 0 ? <AboutMe /> : <Education />}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default AboutInfo;
