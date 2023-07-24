import React from 'react';
import { Link } from 'react-scroll';
import Image from '../assets/computer.jpg';
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
const services = [
  {
    name: 'Front-end web Developer',
    description: 'A Front-end web developer plays a critical role in creating exceptional user experiences, translating designs and specifications into high-quality HTML, CSS, and JavaScript code. His focus is on the implementation of attractive, interactive and optimized interfaces for various devices and browsers.',
    link: 'learn more'
  },
];

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text & image */}
          <motion.div variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'
          >
            <h2 className='h2 text-accent mt-0 mb-4 lg:mb-6'>What I do</h2>
            <img className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0' src={Image} alt='computer' style={{ width: '500px' }} />
            <Link to='work'>
              <button className='btn btn-sm mt-3'>See my work</button>
            </Link>
          </motion.div>
          {/* services */}
          <motion.div variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            {/* services list */}
            <div>
              {services.map((service, index) => {
                //destructure services
                const { name, description, link } = service;
                return (
                  <div className='h-[146px] mb-[38px] flex mt-16' key={index}>
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                      <p className='font-secondary leading-tight '>{description}</p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <a href='https://resources.workable.com/front-end-developer-job-description#:~:text=A%20Front%2DEnd%20Developer%20is,to%20create%20the%20web%20pages.' 
                        className='btn w-9 h-9 mb-[10px] flex justify-center items-center'>
                        <BsArrowUpRight />
                      </a>
                      <p className='text-gradient text-sm'>{link}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>

  );
};

export default Services;
