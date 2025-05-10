
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, OrbitControls, useTexture } from '@react-three/drei';
import { Color, MeshStandardMaterial, Vector3 } from 'three';

interface SkillSphereProps {
  skills: string[];
  color: string;
  images?: string[];
}

const SkillSphere = ({ skills, color, images = [] }: SkillSphereProps) => {
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

        // If we have images, use them instead of text
        if (images && images[index]) {
          return (
            <TechBall 
              key={index}
              position={[x, y, z]}
              image={images[index]}
              name={skill}
            />
          );
        }

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

interface TechBallProps {
  position: [number, number, number];
  image: string;
  name: string;
}

const TechBall = ({ position, image, name }: TechBallProps) => {
  const [hovered, setHovered] = useState(false);
  const matRef = useRef<MeshStandardMaterial>(null);
  const meshRef = useRef<any>(null);
  const originalPosition = useRef(new Vector3(...position));
  const originalScale = useRef(new Vector3(1, 1, 1));
  
  // Load texture
  const texture = useTexture(image);
  
  useFrame(() => {
    if (!meshRef.current) return;
    
    if (hovered) {
      meshRef.current.scale.lerp(new Vector3(1.2, 1.2, 1.2), 0.1);
      meshRef.current.position.lerp(
        new Vector3(
          originalPosition.current.x * 1.1, 
          originalPosition.current.y * 1.1, 
          originalPosition.current.z * 1.1
        ), 
        0.1
      );
    } else {
      meshRef.current.scale.lerp(originalScale.current, 0.1);
      meshRef.current.position.lerp(originalPosition.current, 0.1);
    }
  });

  return (
    <>
      <mesh
        ref={meshRef}
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <octahedronGeometry args={[0.6, 2]} />
        <meshStandardMaterial 
          ref={matRef}
          map={texture} 
          roughness={0.4}
          metalness={0.5}
          emissive={hovered ? new Color(color) : new Color(0x000000)}
          emissiveIntensity={hovered ? 0.5 : 0}
        />
      </mesh>
      
      {hovered && (
        <Text
          position={[position[0], position[1] - 1, position[2]]}
          fontSize={0.3}
          color="white"
          anchorX="center"
          anchorY="middle"
          userData={{ keepAlive: true }}
        >
          {name}
        </Text>
      )}
    </>
  );
};

interface SkillsSphereProps {
  categoryData: {
    title: string;
    skills: string[];
    color: string;
    images?: string[];
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
          images={category.images}
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
