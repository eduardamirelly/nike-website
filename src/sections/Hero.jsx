import { useState } from "react"
import { arrowRight } from "../assets/icons"
import { bigShoe1 } from "../assets/images"
import Button from "../components/Button"
import ShoeCard from "../components/ShoeCard"
import { shoes, statistics } from "../constants"

import { motion } from "framer-motion"

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  const animationStartFromLeft = (delay) => ({
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
    transition: {
      duration: 1,
      delay: delay,
    }
  });

  return (
    <section 
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <motion.p 
          initial={animationStartFromLeft().initial}
          animate={animationStartFromLeft().animate}
          transition={animationStartFromLeft(0.5).transition}
          className="text-xl font-montserrat text-coral-red"
        >
          Our Summer Collection
        </motion.p>
        <motion.h1 
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
            delay: 1,
          }}
          className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold"
        >
          <span className="xl:bg-white xl:whitespace-nowrap relative max-lg:static z-10 pr-10">The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </motion.h1>

        <motion.p
          initial={animationStartFromLeft().initial}
          animate={animationStartFromLeft().animate}
          transition={animationStartFromLeft(1.5).transition}
          className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm"
        >
          Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
        </motion.p>

        <motion.div
          initial={animationStartFromLeft().initial}
          animate={animationStartFromLeft().animate}
          transition={animationStartFromLeft(1.5).transition}
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              transition: {
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
          >
            <Button 
              label="Shop now" 
              iconURL={arrowRight}
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={animationStartFromLeft().initial}
          animate={animationStartFromLeft().animate}
          transition={animationStartFromLeft(1.5).transition}
        >
          <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
            {statistics.map((stac) => (
              <div key={stac.label}>
                <p className="text-4xl font-palanquin font-bold">
                  {stac.value}
                </p>
                <p className="leading-7 font-montserrat text-slate-gray">
                  {stac.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 3,
          delay: 2,
        }}
        className="relative flex-1 flex justify-center items-center max-xl:py-40 bg-primary bg-hero bg-cover bg-center"
      >
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
        >
          <img
            src={bigShoeImg} 
            alt="shoe collection"
            width={610}
            height={500}
            className="object-contain relative z-10"
          />
        </motion.div>

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%]  sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe.id}>
              <ShoeCard
                imageURL={shoe}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Hero