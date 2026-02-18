import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Helmet: React.FC = () => {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      // Subtle idle rotation
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Main Helmet Body */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1.2, 32, 32, 0, Math.PI * 2, 0, Math.PI * 0.6]} />
        <meshStandardMaterial
          color="#8B0000"
          metalness={0.9}
          roughness={0.2}
          emissive="#ff0000"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Visor/Face Plate */}
      <mesh position={[0, 0.1, 0.8]} rotation={[0.2, 0, 0]}>
        <boxGeometry args={[1.4, 0.6, 0.1]} />
        <meshStandardMaterial
          color="#1a1a1a"
          metalness={1}
          roughness={0.1}
          emissive="#ffd700"
          emissiveIntensity={0.5}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Gold Accents - Left */}
      <mesh position={[-0.6, 0.3, 0.7]}>
        <boxGeometry args={[0.15, 0.4, 0.08]} />
        <meshStandardMaterial
          color="#ffd700"
          metalness={1}
          roughness={0.2}
          emissive="#ffd700"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Gold Accents - Right */}
      <mesh position={[0.6, 0.3, 0.7]}>
        <boxGeometry args={[0.15, 0.4, 0.08]} />
        <meshStandardMaterial
          color="#ffd700"
          metalness={1}
          roughness={0.2}
          emissive="#ffd700"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Eyes Glow - Left */}
      <mesh position={[-0.35, 0.2, 0.85]}>
        <circleGeometry args={[0.12, 16]} />
        <meshBasicMaterial color="#00ffff" transparent opacity={0.9} />
        <pointLight position={[0, 0, 0.5]} intensity={2} color="#00ffff" distance={3} />
      </mesh>

      {/* Eyes Glow - Right */}
      <mesh position={[0.35, 0.2, 0.85]}>
        <circleGeometry args={[0.12, 16]} />
        <meshBasicMaterial color="#00ffff" transparent opacity={0.9} />
        <pointLight position={[0, 0, 0.5]} intensity={2} color="#00ffff" distance={3} />
      </mesh>

      {/* Chin Guard */}
      <mesh position={[0, -0.5, 0.6]}>
        <boxGeometry args={[1, 0.3, 0.4]} />
        <meshStandardMaterial
          color="#8B0000"
          metalness={0.9}
          roughness={0.2}
        />
      </mesh>

      {/* Top Crest */}
      <mesh position={[0, 0.8, 0.2]}>
        <boxGeometry args={[0.6, 0.2, 0.6]} />
        <meshStandardMaterial
          color="#ffd700"
          metalness={1}
          roughness={0.1}
          emissive="#ffd700"
          emissiveIntensity={0.2}
        />
      </mesh>
    </group>
  );
};

export default Helmet;