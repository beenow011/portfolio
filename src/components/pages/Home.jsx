import React from "react";
import hero from "../../assets/hero.png";
import hero2 from "../../assets/abhi2.png";
import hero3 from "../../assets/abhi3.png";
import hero4 from "../../assets/abhi5.png";
import { useSelector } from "react-redux";

function Home() {
  const theme = useSelector((state) => state.theme);
  console.log(theme);
  return (
    <div className=" h-screen flex  bg-no-repeat bg-contain">
      <div className="flex-1 pt-96 ">
        <h1
          className={`text-9xl font-bold pl-72 text-white ${
            theme == "dark" ? "font-bungee" : "font-mono "
          }  `}
        >
          Abhinav N B
        </h1>
        <p className="font-dm text-white pl-72 text-3xl">
          Web Developer | Video Editor
        </p>
      </div>
      <div className="flex-1   bg-no-repeat bg-contain  mt-48 flex justify-center items-center ">
        <div className=" my-auto">
          <img
            src={hero4}
            alt=""
            srcset=""
            width={600}
            className=" mx-auto mask1 hover:animate-pulse"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
