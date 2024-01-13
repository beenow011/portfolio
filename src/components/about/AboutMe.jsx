import React from "react";

function AboutMe() {
  return (
    <div className="flex font-tektur justify-evenly">
      <ul className="p-3 flex flex-col gap-3">
        <li>Name</li>
        <li>Father Name</li>
        <li>Mother Name</li>
        <li>DOB</li>
        <li>DOP</li>
        <li>Email</li>
        <li>Contact</li>
        <li>Current Address</li>
      </ul>
      <ul className="p-3 flex flex-col gap-3">
        <li>:</li>
        <li>:</li>
        <li>:</li>
        <li>:</li>
        <li>:</li>
        <li>:</li>
        <li>:</li>
        <li>:</li>
      </ul>
      <ul className="p-3 flex flex-col gap-3">
        <li>Abhinav N B</li>
        <li>Bhaskar N P</li>
        <li>Vijayalakshmi N B</li>
        <li>11 / 07 / 2003</li>
        <li>Chikkamagaluru</li>
        <li>abhinavnb11@gmail.com</li>
        <li>+91-8277123450</li>
        <li className="text-wrap w-64">
          1159/7 MilkCenter road, near NIE collage, Vidyaranyapura, Mysore
          570008
        </li>
      </ul>
    </div>
  );
}

export default AboutMe;
