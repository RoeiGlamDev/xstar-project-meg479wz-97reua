import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, onClick }) => {
  const baseStyles = 'px-6 py-3 rounded-lg focus:outline-none transition duration-300 ease-in-out';
  
  const primaryStyles = 'bg-orange-500 text-white hover:bg-orange-600 transform hover:scale-105';
  const secondaryStyles = 'bg-white text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white transform hover:scale-105';

  const styles = variant === 'primary' ? primaryStyles : secondaryStyles;

  return (
    <motion.div
      className={`${baseStyles`} ${styles}}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={Button for luxury LRP cosmetics - ${children}}
    >
      {children}
    </motion.button>
  );
};

export default Button;