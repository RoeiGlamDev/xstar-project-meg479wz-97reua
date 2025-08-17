import React from 'react';
import { motion } from 'framer-motion';

interface PricingTier {
  name: string;
  price: string;
  features: string[];
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Essence Glow Package',
    price: '$99',
    features: [
      'Luxury Facial Treatment',
      'Hydrating Serum Application',
      'Customized Makeup Consultation',
      'Free Sample of our Signature Lip Gloss',
    ],
  },
  {
    name: 'Radiance Luxe Package',
    price: '$149',
    features: [
      'Essence Glow Package Features',
      'Luxury Makeup Application',
      'Personalized Skincare Regimen',
      'Exclusive Access to New Product Launches',
    ],
  },
  {
    name: 'Ultimate Glam Package',
    price: '$249',
    features: [
      'Radiance Luxe Package Features',
      'Premium Skin Treatment',
      'One-on-One Makeup Masterclass',
      'VIP Membership for Future Discounts',
    ],
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <motion.div
          className="text-4xl font-bold mb-8 text-orange-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Luxury LRP Cosmetics Pricing
        </motion.h2>
        <motion.div
          className="text-lg mb-10 text-gray-700"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Discover our exquisite service packages tailored to enhance your beauty.
        </motion.p>
        <div className="flex flex-wrap justify-center">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              className="bg-orange-100 border border-orange-300 rounded-lg shadow-lg m-4 p-6 w-full max-w-xs transition-transform transform hover:scale-105"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-orange-600 mb-4">
                {tier.name}
              </h3>
              <p className="text-xl font-bold text-orange-700 mb-4">
                {tier.price}
              </p>
              <ul className="list-disc list-inside mb-6">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-600">
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-500 transition duration-300">
                Book Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;