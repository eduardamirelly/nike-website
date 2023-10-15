import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

import { motion } from "framer-motion"

const SpecialOffer = () => {
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
      className="max-container flex max-xl:flex-col-reverse gap-10 items-center justify-between w-full"
    >
      <div className="flex-1">
        <img 
          src={offer} 
          alt="special offer"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          <span className="text-coral-red"> Special </span> Offer 
        </h2>
        <p className="lg:max-w-lg mt-4 info-text">
          Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible saving, we offer unparalleled value that sets us apart.
        </p>
        <p className="lg:max-w-lg mt-6 info-text">
          Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.
        </p>

        <div className="mt-11 flex flex-wrap gap-4">
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
            <Button label="Shop now" iconURL={arrowRight} />
          </motion.div>

          <Button 
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </motion.section>
  )
}

export default SpecialOffer