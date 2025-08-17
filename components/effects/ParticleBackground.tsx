import { useEffect } from 'react';
import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';
import { ParticleSystem } from 'three/examples/jsm/particles/ParticleSystem.js';
import { motion } from 'framer-motion';

const ParticleBackground: React.FC = () => {
  useEffect(() => {
    const canvas = document.querySelector('#particle-canvas');
    if (canvas) {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ canvas });

      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.position.z = 5;

      const particles = new ParticleSystem();
      const particleMaterial = new THREE.PointsMaterial({
        color: new THREE.Color('orange'),
        size: 0.1,
      });

      const particleGeometry = new THREE.BufferGeometry();
      const particleCount = 5000;
      const positions = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount; i++) {
        positions.set([Math.random()  10 - 5, Math.random()  10 - 5, Math.random()  10 - 5], i  3);
      }
      particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
      scene.add(particleSystem);

      const animate = () => {
        requestAnimationFrame(animate);
        particleSystem.rotation.y += 0.001;
        renderer.render(scene, camera);
      };
      animate();

      return () => {
        // Cleanup
        renderer.dispose();
      };
    }
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <Canvas id="particle-canvas" className="w-full h-full" />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <motion.div
          className="text-5xl text-white font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          luxury LRP cosmetics
        </motion.h1>
      </div>
    </div>
  );
};

export default ParticleBackground;