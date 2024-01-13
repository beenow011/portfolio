import React from "react";

function Education() {
  return (
    <div className="flex flex-col p-3 gap-5 font-tektur">
      <div>
        <h1 className="text-2xl font-bold">
          10th std, Kuvempu Vidyanikethana School
        </h1>
        <p className="text-sm text-blue-800">Chickmagaluru, Karnataka</p>
        <p className="font-semibold">PERCENTAGE : 96.32%</p>
        <p className="text-sm">June 2018 - April 2019</p>
      </div>
      <div>
        <h1 className="text-2xl font-bold">
          PUC Science, Sri Sai Angels Pu College
        </h1>
        <p className="text-sm text-blue-800">Chickmagaluru, Karnataka</p>
        <p className="font-semibold">PERCENTAGE : 98.66%</p>
        <p className="text-sm">June 2020 - July 2021</p>
      </div>
      <div>
        <h1 className="text-2xl font-bold">
          Computer Science Engineering, The National Institue of Engineering
        </h1>
        <p className="text-sm text-blue-800">Mysuru, Karnataka</p>
        <p className="font-semibold">CGPA : 9.53</p>
        <p className="text-sm">Jan2022 - Presents</p>
      </div>
    </div>
  );
}

export default Education;
