import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { FiPhoneCall } from "react-icons/fi";
function Footer() {
  return (
    <div className="w-full p-4 bg-black text-white flex justify-evenly flex-wrap text-sm">
      <div className="flex gap-10 p-2 hover:border border-white">
        <FaLinkedin size={24} />
        <p className="hover:text-blue-400">
          <a href="https://www.linkedin.com/in/abhinavnb01107/">Abhinav NB</a>
        </p>
      </div>
      <div className="flex gap-10 p-2 hover:border border-white">
        <AiOutlineGithub size={24} />
        <p className="hover:text-blue-400">
          <a href="https://github.com/beenow011/">beenow011</a>
        </p>
      </div>
      <div className="flex gap-10 p-2 hover:border border-white">
        <SiGmail size={24} />
        <p className="hover:text-blue-400">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=abhinavnb11@gmail.com&su=Subject%20of%20the%20email&body=Body%20of%20the%20email">
            abhinavnb11@gmail.com
          </a>
        </p>
      </div>
      <div className="flex gap-10 p-2 hover:border border-white">
        <FiPhoneCall size={24} />
        <p className="hover:text-blue-400">
          <a href="">+91-8277123450</a>
        </p>
      </div>
      <div className="flex gap-10 p-2 hover:border border-white">
        <AiOutlineInstagram size={24} />
        <p className="hover:text-blue-400">
          <a href="https://www.instagram.com/abhinav_nb/">abhinav_nb</a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
