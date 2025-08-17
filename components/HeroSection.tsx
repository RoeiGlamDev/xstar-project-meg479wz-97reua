import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section className="relative flex items-center justify-center h-screen overflow-hidden bg-gradient-to-r from-orange-500 to-white">
      <motion.div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: ''url(/images/luxury-background.jpg)' '}}
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
      />
      <div className="relative z-10 flex flex-col items-center text-center text-white p-8">
        <motion.div 
          className="text-5xl font-bold mb-4"
          initial={{ y: -50 }} 
          animate={{ y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          luxury LRP cosmetics
        </motion.h1>
        <motion.div 
          className="text-xl mb-8"
          initial={{ y: -30 }} 
          animate={{ y: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Discover the ultimate in luxury cosmetics that elevate your beauty routine with our premium quality products.
        </motion.p>
        <motion.div 
          href="/shop" 
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out"
          initial={{ scale: 1 }} 
          whileHover={{ scale: 1.05 }} 
          transition={{ duration: 0.3 }}
        >
          Shop Now
        </motion.a>
        <div className="mt-6 space-x-4">
          <span className="text-sm text-orange-300">Trusted by beauty enthusiasts worldwide</span>
          <span className="text-sm text-orange-300">Satisfaction Guaranteed</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;