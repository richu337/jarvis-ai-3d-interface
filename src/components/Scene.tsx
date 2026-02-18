import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import Helmet from './Helmet';
import AIFace from './AIFace';
import * as THREE from 'three';
import gsap from 'gsap';

interface SceneProps {
  isActive: boolean;
  message: string;
}

const Scene: React.FC<SceneProps> = ({ isActive, message }) => {
  const helmetRef = useRef<THREE.Group>(null);
  const faceRef = useRef<THREE.Group>(null);

  useEffect(() => {
    if (!helmetRef.current) return;

    if (isActive) {
      // Entry animation
      gsap.timeline()
        .fromTo(
          helmetRef.current.position,
          { z: -20, y: 5 },
          { z: 0, y: 0, duration: 1.5, ease: 'power2.out' }
        )
        .to(
          helmetRef.current.rotation,
          { y: Math.PI * 2, duration: 2, ease: 'power1.inOut' },
          '-=0.5'
        );

      // Face appears after helmet settles
      setTimeout(() => {
        if (faceRef.current) {
          gsap.to(faceRef.current.scale, {
            x: 1,
            y: 1,
            z: 1,
            duration: 0.8,
            ease: 'back.out'
          });
        }
      }, 1500);
    } else {
      // Exit animation
      if (faceRef.current) {
        gsap.to(faceRef.current.scale, {
          x: 0,
          y: 0,
          z: 0,
          duration: 0.5,
          ease: 'back.in'
        });
      }

      setTimeout(() => {
        if (helmetRef.current) {
          gsap.to(helmetRef.current.position, {
            z: -20,
            y: 5,
            duration: 1.5,
            ease: 'power2.in'
          });
        }
      }, 500);
    }
  }, [isActive]);

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#ff0000" />
      <pointLight position={[-10, -10, 10]} intensity={0.5} color="#ffd700" />
      <spotLight
        position={[0, 5, 5]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        color="#ffd700"
      />

      {/* Helmet Group */}
      <group ref={helmetRef} position={[0, 0, -20]}>
        <Helmet />
        <group ref={faceRef} scale={[0, 0, 0]}>
          <AIFace isActive={isActive} />
        </group>
      </group>
    </>
  );
};

export default Scene;