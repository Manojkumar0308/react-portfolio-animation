import React from "react";
import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6 ">
      <div className="flex flex-shrink-0 items-center">
        {/* <img className="w-10 mx-2" src={logo} alt="logo" /> */}
        <h2 className="font-semibold text-2xl lg:text-3xl">Mk</h2>
      </div>
      <div className="flex gap-4 items-center justify-center m-8 text-xl lg:text-2xl">
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
        <FaSquareXTwitter />
      </div>
    </nav>
  );
};

export default Navbar;
