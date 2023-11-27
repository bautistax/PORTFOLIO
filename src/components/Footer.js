import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
    return (
        <footer className="fixed bottom-0 w-full bg-gray-800 text-white">
            <div className="container mx-auto p-4 flex justify-around">
                <Link to="about" smooth={true} duration={500}>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">ABOUT</button>
                </Link>
                <Link to="proyects" smooth={true} duration={500}>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">PROJECTS</button>
                </Link>
                <Link to="contact" smooth={true} duration={500}>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">CONTACT</button>
                </Link>
                <Link to="banner" smooth={true} duration={500}>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">BANNER</button>
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
