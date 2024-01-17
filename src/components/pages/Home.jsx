import React, { useState } from "react";
import hero from "../../assets/hero.png";
import hero2 from "../../assets/abhi2.png";
import hero3 from "../../assets/abhi3.png";
import hero4 from "../../assets/abhi5.png";
import { useSelector } from "react-redux";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import Navitem from "../header/Navitem";
import { useNavigate } from "react-router-dom";
import "./style.css";
import Explore from "../Explore";

function Home() {
  const { scrollYProgress } = useScroll();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const theme = useSelector((state) => state.theme);
  console.log(theme);
  return (
    <div className="  bg-no-repeat bg-contain">
      <motion.div
        className={`progress-bar ${
          theme === "dark"
            ? "bg-gradient-to-r from-red-800 via-yellow-600 to-yellow-500"
            : "bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600"
        }`}
        style={{ scaleX: scrollYProgress }}
      />
      <div className="flex flex-col md:flex-col-reverse lg:flex-row ">
        <div className="flex-1 md:pt-52 ">
          <h1
            className={` font-bold text-center text-5xl md:text-9xl  text-white ${
              theme === "dark"
                ? "font-nab  lg:pl-48 xl:pl-[500px] "
                : "font-dm text-tektur-400 font-bold lg:pl-48 xl:pl-[500px] "
            }  `}
          >
            Abhinav N B
          </h1>
          <p
            className={` text-white text-center  l  mt-10 ${
              theme === "dark"
                ? "font-bungee text-3xl lg:pl-48 xl:pl-96"
                : "font-dm text-5xl lg:pl-48 xl:pl-[500px]"
            }`}
          >
            Web Developer | Video Editor
          </p>
        </div>
        <div className="flex-1   bg-no-repeat bg-contain mt-12 md:mt-24 flex justify-center items-center ">
          <div className=" my-auto relative">
            <img
              src={hero4}
              alt=""
              srcset=""
              className="z-[-1] w-[450px] md:w-[600px]  mx-auto mask1 hover:grayscale-0 md:grayscale  shadow-orange-500"
            />
          </div>
        </div>
      </div>
      <div>
        <motion.div
          className={`w-40 h-40 md:w-64 md:h-64 mx-auto my-96 relative flex justify-center items-center ${
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
          onClick={() => {
            navigate("/aboutsite");
          }}
        >
          {" "}
          <div className="font-bungee cursor-pointer text-2xl">Click here</div>
        </motion.div>
      </div>
      <Explore />
    </div>
  );
}

export default Home;
