import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { FiPhoneCall } from "react-icons/fi";
function Contact() {
  const demo = {
    img: <FaLinkedin />,
  };
  return (
    <div className="flex flex-col justify-center items-center gap-10 mt-10 mb-10">
      <div className="flex gap-10">
        <FaLinkedin size={36} />
        <p className="hover:text-blue-800">
          <a href="https://www.linkedin.com/in/abhinavnb01107/">Abhinav NB</a>
        </p>
      </div>
      <div className="flex gap-10">
        <AiOutlineGithub size={36} />
        <p className="hover:text-blue-800">
          <a href="https://github.com/beenow011/">beenow011</a>
        </p>
      </div>
      <div className="flex gap-10">
        <SiGmail size={36} />
        <p className="hover:text-blue-800">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=abhinavnb11@gmail.com&su=Subject%20of%20the%20email&body=Body%20of%20the%20email">
            abhinavnb11@gmail.com
          </a>
        </p>
      </div>
      <div className="flex gap-10">
        <FiPhoneCall size={36} />
        <p className="hover:text-blue-800">
          <a href="">+91-8277123450</a>
        </p>
      </div>
      <div className="flex gap-10">
        <AiOutlineInstagram size={36} />
        <p className="hover:text-blue-800">
          <a href="https://www.instagram.com/abhinav_nb/">abhinav_nb</a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
