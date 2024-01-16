import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import "./style.css";
import { useSelector } from "react-redux";
import authService from "../../Appwrite/appwrite";

function CreativeFrame() {
  const theme = useSelector((state) => state.theme);
  const [dbItems, setdbItems] = useState([]);

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
      CreativeFrame
      <div className="flex">
        {dbItems &&
          dbItems.map((ele) => (
            <img src={ele && authService.getFiles(ele.id)} alt="" width={100} />
          ))}
      </div>
    </div>
  );
}

export default CreativeFrame;
