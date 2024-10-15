import React, { useEffect } from 'react';
import Cards from './Cards';
import Carousel from './Carousel';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Jobs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
    });
  }, []);

  return (
    <section
      className='bg-black mt-8 md:mb-8 mb-28 text-white w-full'
      id='jobs'
      data-aos='fade-up'
    >
      <p className='ml-8 text-xs bg-white/65 p-2 rounded-xl w-fit text-white'>
        ⚪ Work Experience
      </p>
      <div className='flex lg:flex-row flex-col justify-around mt-10 px-6'>
        <div className='lg:w-1/2'>
          <h1 className='font-poppins font-normal text-4xl p-4'>
            Professional Experience Highlights
          </h1>
          <p className='font-inconsolata-condensed lg:w-2/3 mt-8 px-4 text-justify'>
            Over the years, I've had the opportunity to work on a diverse range of projects in the tech industry. 
            My roles have spanned from software development to project management, allowing me to collaborate with 
            cross-functional teams and deliver solutions that drive business success. I've consistently focused on 
            implementing innovative technologies, optimizing workflows, and ensuring project milestones are met on time 
            and within scope. My experience has equipped me with a deep understanding of both technical and strategic 
            aspects of software development, making me a valuable asset to any project I take on.
          </p>
        </div>
        <div className='md:w-1/2'>
          <Carousel />
        </div>
      </div>
    </section>
  );
};

export default Jobs;
