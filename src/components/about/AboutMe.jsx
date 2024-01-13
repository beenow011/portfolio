import React from "react";

function AboutMe() {
  const data = [
    {
      key: "Name",
      value: "Abhinav N B",
    },
    {
      key: "Father Name",
      value: "Bhaskar N P",
    },
    {
      key: "Mother Name",
      value: "Vijayalakshmi N B",
    },
    {
      key: "DOB",
      value: "11 / 7 / 2003",
    },
    {
      key: "POB",
      value: "Chikkamagaluru",
    },
    {
      key: "Email",
      value: "abhinavnb11@gmail.com",
    },
    {
      key: "Contact",
      value: "+91-8277123450",
    },
    {
      key: "Current Address",
      value:
        " 1159/7 MilkCenter road, near NIE collage, Vidyaranyapura, Mysore570008",
    },
  ];
  return (
    <div className="flex p-3 flex-col font-tektur gap-4 md:justify-evenly">
      {/* <ul className="p-3 flex flex-col gap-7 md:gap-3 text-nowrap">
        <li>Name</li>
        <li className="">Father Name</li>
        <li>Mother Name</li>
        <li>DOB</li>
        <li>DOP</li>
        <li>Email</li>
        <li>Contact</li>
        <li>c</li>
      </ul>
      {/* <ul className="p-3 flex flex-col gap-7 md:gap-3">
        <li>:</li>
        <li>:</li>
        <li>:</li>
        <li>:</li>
        <li>:</li>
        <li>:</li>
        <li>:</li>
        <li>:</li>
      </ul> */}
      {/* <ul className="p-3 flex flex-col font-bold gap-7 md:gap-3">
        <li>Abhinav N B</li>
        <li>Bhaskar N P</li>
        <li>Vijayalakshmi N B</li>
        <li>11 / 07 / 2003</li>
        <li>Chikkamagaluru</li>
        <li>abhinavnb11@gmail.com</li>
        <li>+91-8277123450</li>
        <li className="text-wrap w-24 md:w-64">
          1159/7 MilkCenter road, near NIE collage, Vidyaranyapura, Mysore
          570008
        </li>
      </ul> */}{" "}
      {data.map((item) => (
        <div key={item.key} className="flex gap-6 justify-evenly">
          <div className="flex-1 flex justify-start">{item.key}</div>
          <div className="flex-1 flex justify-start font-semibold">
            {item.value}
          </div>
        </div>
      ))}
    </div>
  );
}

export default AboutMe;
