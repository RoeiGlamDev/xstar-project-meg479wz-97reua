import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/
 * Custom hook for creating 3D interactive elements for the luxury LRP cosmetics website.
 * This hook leverages Three.js to provide a high-end, luxury design experience.
 * 
 * @returns {Object} - An object containing the 3D scene and animation functions.
 */
const use3D = () => {
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationIdRef = useRef<number | null>(null);

  // Initialize the 3D scene
  const initScene = () => {
    // Create scene
    sceneRef.current = new THREE.Scene();
    
    // Set camera
    cameraRef.current = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    cameraRef.current.position.z = 5;

    // Create renderer
    rendererRef.current = new THREE.WebGLRenderer({ antialias: true });
    rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    rendererRef.current.setClearColor(0xffffff, 1); // White background
    document.body.appendChild(rendererRef.current.domElement);

    // Add lighting for luxury effect
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    sceneRef.current.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(10, 10, 10);
    sceneRef.current.add(pointLight);
  };

  // Animation loop
  const animate = () => {
    if (sceneRef.current && rendererRef.current && cameraRef.current) {
      requestAnimationFrame(animate);
      // Rotate the scene for a dynamic luxury effect
      sceneRef.current.rotation.y += 0.01;
      rendererRef.current.render(sceneRef.current, cameraRef.current);
    }
  };

  // Handle window resize
  const handleResize = () => {
    if (rendererRef.current && cameraRef.current) {
      const width = window.innerWidth;
      const height = window.innerHeight;
      rendererRef.current.setSize(width, height);
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
    }
  };

  // Set up the scene and animation on mount
  useEffect(() => {
    initScene();
    animate();
    window.addEventListener('resize', handleResize);

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      window.removeEventListener('resize', handleResize);
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, []);

  return {
    scene: sceneRef.current,
    camera: cameraRef.current,
    renderer: rendererRef.current,
  };
};

export default use3D;