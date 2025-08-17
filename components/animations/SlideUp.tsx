import React from 'react';
import { motion } from 'framer-motion';

interface SlideUpProps {
  children: React.ReactNode;
}

const SlideUp: React.FC<SlideUpProps> = ({ children }) => {
  const slideUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
      initial="hidden"
      animate="visible"
      variants={slideUpVariants}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-orange-600 mb-4">luxury LRP cosmetics</h2>
      <p className="text-gray-700 text-lg">
        Experience the epitome of elegance with our luxury cosmetic line. Every product is crafted to enhance your natural beauty while embodying sophistication and style.
      </p>
      <p className="text-gray-500 mt-2">
        Discover our exclusive range of high-end formulations that cater to your unique skin needs. From luxurious foundations to vibrant lip colors, each product is designed to elevate your beauty routine.
      </p>
      <div className="mt-4">
        <button className="bg-orange-600 text-white font-semibold py-2 px-4 rounded hover:bg-orange-500 transition duration-300">
          Shop Now
        </button>
      </div>
    </motion.div>
  );
};

export default SlideUp;