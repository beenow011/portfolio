import React from "react";
import "./style.css";
import authService from "../../Appwrite/appwrite";
function BgPhotos({ dbItems, className }) {
  //   console.log("dbItems", dbItems);
  return (
    <div
      className={`flex blur-sm  overflow-hidden  hover:blur-0 transition  gap-10 justify-center items-center ${className}`}
    >
      {dbItems &&
        dbItems.map((ele, i) => (
          <div key={i} className="">
            <img
              src={ele && authService.getFiles(ele.id)}
              alt=""
              className="w-64 md:w-96"
            />
          </div>
        ))}
    </div>
  );
}

export default BgPhotos;
