import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  logoUrl: string;
}

const Header: React.FC<HeaderProps> = ({ logoUrl }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-5">
        <motion.div 
          className="flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src={logoUrl} alt="luxury LRP cosmetics Logo" className="h-12" />
          <h1 className="text-orange-600 text-3xl font-bold ml-2">luxury LRP cosmetics</h1>
        </motion.div>
        <nav className="hidden md:flex space-x-8">
          <motion.div 
            href="#products" 
            className="text-gray-800 hover:text-orange-600 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Products
          </motion.a>
          <motion.div 
            href="#about" 
            className="text-gray-800 hover:text-orange-600 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            About Us
          </motion.a>
          <motion.div 
            href="#contact" 
            className="text-gray-800 hover:text-orange-600 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Contact
          </motion.a>
        </nav>
        <button 
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? 'Close' : 'Menu'}
        </button>
      </div>
      {isMobileMenuOpen && (
        <motion.div 
          className="md:hidden bg-white p-5"
          initial={{ opacity: 0, height: 0}}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            href="#products" 
            className="block text-gray-800 hover:text-orange-600 py-2 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Products
          </motion.a>
          <motion.div 
            href="#about" 
            className="block text-gray-800 hover:text-orange-600 py-2 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            About Us
          </motion.a>
          <motion.div 
            href="#contact" 
            className="block text-gray-800 hover:text-orange-600 py-2 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Contact
          </motion.a>
        </motion.div>
      )}
    </header>
  );
};

export default Header;