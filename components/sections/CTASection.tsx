import React from 'react';
import { motion } from 'framer-motion';

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title = "Elevate Your Beauty with luxury LRP cosmetics",
  subtitle = "Indulge in our exclusive range of high-end cosmetics that redefine luxury.",
  buttonText = "Shop Now",
  buttonLink = "/shop",
}) => {
  return (
    <section className="flex flex-col items-center justify-center py-20 bg-white">
      <motion.div
        className="text-4xl font-bold text-orange-600 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      <motion.div
        className="text-lg text-gray-700 mb-8 text-center max-w-2xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {subtitle}
      </motion.p>
      <motion.div
        href={buttonLink}
        className="px-6 py-3 bg-orange-600 text-white font-semibold text-lg rounded-lg shadow-lg transform transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {buttonText}
      </motion.a>
    </section>
  );
};

export default CTASection;