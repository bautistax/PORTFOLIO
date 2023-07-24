import React from 'react';
import { Link } from 'react-scroll';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* text */}
          <motion.div variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            <h2 className='h2 text-accent'>About me.</h2>
            <h3 className='h3 mb-4'>I'm a Front-end web developer with 1 year of experience </h3>
            <p className='mb-6'>
              I am a junior fullstack programmer focused on frontend programming. One of my biggest motivations is to learn new skills. I recently finished the course at Henry, where I had the opportunity to work on various projects, using technologies and frameworks such as Javascript, HMTL/CSS, React, Redux, Tailwind CSS, among others; and develop my skills in the world of software. My experience in Henry's projects allowed me to apply my knowledge and work in a team, which gave me a complete vision of software development. I now hope to take my skills to the next level and continue learning in a work environment.
            </p>
            {/* stats */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={1} duration={7} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={4} duration={5} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projects <br />
                  Completed
                </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
              <Link to='contact'>
                <button className='btn btn-lg'>Contact me</button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
