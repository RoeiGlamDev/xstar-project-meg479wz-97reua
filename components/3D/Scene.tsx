import { useEffect, useRef } from 'react';
import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

const Scene: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useEffect(() => {
    if (meshRef.current) {
      // Add any animations or effects to the mesh here
    }
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <motion.div
          ref={meshRef}
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          onHoverStart={(e) => {
            e.stopPropagation();
            // Add hover effect
            meshRef.current!.scale.set(1.1, 1.1, 1.1);
          }}
          onHoverEnd={(e) => {
            e.stopPropagation();
            // Revert hover effect
            meshRef.current!.scale.set(1, 1, 1);
          }}
          className="cursor-pointer"
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="orange" />
        </motion.mesh>
        <OrbitControls />
      </Canvas>

      <div className="absolute top-0 left-0 p-8">
        <h1 className="text-5xl font-bold text-orange-600">luxury LRP cosmetics</h1>
        <p className="mt-4 text-lg text-gray-700">
          Discover the elegance of luxury LRP cosmetics, where beauty meets sophistication. Our collection features high-end products designed to elevate your beauty routine.
        </p>
      </div>
    </div>
  );
};

export default Scene;