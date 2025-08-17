import React from 'react';
import { motion } from 'framer-motion';

interface ContactFormProps {
  name: string;
  email: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="bg-white text-orange-600 p-8 md:p-16 lg:p-24">
      <motion.div 
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        Contact luxury LRP cosmetics
      </motion.h1>
      <motion.div 
        className="text-lg mb-12 text-center"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.7 }}
      >
        We are here to assist you with any inquiries about our luxury cosmetics collection.
      </motion.p>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-orange-100 p-8 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            required 
            className="border border-orange-400 rounded-md w-full p-2 focus:ring-2 focus:ring-orange-600"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            required 
            className="border border-orange-400 rounded-md w-full p-2 focus:ring-2 focus:ring-orange-600"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
          <textarea 
            id="message" 
            name="message" 
            required 
            className="border border-orange-400 rounded-md w-full p-2 focus:ring-2 focus:ring-orange-600"
          />
        </div>
        <motion.div 
          type="submit" 
          className="bg-orange-600 text-white font-bold py-2 px-4 rounded-md hover:bg-orange-500 transition duration-300"
          whileHover={{ scale: 1.05 }}
        >
          Send Message
        </motion.button>
      </form>
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Location</h2>
        <p className="text-lg">Visit us at:</p>
        <p className="text-lg">123 Luxury Ave, Glamour City, CA 90210</p>
      </div>
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Business Hours</h2>
        <p className="text-lg">Monday - Friday: 9 AM - 6 PM</p>
        <p className="text-lg">Saturday: 10 AM - 4 PM</p>
        <p className="text-lg">Sunday: Closed</p>
      </div>
    </div>
  );
};

export default ContactPage;