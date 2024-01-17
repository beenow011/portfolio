import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import "./style.css";
import { useSelector } from "react-redux";
import authService from "../../Appwrite/appwrite";
import Explore from "../Explore";
import BgPhotos from "../creative frame/BgPhotos";

function CreativeFrame() {
  const theme = useSelector((state) => state.theme);
  const [dbItems, setdbItems] = useState([]);
  // const [dbItems2, setdbItems2] = useState([]);
  const [selected, setSelected] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [randomIndex, setRandomIndex] = useState(
    Math.floor(Math.random() * dbItems.length)
  );
  const handleSelect = () => {
    setSelected(true);
    setSelectedId();
  };
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    // setdbItems([]);
    Promise.all([authService.getImageId(26, 25), authService.getImageId(0, 25)])
      .then(([res1, res2]) => {
        // Combine the documents from both responses
        const combinedDocuments = [...res1?.documents, ...res2?.documents];
        setdbItems(combinedDocuments);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  const randomImg = () => {
    setRandomIndex(Math.floor(Math.random() * dbItems.length));
  };

  // console.log(selected, selectedId);
  return (
    <div>
      <motion.div
        className={`progress-bar z-50  ${
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
        className={`relative overflow-hidden ${
          theme === "dark" ? "bg-slate-700/40" : "bg-slate-200/30 "
        } p-10  `}
      >
        <BgPhotos dbItems={dbItems && [...dbItems]} className="img" />
        <BgPhotos dbItems={dbItems && [...dbItems]} className="img3" />
        <BgPhotos dbItems={dbItems && [...dbItems]} className="img4" />
        <BgPhotos dbItems={dbItems && [...dbItems]} className="img2" />

        <div className="flex xl:absolute flex-col justify-center items-center gap-y-5 top-[30%] left-[30%]">
          <p
            className={`font-dm  font-bold text-3xl text-center ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            Check out my Instagram for more photographs and reels
          </p>
          <a
            href="https://www.instagram.com/abhinav_nb/"
            className="p-3 bg-slate-700 rounded-md text-white hover:bg-black"
          >
            abhinav_nb
          </a>
        </div>
      </div>
      <div
        onClick={randomImg}
        className={`flex justify-center items-center relative  md:bg-gradient-t mb-10 mt-24 ${
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
          className={`absolute w-64 md:w-96 transition bg-gradient-to-t from-transparent via-white/50 to-transparent h-1/2 opacity-0 md:hover:opacity-100 flex flex-col justify-center items-center font-dm text-3xl cursor-pointer`}
        >
          Click here
        </div>
      </div>
      <div
        className={`flex relative flex-wrap overflow-hidden gap-10 justify-center items-center `}
      >
        {dbItems &&
          dbItems.map((ele, i) => (
            <motion.div
              key={i}
              onClick={() => {
                setSelected(true);
                setSelectedId(ele?.id);
              }}
            >
              <motion.img
                src={ele && authService.getFiles(ele.id)}
                alt=""
                className={`w-32 md:w-96 rounded-md shadow-md ${
                  theme === "dark" ? "shadow-slate-400" : "shadow-black"
                } ${
                  selectedId === ele?.id
                    ? "transform scale-150 transition-transform"
                    : ""
                }`}
                onClick={() => setSelectedId(ele?.id)}
              />
            </motion.div>
          ))}
      </div>
      <Explore />
    </div>
  );
}

export default CreativeFrame;
