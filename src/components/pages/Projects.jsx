import React from "react";
import { motion, useScroll } from "framer-motion";
import "./style.css";
import { useSelector } from "react-redux";
import {
  beNow,
  portfolio,
  notenow,
  crypton,
  react,
  js,
  html,
  yt,
} from "../../assets";
import TopProject from "../project/TopProject";
import OtherProjectSlide from "../project/OtherProjectSlide";
import Explore from "../Explore";
function Projects() {
  const { scrollYProgress } = useScroll();
  const theme = useSelector((state) => state.theme);
  const topProjects = [
    {
      name: "PlayNow Video sharing webapp",
      image: yt,
      techstack: [
        "React",
        "Redux Toolkit",
        "Express.js",
        "Node.js",
        "MongoDB",
        "Cloudinary",
        "Tailwind CSS",
      ],
      Weblink: "https://www.playitnow.co/",
      github: "https://github.com/beenow011/PlayNow-mern",
    },
    {
      name: "BeNow Tweets",
      image: beNow,
      techstack: [
        "React",
        "Redux Toolkit",
        "Tailwind CSS",
        "Appwrite",
        "React-Hook-Form",
        "Material UI",
      ],
      Weblink: "https://be-now-tweets.vercel.app/",
      github: "https://github.com/beenow011/BeNow-tweets",
    },
    {
      name: "Crypton-All about Crypto currency",
      image: crypton,
      techstack: [
        "React",
        "Redux Toolkit",
        "Rapid API",
        "ANT Design UI",
        "Tailwind CSS",
      ],
      Weblink: "https://crypton-swart.vercel.app/",
      github: "https://github.com/beenow011/Crypton",
    },
    {
      name: "Personal Portfolio",
      image: portfolio,
      techstack: [
        "React",
        "Framer Motion",
        "Tailwind CSS",
        "Particle JS",
        "Appwrite",
      ],
      Weblink: "https://portfolio-abhinav-vert.vercel.app/",
      github: "https://github.com/beenow011/portfolio",
    },
    {
      name: "Note Now",
      image: notenow,
      techstack: [
        "React",
        "Redux Toolkit",
        "Tailwind CSS",
        "Firebase",
        "React-Hook-Form",
      ],
      Weblink: "https://note-now-firebase.vercel.app/",
      github: "https://github.com/beenow011/note-now-firebase/",
    },
  ];
  const otherProjects = [
    {
      name: "React",
      icon: react,
      path: "/projects/react",
    },
    {
      name: "Java Script",
      icon: js,
      path: "/projects/js",
    },
    {
      name: "HTML CSS",
      icon: html,
      path: "/projects/html",
    },
  ];
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
      <h1 className="text-white font-dm font-bold text-4xl text-center">
        Top Projects
      </h1>
      <div>
        <ul className="flex flex-col justify-center items-center gap-6 mt-10">
          {topProjects.map((project, i) => (
            <li key={i}>
              <TopProject {...project} />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h1 className="text-white font-dm font-bold text-4xl text-center mt-10">
          Other Projects
        </h1>

        <ul className="flex flex-col md:flex-row mt-10 justify-center items-center gap-10 mb-10 ">
          {otherProjects.map((ele) => (
            <li key={ele.name}>
              <OtherProjectSlide {...ele} />
            </li>
          ))}
        </ul>
      </div>
      <Explore />
    </div>
  );
}

export default Projects;
