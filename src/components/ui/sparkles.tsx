
"use client";
import React, { useId } from "react";
import { motion } from "framer-motion";

interface SparklesProps {
  id?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  className?: string;
  particleColor?: string;
}

export const SparklesCore = (props: SparklesProps) => {
  const {
    id,
    background,
    minSize,
    maxSize,
    particleDensity,
    className,
    particleColor,
  } = props;
  const generateId = useId();
  return (
    <div className={className}>
      <svg
        className="absolute inset-0 h-full w-full"
        width="100%"
        height="100%"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath={`url(#clip-${id || generateId})`}>
          <g transform="translate(200,200)">
            {[...Array(particleDensity || 50)].map((_, i) => {
              const r = Math.random() * (maxSize || 3) + (minSize || 1);
              const cx = Math.random() * 400 - 200;
              const cy = Math.random() * 400 - 200;
              return (
                <motion.circle
                  key={`particle-${i}`}
                  r={r}
                  cx={cx}
                  cy={cy}
                  fill={particleColor || "#8B5CF6"}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: Math.random() * 2 + 1,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              );
            })}
          </g>
        </g>
        <defs>
          <clipPath id={`clip-${id || generateId}`}>
            <rect width="100%" height="100%" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export const Sparkles = ({ children, ...props }: SparklesProps & { children: React.ReactNode }) => {
  return (
    <div className="relative">
      <SparklesCore {...props} />
      {children}
    </div>
  );
};
