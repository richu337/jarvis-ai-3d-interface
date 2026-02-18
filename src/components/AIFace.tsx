import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface AIFaceProps {
  isActive: boolean;
}

const AIFace: React.FC<AIFaceProps> = ({ isActive }) => {
  const particlesRef = useRef<THREE.Points>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  // Create particle system for hologram effect
  const particles = useMemo(() => {
    const count = 1000;
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const radius = Math.random() * 0.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);
    }
    
    return positions;
  }, []);

  useFrame((state) => {
    if (particlesRef.current && isActive) {
      particlesRef.current.rotation.y += 0.01;
      
      // Pulsing effect
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
      particlesRef.current.scale.set(scale, scale, scale);
    }

    if (ringRef.current && isActive) {
      ringRef.current.rotation.z += 0.02;
    }
  });

  return (
    <group position={[0, 0.1, 0.9]}>
      {/* Holographic Particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particles.length / 3}
            array={particles}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.02}
          color="#00ffff"
          transparent
          opacity={0.8}
          blending={THREE.AdditiveBlending}
          sizeAttenuation
        />
      </points>

      {/* Rotating Ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[0.6, 0.02, 16, 100]} />
        <meshBasicMaterial
          color="#ffd700"
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Center Sphere */}
      <mesh>
        <sphereGeometry args={[0.15, 32, 32]} />
        <meshBasicMaterial
          color="#00ffff"
          transparent
          opacity={0.5}
          wireframe
        />
      </mesh>

      {/* Glow Effect */}
      <pointLight position={[0, 0, 0]} intensity={3} color="#00ffff" distance={5} />
    </group>
  );
};

export default AIFace;