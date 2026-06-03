import React from "react";
//import Tilt from "react-tilt";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

/*const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full  rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] min-h-70 flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='canvas'
          className='w-72 h-72 object-contain'
        />
        
      </div>
        
    </motion.div>
  </Tilt>
);
*/

const ServiceCard = ({ index, title, icon, size }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full rounded-[20px] shadow-card"
    >
      <div
        className="bg-tertiary rounded-[20px] min-h-[350px] flex flex-col justify-center items-center p-4"
      >
        <img
          src={icon}
          alt={title}
          className="w-72 h-72 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center mt-4">
          {title}
        </h3>

        <h4 className="text-white text-[20px] font-normal text-center ">
          {size}
        </h4>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Sample Art Works</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        This platform is a space where creativity meets expression. 
        We bring together original artworks crafted with passion and imagination, 
        giving each piece a chance to be seen, appreciated, and owned. 
        Art here is more than decoration—it is a story waiting to be shared.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
