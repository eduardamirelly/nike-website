import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constants"

import { motion } from "framer-motion"

const CustomerReviews = () => {
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
      className="max-container"
    >
      <h3 className="text-4xl text-center font-palanquin font-bold">
        What Our
        <span className="text-coral-red"> Customers </span>
        Say?
      </h3>
      <p className="info-text mt-4 m-auto max-w-lg text-center">
        Hear genuine stories from our satisfied customers about their exceptional experiences with us.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </motion.section>
  )
}

export default CustomerReviews