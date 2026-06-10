import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-[40vh] mx-auto flex items-center`}>
      <div
        className={`max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-40 h-20 violet-gradient' />
        </div>

        <div>
          <h3 className={`${styles.heroHeadText} text-white`}>
            Every Artist <span className='text-[#915EFF]'>Tells a Story</span>
          </h3>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Explore unique artworks, <br className='sm:block hidden' />
            find pieces that speak to you
          </p>
        </div>
      </div>


    </section>
  );
};

export default Hero;
