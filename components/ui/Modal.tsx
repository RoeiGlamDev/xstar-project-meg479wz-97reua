import React from 'react';
import { motion } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md">
      <motion.div
        className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
      >
        <div className="p-6">
          <h2 className="text-3xl font-bold text-orange-600 mb-4">{title}</h2>
          <p className="text-gray-700">{content}</p>
          <button
            onClick={onClose}
            className="mt-4 bg-orange-600 text-white font-semibold py-2 px-4 rounded transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
          >
            Close
          </button>
        </div>
      </motion.div>
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      />
    </div>
  );
};

export default Modal;