import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
  icon: JSX.Element;
}

const features: Feature[] = [
  {
    title: 'Premium Ingredients',
    description: 'At luxury LRP cosmetics, we source only the finest ingredients to ensure unparalleled quality and effectiveness.',
    icon: <i className="fas fa-leaf text-orange-500"></i>,
  },
  {
    title: 'Elegant Packaging',
    description: 'Our products come in luxurious packaging that reflects the sophistication of luxury LRP cosmetics.',
    icon: <i className="fas fa-gift text-orange-500"></i>,
  },
  {
    title: 'Personalized Experience',
    description: 'Experience bespoke consultations and tailored product recommendations for your unique beauty needs.',
    icon: <i className="fas fa-user-circle text-orange-500"></i>,
  },
  {
    title: 'Sustainable Practices',
    description: 'Commitment to sustainability with eco-friendly packaging and cruelty-free formulations.',
    icon: <i className="fas fa-recycle text-orange-500"></i>,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-4xl font-bold text-center text-orange-500 mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Discover the Luxury of LRP Cosmetics
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-orange-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-center text-4xl mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-700">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;