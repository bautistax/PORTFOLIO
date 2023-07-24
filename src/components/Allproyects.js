import React from "react";
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import img1 from '../assets/BookBuster.jpeg';
import img2 from '../assets/bk-countries.jpg';
import img3 from '../assets/bk-rickandmorty.jpg';
import img4 from '../assets/QR.jpg';

const AllProyects = () => {
  return (
    <section className="section" id="proyects">
      <div className="container mx-4 lg:mx-14">
        <div className="lg:flex-1 lg:ml-auto">
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-12 mb-7 lg:mb-0'>
            {/* text */}
            <div className='mt-7 lg:mr-16'>
              <h2 className='h2 leading-tight text-accent'>
                All&nbsp;&nbsp;Proyects
              </h2>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn('left', 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-5 lg:flex-row lg:flex-wrap justify-center'>

            {/* image 1*/}
            <a href='https://book-buster-front-fhekz.vercel.app'>
              <div className='w-full lg:w-80 h-72 group relative overflow-hidden border-2 border-white/50 rounded-xl mx-3'>
                {/* overlay */}
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                {/* img */}
                <img className='group-hover:scale-125 transition-all duration-500 w-full h-full object-cover' src={img1} alt='' />
                {/* pretitle */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-gradient'>Henry's Final Project</span>
                </div>
                {/* title */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                  <span className='text-3xl text-white'>
                    BookBuster
                  </span>
                </div>
              </div>
            </a>

            {/* image 2*/}
            <a href='https://github.com/bautistax/PI-Countries-main'>
              <div className='w-full lg:w-80 h-72 group relative overflow-hidden border-2 border-white/50 rounded-xl mx-3'>
                {/* overlay */}
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                {/* img */}
                <img className='group-hover:scale-125 transition-all duration-500 w-full h-full object-cover' src={img2} alt='' />
                {/* pretitle */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-gradient'>Henry's PI Proyect</span>
                </div>
                {/* title */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                  <span className='text-3xl text-white'>
                    Countries API
                  </span>
                </div>
              </div>
            </a>

            {/* image 3*/}
            <a href='https://github.com/bautistax/Rick-and-Morty'>
              <div className='w-full lg:w-80 h-72 group relative overflow-hidden border-2 border-white/50 rounded-xl mx-3'>
                {/* overlay */}
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                {/* img */}
                <img className='group-hover:scale-125 transition-all duration-500 w-full h-full object-cover' src={img3} alt='' />
                {/* pretitle */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-gradient'>Henry's Bootcamp Proyect</span>
                </div>
                {/* title */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                  <span className='text-3xl text-white'>
                    Rick & Morty API
                  </span>
                </div>
              </div>
            </a>

            {/* image 4*/}
            <a href='https://github.com/bautistax/qr-code-component-main'>
              <div className='w-full lg:w-80 h-72 group relative overflow-hidden border-2 border-white/50 rounded-xl mx-3'>
                {/* overlay */}
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                {/* img */}
                <img className='group-hover:scale-125 transition-all duration-500 w-full h-full object-cover' src={img4} alt='' />
                {/* pretitle */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-gradient'>Personal Proyect</span>
                </div>
                {/* title */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                  <span className='text-3xl text-white'>
                    QR-component
                  </span>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AllProyects;
