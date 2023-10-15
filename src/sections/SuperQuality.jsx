import { shoe8 } from '../assets/images';
import Button from '../components/Button';

import { motion } from "framer-motion"

const SuperQuality = () => {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 100,
        scale: 0.8,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 1,
        delay: 0.5,
      }}
      viewport={{ once: true }}
      id="about-us"
      className="flex max-lg:flex-col items-center gap-10 justify-between w-full max-container"
    >
      <div className="flex-1 flex flex-col">
        <h3 className="text-4xl font-palanquin font-bold lg:max-w-lg">
          We Provide You <span className="text-coral-red">Super Quality</span> Shoes
        </h3>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction.
        </p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>
      <motion.div 
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -20],
        }}
        transition={{
          duration: 0.9,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="flex-1 flex justify-center items-center"
      >
        <img 
          src={shoe8} 
          alt="shoe collection" 
          width={570}
          height={522}
          className="object-contain"
        />
      </motion.div>
    </motion.section>
  )
}

export default SuperQuality