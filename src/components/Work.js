import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';
import img1 from '../assets/BookBuster.jpeg';

const Work = () => {
  return (
    
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-12 mb-7 lg:mb-0'>
            {/* text */}
            <div className='lg:mr-16'>
              <h2 className='h2 leading-tight text-accent'>
                My latest <br />
                Work.
              </h2>
              <p className='max-w-sm mb-10'>
                </p>
              <Link to='proyects'>
                <button className='btn btn-sm'>View all proyects</button>
              </Link>
            </div>
          </motion.div>
          {/* New wrapper div to prevent centering */}
          <div className="lg:flex-1 lg:ml-auto">
            <motion.div
              variants={fadeIn('left', 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className='flex-1 flex flex-col gap-y-10'>

              {/* image */}
              <a href='https://book-buster-front-fhekz.vercel.app'>
              <div className='lg:flex-shrink-0 w-30 h-30 group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                {/* overlay */}
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                {/* img */}
                <img className='group-hover:scale-125 transition-all duration-500' src={img1} alt='' />
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
            </motion.div>
          </div>
        </div>
      </div>
  );
};

export default Work;
