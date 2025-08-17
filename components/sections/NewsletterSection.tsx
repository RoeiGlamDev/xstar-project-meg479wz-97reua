import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NewsletterSectionProps {
  className?: string;
}

const NewsletterSection: React.FC<NewsletterSectionProps> = ({ className }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the email submission logic (e.g., API call)
    setSubmitted(true);
  };

  return (
    <section className={`bg-white p-8 rounded-lg shadow-lg ${className`}}>
      <motion.div
        className="text-3xl font-bold text-center text-orange-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Join the Luxury LRP Cosmetics Family
      </motion.h2>
      <p className="mt-4 text-center text-gray-700">
        Be the first to know about exclusive offers, new arrivals, and beauty tips from luxury LRP cosmetics.
      </p>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col items-center">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-2 w-64 border border-orange-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
          />
          <motion.div
            type="submit"
            className="mt-4 bg-orange-600 text-white p-2 rounded-lg transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sign Up
          </motion.button>
        </form>
      ) : (
        <motion.div
          className="mt-6 text-center text-orange-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p>Thank you for signing up! Welcome to luxury LRP cosmetics.</p>
        </motion.div>
      )}
    </section>
  );
};

export default NewsletterSection;