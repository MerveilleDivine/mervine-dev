
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, OrbitControls } from '@react-three/drei';
import { Color } from 'three';

interface SkillSphereProps {
  skills: string[];
  color: string;
}

const SkillSphere = ({ skills, color }: SkillSphereProps) => {
  const groupRef = useRef<any>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={groupRef}>
      {skills.map((skill, index) => {
        const phi = Math.acos(-1 + (2 * index) / skills.length);
        const theta = Math.sqrt(skills.length * Math.PI) * phi;
        const radius = 3;
        
        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi);

        return (
          <Text
            key={index}
            position={[x, y, z]}
            fontSize={0.4}
            color={color}
            anchorX="center"
            anchorY="middle"
          >
            {skill}
          </Text>
        );
      })}
    </group>
  );
};

interface SkillsSphereProps {
  categoryData: {
    title: string;
    skills: string[];
    color: string;
  }[];
}

export const SkillsSphere = ({ categoryData }: SkillsSphereProps) => {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 50 }} className="w-full h-[500px] bg-transparent">
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      
      {categoryData.map((category, index) => (
        <SkillSphere 
          key={index} 
          skills={category.skills} 
          color={category.color}
        />
      ))}
      
      <OrbitControls 
        enableZoom={false}
        autoRotate={true}
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
};

export default SkillsSphere;
