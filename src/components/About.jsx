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
        <p className={styles.sectionSubText}>CAS Art</p>
        <h2 className={styles.sectionHeadText}>Introduction</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] w-full leading-[30px]'
      >
        Welcome to the CAS Art Exhibition Catalogue, a celebration of creativity, resilience, and human expression. 
        This collection features artwork created by Afghan artists residing at Camp As Sayliyah (CAS) in Qatar, 
        offering a unique glimpse into their experiences, perspectives, and talents. Art has served as more than a creative outlet; 
        it has become a source of healing, connection, and empowerment. Through painting, drawing, and other artistic mediums, 
        participants have found meaningful ways to express their identities, share their stories, and build confidence within their community. 
        Each artwork presented here reflects not only individual talent but also the strength and determination of artists who continue to create 
        despite uncertainty and displacement. By purchasing a piece, you are not only acquiring a unique work of art; you are also supporting the artists, 
        recognizing their achievements, and contributing to opportunities for greater self-reliance and financial empowerment. We invite you to explore 
        the collection and discover the stories behind each creation. Thank you for supporting art, dignity, and the transformative power of creativity.
      </motion.p>

      <motion.div 
        variants={textVariant()}
        className='mt-10'
      >
        <h5 className={styles.sectionHeadText}>Sample Art Work Size</h5>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
