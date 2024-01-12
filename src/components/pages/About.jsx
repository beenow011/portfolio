import React from "react";
import { motion, useScroll } from "framer-motion";
import hero from "../../assets/abhiAbout.jpg";
import "./style.css";
function About() {
  const { scrollYProgress } = useScroll();
  return (
    <div>
      <motion.div
        className=" mt-100 "
        animate={{ x: 100 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
      >
        {" "}
        <motion.div animate={{ x: 100 }} initial={false} className="flex">
          <motion.div>
            <img src={hero} width={300} alt="" srcset="" />
          </motion.div>
          <motion.div>
            <div className="text-white">
              <ul>
                <li>Name</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About;
