import { useEffect } from 'react';
import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

interface FloatingElementsProps {
  title?: string;
}

const FloatingElements: React.FC<FloatingElementsProps> = ({ title = "luxury LRP cosmetics" }) => {
  useEffect(() => {
    // Three.js scene setup can go here if needed
  }, []);

  return (
    <div className="relative w-full h-screen bg-white">
      <motion.div
        className="absolute top-10 left-1/2 transform -translate-x-1/2 text-center text-4xl font-bold text-orange-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {title}
      </motion.div>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 0, 5]} intensity={1} />
        {/ Add your 3D models here /}
        <OrbitControls />
      </Canvas>
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-lg text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Discover the elegance of luxury LRP cosmetics with our exclusive range of high-end products designed to enhance your beauty.
      </motion.div>
      <style jsx>{
        @keyframes float {
          0% { transform: translatey(0px); }
          50% { transform: translatey(-20px); }
          100% { transform: translatey(0px); }
        }
        .floating {
          animation: float 3s ease-in-out infinite;
        }
      }</style>
      <div className="floating absolute top-1/4 left-1/4 w-32 h-32 bg-orange-300 rounded-full opacity-70"></div>
      <div className="floating absolute top-1/4 right-1/4 w-32 h-32 bg-orange-500 rounded-full opacity-70"></div>
      <div className="floating absolute bottom-1/4 left-1/4 w-32 h-32 bg-orange-400 rounded-full opacity-70"></div>
    </div>
  );
};

export default FloatingElements;