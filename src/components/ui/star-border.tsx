
"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { useRef } from "react";

interface StarBorderProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
  as?: React.ElementType;
  speed?: "slow" | "medium" | "fast";
  [key: string]: any;
}

export function StarBorder({
  children,
  className,
  color = "#7E69AB",
  speed = "medium",
  as: Component = "button",
  ...otherProps
}: StarBorderProps) {
  const ref = useRef<HTMLElement>(null);

  const speedMap = {
    slow: "6s",
    medium: "4s",
    fast: "2s",
  };

  return (
    <Component
      ref={ref}
      className={cn(
        "relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50",
        className
      )}
      {...otherProps}
    >
      <span
        className="absolute inset-[-1000px] animate-[spin_2s_linear_infinite]"
        style={{
          background: `conic-gradient(from 90deg at 50% 50%, transparent 0%, ${color} 50%, transparent 100%)`,
          animationDuration: speedMap[speed],
        }}
      />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white backdrop-blur-3xl">
        {children}
      </span>
    </Component>
  );
}
