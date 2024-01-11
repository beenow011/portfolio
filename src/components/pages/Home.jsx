import React, { useState } from "react";
import hero from "../../assets/hero.png";
import hero2 from "../../assets/abhi2.png";
import hero3 from "../../assets/abhi3.png";
import hero4 from "../../assets/abhi5.png";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import Navitem from "../header/Navitem";

function Home() {
  const [visible, setVisible] = useState(false);
  const theme = useSelector((state) => state.theme);
  console.log(theme);
  return (
    <div className="  bg-no-repeat bg-contain">
      <div className="flex md:flex-col-reverse lg:flex-row ">
        <div className="flex-1 pt-52 ">
          <h1
            className={` font-bold text-center  text-white ${
              theme === "dark"
                ? "font-nab  lg:pl-96 text-9xl"
                : "font-dm text-tektur-400 font-semibold text-9xl lg:pl-96 "
            }  `}
          >
            Abhinav N B
          </h1>
          <p
            className={` text-white text-center lg:pl-96 l  mt-10 ${
              theme === "dark" ? "font-bungee text-3xl" : "font-dm text-5xl"
            }`}
          >
            Web Developer | Video Editor
          </p>
        </div>
        <div className="flex-1   bg-no-repeat bg-contain  mt-24 flex justify-center items-center ">
          <div className=" my-auto">
            <img
              src={hero4}
              alt=""
              srcset=""
              width={600}
              className="z-[-1] mx-auto mask1 hover:grayscale-0 grayscale"
            />
          </div>
        </div>
      </div>
      <div>
        {/* <motion.div
          className="box w-96 h-96 mx-auto my-96 bg-white"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            ease: "linear",
            duration: 2,
            x: { duration: 1 },
          }}
        /> */}
        <motion.div
          className={`w-64 h-64 mx-auto my-96 relative flex justify-center items-center ${
            theme === "dark" ? " bg-cyan-500" : "bg-slate-800"
          } `}
          animate={{
            scale: [1, 1.5, 1.5, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
        >
          {" "}
          <div className="font-bungee cursor-pointer text-2xl">Click here</div>
        </motion.div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-white font-bold text-3xl">
          Explore other sections
        </h1>
        <div className="flex gap-6 mt-5 mb-10 bg-neutral-600 p-5 rounded-md">
          <div className="">
            <Navitem name="About" path="/about" />
          </div>
          <div className="">
            <Navitem name="Skills" path="/skills" />
          </div>
          <div className="">
            <Navitem name="Projects" path="/projects" />
          </div>
          <div className="">
            <Navitem name="Creative Frame" path="/creativeframe" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
