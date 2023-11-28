import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-transparent text-white">
      <div className="container mx-auto p-4 flex justify-around flex-wrap">
        <Link to="about" smooth={true} duration={500}>
          <button className="btn btn-sm px-4 py-2 mb-2 sm:mb-4 lg:mb-0 lg:mr-4">
            About
          </button>
        </Link>
        <Link to="banner" smooth={true} duration={500}>
          <button className="btn btn-sm px-4 py-2 lg:ml-4">
            Banner
          </button>
        </Link>
        <Link to="projects" smooth={true} duration={500}>
          <button className="btn btn-sm px-4 py-2 mb-2 sm:mb-4 lg:mb-0">
            Projects
          </button>
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          <button className="btn btn-sm px-4 py-2 mb-2 sm:mb-4 lg:mb-0">
            Contact
          </button>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
