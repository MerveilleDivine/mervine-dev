
"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface StarBorderProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
  as?: React.ElementType;
  variant?: "primary" | "secondary";
  [key: string]: any;
}

export function StarBorder({
  children,
  className,
  color,
  variant = "primary",
  as: Component = "button",
  ...otherProps
}: StarBorderProps) {
  const getVariantStyles = () => {
    if (variant === "primary") {
      return {
        background: "linear-gradient(135deg, #7E69AB 0%, #9B7EDE 100%)",
        hover: "hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105"
      };
    } else {
      return {
        background: "linear-gradient(135deg, #FEC6A1 0%, #FFB085 100%)",
        hover: "hover:shadow-lg hover:shadow-orange-500/25 hover:scale-105"
      };
    }
  };

  const styles = getVariantStyles();

  return (
    <Component
      className={cn(
        "relative inline-flex items-center justify-center px-8 py-4 text-white font-semibold rounded-full transition-all duration-300 cursor-pointer border-0 outline-none",
        styles.hover,
        "active:scale-95 focus:ring-4 focus:ring-purple-500/20",
        className
      )}
      style={{
        background: styles.background,
      }}
      {...otherProps}
    >
      <span className="relative z-10 whitespace-nowrap">
        {children}
      </span>
    </Component>
  );
}
