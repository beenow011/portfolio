import React from "react";
import { Link, useNavigate } from "react-router-dom";

function TopProject({ name, image, techstack, Weblink, github }) {
  const navigate = useNavigate();
  return (
    <div className="w-[80vw] md:flex   gap-5 bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white p-3 rounded-md">
      <div className="flex justify-center items-center ">
        <a href={Weblink}>
          <img
            src={image}
            alt=""
            className="w-[80vw] md:w-[40vw] shadow-lg shadow-white hover:shadow-green-500"
          />
        </a>
      </div>
      <div className="ml-10 mt-10 flex flex-col gap-10 justify-center ">
        <h1 className="text-3xl font-bold">{name}</h1>
        <p className="font-semibold">Tech stack:</p>
        <div className="ml-10">
          {techstack.map((tech) => (
            <h1 key={tech}>{tech}</h1>
          ))}
        </div>
        <div>
          <a
            href={github}
            className="text-blue-500 hover:text-white hover:underline"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
}

export default TopProject;
