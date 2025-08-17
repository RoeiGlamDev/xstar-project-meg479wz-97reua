import React from 'react';
import { motion } from 'framer-motion';

interface PricingPlan {
  name: string;
  price: string;
  features: string[];
}

const pricingPlans: PricingPlan[] = [
  {
    name: 'Gold Package',
    price: '$199',
    features: ['Premium skincare consultation', 'Luxury product samples', 'Personalized skincare routine'],
  },
  {
    name: 'Platinum Package',
    price: '$299',
    features: ['All Gold Package features', 'Exclusive VIP access to new products', 'Monthly follow-up consultations'],
  },
  {
    name: 'Diamond Package',
    price: '$499',
    features: ['All Platinum Package features', 'Personal beauty advisor', 'Complimentary luxury gift set'],
  },
];

const FAQData = [
  {
    question: 'What is included in the Gold Package?',
    answer: 'The Gold Package includes a premium skincare consultation, luxury product samples, and a personalized skincare routine tailored just for you.',
  },
  {
    question: 'How do I book a consultation?',
    answer: 'You can book a consultation through our website or by contacting our customer service.',
  },
  {
    question: 'Are the products cruelty-free?',
    answer: 'Yes, all of our products are cruelty-free and made with the highest quality ingredients.',
  },
];

const PricingPage: React.FC = () => {
  return (
    <div className="bg-white text-orange-600 p-10">
      <motion.div
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Luxury LRP Cosmetics Pricing
      </motion.h1>
      <motion.div
        className="flex justify-center mb-12"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <table className="min-w-full border-collapse border border-orange-600">
          <thead>
            <tr className="bg-orange-600 text-white">
              <th className="border border-white p-4">Plan</th>
              <th className="border border-white p-4">Price</th>
              <th className="border border-white p-4">Features</th>
            </tr>
          </thead>
          <tbody>
            {pricingPlans.map((plan) => (
              <tr key={plan.name} className="hover:bg-orange-100 transition duration-300">
                <td className="border border-orange-600 p-4">{plan.name}</td>
                <td className="border border-orange-600 p-4">{plan.price}</td>
                <td className="border border-orange-600 p-4">
                  <ul className="list-disc list-inside">
                    {plan.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
      <motion.div
        className="text-3xl font-bold text-center mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Frequently Asked Questions
      </motion.h2>
      <div className="space-y-4">
        {FAQData.map((faq, index) => (
          <div key={index} className="border border-orange-600 p-4 rounded-lg hover:bg-orange-50 transition duration-300">
            <h3 className="font-semibold">{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;