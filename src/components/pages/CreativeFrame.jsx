import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import "./style.css";
import { useSelector } from "react-redux";
import authService from "../../Appwrite/appwrite";

function CreativeFrame() {
  const theme = useSelector((state) => state.theme);
  const [dbItems, setdbItems] = useState([]);
  const [randomIndex, setRandomIndex] = useState(
    Math.floor(Math.random() * dbItems.length)
  );
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    authService
      .getImageId()
      .then((res) => {
        setdbItems(res?.documents);
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const randomImg = () => {
    setRandomIndex(Math.floor(Math.random() * dbItems.length));
  };
  // console.log(dbItems);
  return (
    <div>
      <motion.div
        className={`progress-bar ${
          theme === "dark"
            ? "bg-gradient-to-r from-red-800 via-yellow-600 to-yellow-500"
            : "bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600"
        }`}
        style={{ scaleX: scrollYProgress }}
      />
      <h1
        className={`text-white ${
          theme === "dark" ? "font-bungee" : "font-nab"
        } font-bungee text-center text-3xl md:text-5xl mb-10 mt-10`}
      >
        Creative Frame
      </h1>
      <div
        onClick={randomImg}
        className={`flex justify-center items-center relative md:bg-gradient-t mb-10 mt-10 ${
          theme === "dark"
            ? "from-gray-500 to-white"
            : "from-slate-900 to-slate-300"
        }`}
      >
        <img
          className={`w-64 md:w-96 rounded-md   border-2 ${
            theme === "dark" ? "border-red-300" : "border-red-800"
          } p-4 `}
          src={
            dbItems[randomIndex] &&
            authService.getFiles(dbItems[randomIndex].id)
          }
          alt=""
        />
        <div
          className={`absolute w-64 md:w-96 transition bg-gradient-to-t from-transparent via-white/50 to-transparent h-1/2 opacity-0 hover:opacity-100 flex flex-col justify-center items-center font-dm text-3xl `}
        >
          Click here
        </div>
      </div>
      <div className="flex md:flex-row flex-col flex-wrap gap-10 justify-center items-center">
        {dbItems &&
          dbItems.map((ele, i) => (
            <div key={i}>
              <img
                src={ele && authService.getFiles(ele.id)}
                alt=""
                className="w-64 md:w-96"
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default CreativeFrame;
