import Button from "../components/Button"

import { motion } from "framer-motion"

const Subscribe = () => {
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
      id="contact-us"
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-lg font-palanquin font-bold">
        Sign Up from
        <span className="text-coral-red"> Updates </span>
        & Newsletter
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input 
          type="text" 
          name="subscribe" 
          placeholder="subscribe@nike.com"
          id="" 
          className="input"
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button 
            label="SignUp"
            fullWidth
          />
        </div>
      </div>
    </motion.section>
  )
}

export default Subscribe