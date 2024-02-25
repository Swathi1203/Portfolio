import React from "react";

import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-gr bg-[#212222] p-[50px] flex flex-col gap-3 items-center  w-full">
      <div className="text-green-500 flex gap-5 items-center justify-center">
        <a
          href="https://www.linkedin.com/in/swathi-singh-b6722622a/"
          className="hover:text-yellow-500 hover:scale-110"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin size={25} />
        </a>
        <a
          href="https://x.com/swathi_singh_?t=nr8JQzPdtRX86pGBYm6mkw&s=09"
          className="hover:text-yellow-500 hover:scale-110"
          target="_blank"
          rel="noreferrer"
        >
          <BsTwitter size={25} />
        </a>
        <a
          href="https://github.com/Swathi1203"
          className="hover:text-yellow-500 hover:scale-110"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub size={25} />
        </a>
      </div>
      <p>No Copyright @2024</p>
    </footer>
  );
};

export default Footer;
