import ServiceCard from "../components/ServiceCard"
import { services } from "../constants"

import { motion } from "framer-motion"

const Services = () => {
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
      className="max-container flex justify-center flex-wrap gap-9"
    >
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </motion.section>
  )
}

export default Services