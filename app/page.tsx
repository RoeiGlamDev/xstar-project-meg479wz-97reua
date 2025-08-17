import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  title: string;
  subtitle: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle }) => {
  return (
    <div className="relative overflow-hidden bg-orange-500">
      <div className="max-w-7xl mx-auto py-20 px-6 lg:px-8">
        <motion.div
          className="text-white text-5xl font-extrabold leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {title}
        </motion.h1>
        <motion.div
          className="mt-4 text-white text-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {subtitle}
        </motion.p>
      </div>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-orange-500 text-4xl font-bold text-center">Our Luxury Features</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <motion.div
            className="bg-orange-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-orange-500">Premium Ingredients</h3>
            <p className="mt-2 text-gray-700">
              We use only the finest ingredients to ensure your skin feels luxurious and rejuvenated.
            </p>
          </motion.div>
          <motion.div
            className="bg-orange-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-orange-500">Elegant Packaging</h3>
            <p className="mt-2 text-gray-700">
              Our products come in beautifully designed packaging, reflecting the luxury inside.
            </p>
          </motion.div>
          <motion.div
            className="bg-orange-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-orange-500">Exclusive Collections</h3>
            <p className="mt-2 text-gray-700">
              Discover our exclusive collections that are crafted to meet the highest standards of beauty.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero title="Welcome to luxury LRP cosmetics" subtitle="Experience the Essence of Elegance" />
      <Features />
    </div>
  );
};

export default HomePage;