import React from "react";
import { motion, useScroll } from "framer-motion";
import "./style.css";
import { useSelector } from "react-redux";
import { beNow, portfolio, notenow } from "../../assets";
import TopProject from "../project/TopProject";
function Projects() {
  const { scrollYProgress } = useScroll();
  const theme = useSelector((state) => state.theme);
  const topProjects = [
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
      name: "Personal Portfolio",
      image: portfolio,
      techstack: ["React", "Framer Motion", "Tailwind CSS", "Particle JS"],
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
    </div>
  );
}

export default Projects;
