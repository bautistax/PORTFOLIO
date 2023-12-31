import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section id="banner" className="h-screen">
      <div className="container mx-auto mb-8 mt-12 lg:mb-64">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[10vw] lg:text-[110px] font-bold leading-[0.8]"
            >
              Bautista <span>Bauzá</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-4 lg:mb-6 text-[7vw] lg:text-[36px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={["Front-End Developer", 2000]}
                speed={1}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-4 text-sm lg:text-lg max-w-lg mx-auto lg:mx-0"
            >
              Hello I'm Bautista Bauzá, a Front-End developer passionate about
              creating amazing web experiences. I specialize in technologies
              like HTML, CSS and JavaScript, React, and I'm constantly learning
              and exploring new tools and frameworks. My goal is to provide
              creative and functional solutions. Let's work together to take
              your ideas to the next level!
            </motion.p>
          </div>
          {/* socials */}
          <motion.div
            variants={fadeIn("up", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex text-[2vw] gap-x-4 max-w-max mx-auto mt-8 mb-36 lg:mx-0"
          >
            <a
              href="https://github.com/bautistax"
              className="text-gray-500 hover:text-white"
            >
              <FaGithub className="text-6xl lg:text-6xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/bautista-bauz%C3%A1-8ba37325b/"
              className="text-gray-500 hover:text-blue-700"
            >
              <FaLinkedin className="text-6xl lg:text-6xl" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
